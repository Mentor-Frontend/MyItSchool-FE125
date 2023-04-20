import styled from "styled-components";

const WindowButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 39px;
  color: #fff;
  border: none;

  background-image: linear-gradient(rgba(58, 163, 159, 1) 50%, rgba(23, 24, 59, 1) 50%);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  transition: .2s;
  
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;

  &:hover{
    background-color: rgba(23, 24, 59, 1);
    background-position: 0 100%;
  }
`

export default WindowButton;  