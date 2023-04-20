import styled from "styled-components";

const CContainer = styled.div`
  width: 900px;

  @media (max-width: 912px) {
    width: 700px;
  }

  @media (max-width: 426px) {
    width: 390px;
  }

  @media (max-width: 376px) {
    width: 340px;
  }

  @media (max-width: 321px) {
    width: 310px;
  }
`;
export default CContainer;
