import styled from "styled-components";

const PNotFound = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: rgba(23, 24, 59, 1);
  margin-top: 20px;
  max-width: 600px;

  @media (max-width: 426px) {
    max-width: 390px;
    font-size: 16px;
  }
  
  @media (max-width: 376px) {
    max-width: 350px;
    font-size: 16px;
  }

  @media (max-width: 321px) {
    max-width: 300px;
    font-size: 16px;
  }
`;

export default PNotFound;
