import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 580px;
  margin: 0 auto;

  @media (max-width: 426px) {
    width: 390px;
    margin-top: 20px;
  }

  @media (max-width: 376px) {
    width: 350px;
  }
`;

export default CarouselContainer;
