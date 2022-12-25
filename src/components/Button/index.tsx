import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";
import React from "react";

const Button = ({ title, onClick, estado }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} estado={estado}>{title}</ButtonContainer>;
};

export default Button;