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
  border: none;
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

interface State {
  total: number;
  next: number;
  operation: null | string;
}

export const Calculator = () => {
  const [state, setState] = useState<State>({
    total: 0,
    next: 0,
    operation: null,
  });

  const handleClick = (n: number) => {
    // setSelectedNumbers(p => ({ ...p, n1: n }));
  };

  return (
    <CalculatorWrapper>
      <Head className="head">
        <Display>{state.next || state.total || "0"}</Display>
      </Head>
      <div className="body">
        <TopRow className="top-row">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/C</button>
        </TopRow>

        <div className={cx(numbersStyle, "numbers")}>
          <button name="1" onClick={() => handleClick(1)} className="btn-1">
            1
          </button>
          <button name="2" onClick={() => handleClick(1)} className="btn-2">
            2
          </button>
          <button name="3" onClick={() => handleClick(1)} className="btn-3">
            3
          </button>
          <button name="x" onClick={() => handleClick(1)} className="btn-4">
            X
          </button>
          <button name="5" onClick={() => handleClick(1)} className="btn-5">
            5
          </button>
          <button name="6" onClick={() => handleClick(1)} className="btn-6">
            6
          </button>
          <button name="7" onClick={() => handleClick(1)} className="btn-7">
            7
          </button>
          <button name="-" onClick={() => handleClick(1)} className="btn-8">
            -
          </button>
          <button name="9" onClick={() => handleClick(1)} className="btn-9">
            9
          </button>
          <button name="10" onClick={() => handleClick(1)} className="btn-10">
            10
          </button>
          <button name="11" onClick={() => handleClick(1)} className="btn-11">
            11
          </button>
          <button name="+" onClick={() => handleClick(1)} className="btn-12">
            +
          </button>
          <button name="0" onClick={() => handleClick(1)} className="btn-13">
            0
          </button>
          <button name="." onClick={() => handleClick(1)} className="btn-14">
            .
          </button>
          <button name="=" onClick={() => handleClick(1)} className="btn-15">
            =
          </button>
        </div>
      </div>
    </CalculatorWrapper>
  );
};
