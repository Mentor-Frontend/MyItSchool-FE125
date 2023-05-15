import styled from "styled-components";

export const ButtonBuy = styled.button`
  text-decoration: none;
  width: 50%;
  background-color: rgba(236, 27, 27, 0.712);
  color: rgba(255, 238, 238, 0.712);
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: auto auto 10px auto;
  border-radius: 20px;    

  &:hover,
  &:active {
    box-shadow: 0 10px 10px 0 rgba(185, 103, 103, 0.712);
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 20px;
  }
`;
