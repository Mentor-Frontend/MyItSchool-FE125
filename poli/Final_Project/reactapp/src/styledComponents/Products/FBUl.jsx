import styled from "styled-components";

const FBUl = styled.ul`
  padding: 0;

  @media (max-width: 426px) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default FBUl;
