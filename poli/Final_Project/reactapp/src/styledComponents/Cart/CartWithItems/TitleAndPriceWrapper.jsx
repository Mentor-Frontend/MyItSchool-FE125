import styled from "styled-components";

const TitleAndPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 625px;

  @media (max-width: 1280px) {
    width: 550px;
  }

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 426px) {
    width: 200px;
  }
`;

export default TitleAndPriceWrapper;
