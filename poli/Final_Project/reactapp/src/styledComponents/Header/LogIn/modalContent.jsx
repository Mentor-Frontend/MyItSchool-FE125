import styled from "styled-components";

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  width: 550px;
  height: 550px;
  transform: scale(0.5);
  transition: 0.4s all;
  overflow: hidden;

  &.active {
    transform: scale(1);
  }

  @media (max-width: 426px) {
    width: 390px;
    height: 575px;
  }
`;

export default ModalContent;
