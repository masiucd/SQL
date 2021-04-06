import styled from "@emotion/styled";
import React, { useState } from "react";
import { buttonStyles } from "../styled/reset-button-styles";
import * as Math from "mathjs";

const CalculatorWrapper = styled.section`
  border-radius: 4px;
  width: 300px;
`;

const Head = styled.div`
  padding: 0.1rem 0;
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

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  .btn-AC {
    grid-row: span 2;
    background-color: var(--cyan-process);
  }
  .btn-equal {
    grid-column: span 4;
    background-color: var(--cyan-process);
  }
  .btn-mul {
    background-color: var(--cyan-process);
  }
  .btn-divide {
    background-color: var(--cyan-process);
  }
  .btn-plus {
    background-color: var(--cyan-process);
  }
  .btn-minus {
    background-color: var(--cyan-process);
  }
  .btn-dot {
    background-color: var(--cyan-process);
  }

  button {
    ${buttonStyles}
    padding: 1rem;
    background-color: var(--tiffany-blue);
    color: var(--white);
    transition: all 200ms ease-in-out;
    &:active {
      position: relative;
      top: 2px;
      opacity: 0.8;
    }
  }
`;

type ButtonName =
  | "AC"
  | "+"
  | "/"
  | "sqrt"
  | "%"
  | "-"
  | "*"
  | "="
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "."
  | "8"
  | "9";

const Calculator = () => {
  const [input, setInput] = useState<string[]>([]);

  const calculate = () => {
    const result = Math.evaluate(input.join(""));
    setInput([result]);
  };

  const handleClick = (action: ButtonName) => {
    switch (action) {
      case "0":
        setInput(p => [...p, action]);
        break;
      case "1":
        setInput(p => [...p, action]);
        break;
      case "2":
        setInput(p => [...p, action]);
        break;
      case "3":
        setInput(p => [...p, action]);
        break;
      case "4":
        setInput(p => [...p, action]);
        break;
      case "5":
        setInput(p => [...p, action]);
        break;
      case "6":
        setInput(p => [...p, action]);
        break;
      case "7":
        setInput(p => [...p, action]);
        break;
      case "8":
        setInput(p => [...p, action]);
        break;
      case "9":
        setInput(p => [...p, action]);
        break;
      case "+":
        setInput(p => [...p, action]);
        break;
      case "*":
        setInput(p => [...p, action]);
        break;
      case "-":
        setInput(p => [...p, action]);
        break;
      case "%":
        setInput(p => [...p, action]);
        break;
      case "/":
        setInput(p => [...p, action]);
        break;
      case ".":
        setInput(p => [...p, action]);

        break;
      case "AC":
        setInput([]);

        break;
      case "=":
        calculate();
        break;
      default:
        break;
    }
  };
  const keyboardValues = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "*",
    "0",
    "-",
    ".",
    "AC",
    "=",
  ];

  return (
    <CalculatorWrapper>
      <Head className="head">
        <Display>{input || ""}</Display>
      </Head>
      <Body className="body">
        {keyboardValues.map(v => (
          <button
            name={v}
            onClick={() => handleClick(v as ButtonName)}
            key={v}
            className={`btn-${
              v === "."
                ? "dot"
                : v === "="
                ? "equal"
                : v === "*"
                ? "mul"
                : v === "/"
                ? "divide"
                : v === "+"
                ? "plus"
                : v === "-"
                ? "minus"
                : v
            }`}
          >
            {" "}
            {v}{" "}
          </button>
        ))}
      </Body>
    </CalculatorWrapper>
  );
};

export default Calculator;
