import { cx, css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { buttonStyles } from "../styled/reset-button-styles";

const CalculatorWrapper = styled.section`
  border-radius: 4px;
  width: 70%;
  /* min-height: 25rem; */
`;

const Head = styled.div`
  /* margin-bottom: 1rem; */
`;

const Display = styled.div`
  width: 100%;
  border: 1px solid var(--dark);
  border-radius: 4px 4px 0 0;
  padding: 0.5rem 0.8rem;
  height: 4rem;
  background-color: var(--white);
  color: var(--dark);
`;

const TopRow = styled.div`
  display: flex;
  button {
    ${buttonStyles}
    flex: 1;
    background-color: var(--button-bg);
    color: var(--white);
  }
`;

const numbersStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  button {
    ${buttonStyles}
    &:nth-of-type(4) {
      background-color: var(--button-bg);
      color: var(--white);
    }
    &:nth-of-type(8) {
      background-color: var(--button-bg);
      color: var(--white);
    }
    &:nth-of-type(12) {
      background-color: var(--button-bg);
      color: var(--white);
    }
    &:nth-of-type(13) {
      grid-column: span 2;
    }
    &:nth-of-type(15) {
      background-color: var(--button-bg);
      color: var(--white);
    }
  }

  /* &:not(:last-child) {
    margin-right: 0.2rem;
  } */
`;

type ButtonName =
  | "AC"
  | "+"
  | "+/-"
  | "c"
  | "%"
  | "-"
  | "x"
  | "="
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

const isNumber = (n: string) => /[0-9]+/.test(n);

const calculate = (state: State, buttonName: ButtonName): State => {
  if (buttonName === "AC") {
    return {
      ...state,
      total: "0",
      next: "0",
      operation: null,
    };
  }

  // if (isNumber(buttonName)) {
  if (buttonName === "0") {
    return {
      ...state,
      next: buttonName,
    };
  }
  if (buttonName === "1") {
    return {
      ...state,
      next: buttonName,
    };
  }
  // }
  return state;
};

interface State {
  total: string;
  next: string;
  operation: null | string;
}

export const Calculator = () => {
  const [state, setState] = useState<State>({
    total: "0",
    next: "0",
    operation: null,
  });

  const handleClick = (action: ButtonName) => {
    console.log(state);
    setState(p => ({ ...p, next: action }));
    const result = calculate(state, action);
    setState(result);
  };

  return (
    <CalculatorWrapper>
      <Head className="head">
        <Display>{state.next || state.total || "0"}</Display>
      </Head>
      <div className="body">
        <TopRow className="top-row">
          <button onClick={() => handleClick("AC")}>AC</button>
          <button onClick={() => handleClick("+/-")}>+/-</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("c")}>C</button>
        </TopRow>

        <div className={cx(numbersStyle, "numbers")}>
          <button name="1" onClick={() => handleClick("1")} className="btn-1">
            1
          </button>
          <button name="2" onClick={() => handleClick("2")} className="btn-2">
            2
          </button>
          <button name="3" onClick={() => handleClick("3")} className="btn-3">
            3
          </button>
          <button name="x" onClick={() => handleClick("x")} className="btn-4">
            X
          </button>
          <button name="4" onClick={() => handleClick("4")} className="btn-5">
            4
          </button>
          <button name="5" onClick={() => handleClick("5")} className="btn-6">
            5
          </button>
          <button name="6" onClick={() => handleClick("6")} className="btn-7">
            6
          </button>
          <button name="-" onClick={() => handleClick("-")} className="btn-8">
            -
          </button>
          <button name="7" onClick={() => handleClick("7")} className="btn-9">
            7
          </button>
          <button name="8" onClick={() => handleClick("8")} className="btn-10">
            8
          </button>
          <button name="9" onClick={() => handleClick("9")} className="btn-11">
            9
          </button>
          <button name="+" onClick={() => handleClick("+")} className="btn-12">
            +
          </button>
          <button name="0" onClick={() => handleClick("0")} className="btn-13">
            0
          </button>
          <button name="." onClick={() => handleClick("-")} className="btn-14">
            .
          </button>
          <button name="=" onClick={() => handleClick("=")} className="btn-15">
            =
          </button>
        </div>
      </div>
    </CalculatorWrapper>
  );
};
