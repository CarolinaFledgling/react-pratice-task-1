import React, { useContext } from "react";
import styled from "./Button.module.css";
import { ReducerContext } from '../../ReducerContext'

export const Button = ({ type, onClick, children }) => {
  const { theme } = useContext(ReducerContext)
  return (
    <button className={styled.button} type={type || "button"} onClick={onClick} style={theme ? { background: "#011C27" } : {}}>
      {children}
    </button>
  );
};
