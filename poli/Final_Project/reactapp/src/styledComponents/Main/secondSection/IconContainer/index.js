import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 125px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 912px) {
    gap: 16px;
  }

  @media (max-width: 426px) {
    gap: 0px;
  }
`;

export default IconContainer;
