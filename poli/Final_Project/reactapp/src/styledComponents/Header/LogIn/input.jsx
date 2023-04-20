import styled from "styled-components";
import LabelStyled from "./label";

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;

  
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1.3em;
  color: rgb(63, 65, 106);
  padding: 0 35px 0 5px;

  &:focus ~ ${LabelStyled} {
    top: -5px;
  }

  &:valid ~ ${LabelStyled} {
    top: -5px;
  }
`;

export default InputStyled;
