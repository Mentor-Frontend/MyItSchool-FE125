import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: rgba(58, 163, 159, 1);
  text-decoration: none;

  transition: 200ms;

  border: 3px solid rgba(58, 163, 159, 1);
  background: #fff;
  border-radius: 15px;
  width: 80px;
  height: 50px;
  cursor: pointer;


  &:hover {
    background: rgba(58, 163, 159, 1);
    color: #fff;
  }

  &:active {
    background: rgba(58, 163, 159, 1) !important;
    color: #fff !important;
  }
`;

export default ButtonStyled;