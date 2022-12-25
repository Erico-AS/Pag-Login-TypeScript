import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, estado }: IButtonProps) => {
  return {estado == 'true' ? <ButtonContainer onClick={onClick} >{title}</ButtonContainer> : <ButtonContainer disabled onClick={onClick} >{title}</ButtonContainer>};
};

export default Button;