import React from "react";
import { ButtonName } from "../../types";

interface ButtonProps {
  handleClick: (action: ButtonName) => void;
  v: ButtonName;
}
const Button = ({ handleClick, v }: ButtonProps) => {
  return (
    <button
      name={v}
      onClick={() => handleClick(v as ButtonName)}
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
  );
};

export default Button;
