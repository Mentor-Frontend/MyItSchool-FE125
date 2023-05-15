import styled from "styled-components";

const COModalContent = styled.div`
  padding: 40px;
  border-radius: 15px;
  background: #fff;
  width: 550px;
  height: 650px;
  transform: scale(0.5);
  transition: 0.4s all;
  overflow: hidden;

  &.active {
    transform: scale(1);
  }

  @media (max-width: 1024px){
    height: 550px;
    overflow-y: scroll;
  }

  @media (max-width: 912px) {
    width: 750px;
    height: 550px;
  }

  @media (max-width: 768px){
    width: 550px;
  }
  
  @media (max-width: 426px) {
    width: 390px;
  }

  @media (max-width: 376px) {
    width: 355px;
  }
`;

export default COModalContent;
