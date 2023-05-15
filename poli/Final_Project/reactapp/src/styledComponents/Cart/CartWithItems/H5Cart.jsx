import styled from "styled-components";

const H5Cart = styled.h5`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: rgba(23, 24, 59, 1);
  margin-top: 10px;

  &.info {
    font-size: 18px;
    font-weight: 500;
    margin-top: 0;
  }

  @media (max-width: 1280px) {
    font-size: 22px;
  }

  &.check{
    margin-top: 0;
  }
`;

export default H5Cart;
