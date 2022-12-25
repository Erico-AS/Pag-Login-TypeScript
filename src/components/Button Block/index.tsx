import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const ButtonB = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer disabled >{title}</ButtonContainer> 
}

export default ButtonB;