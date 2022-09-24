import React from "react";
import styled from "./Button.module.css";

export const Button = ({ type, onClick, children }) => {
  return (
    <button className={styled.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};
