import styled from "styled-components";

const BurgerContainer = styled.button`
  display: none;
  left: 0;
  font-size: 30px;
  padding: 10px;
  line-height: 0;
  color: #fff;
  background: rgba(58, 163, 159, 1);
  border-radius: 4px;
  z-index: 11;
  border: none;

  @media (max-width: 1024px){
    display: block;
  }

  @media (max-width: 426px) {
    margin-right: 15px;
  }
`;

export default BurgerContainer;
