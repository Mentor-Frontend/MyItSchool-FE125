import styled from "styled-components";

const RemoveButton = styled.button`
  width: 80px;
  height: 55px;

  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: #FF6969;
  text-decoration: none;

  transition: 200ms;

  border: 3px solid #FF6969;
  background: #fff;
  border-radius: 15px;
  cursor: pointer;


  &:hover {
    background: #FF6969;
    color: #fff;
  }

  &:active {
    background: #FF6969 !important;
    color: #fff !important;
  }
`;
export default RemoveButton;
