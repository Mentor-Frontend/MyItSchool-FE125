import styled from "styled-components";

const H5 = styled.h5`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: rgba(23, 24, 59, 1);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export default H5;
