import styled from "styled-components";

const P = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 39px;
  color: rgba(23, 24, 59, 1);
  margin: 0;

  @media (max-width: 426px) {
    line-height: 30px;
    margin-top: 12px;
    font-size: 18px;
  }

  &.third {
    @media (max-width: 426px) {
      max-width: 385px;
      font-size: 16px;
    }

    @media (max-width: 426px) {
      max-width: 340px;
      font-size: 16px;
    }

    @media (max-width: 321px) {
      max-width: 300px;
      font-size: 16px;
    }
  }
`;

export default P;
