import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  max-width: 1200px;
  min-height: 70px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 1024px) {
    max-width: 750px;
    justify-content: space-between;
  }
`;

export default ContainerStyled;
