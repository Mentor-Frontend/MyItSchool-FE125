import styled from "styled-components";

const CDAndBurfer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    gap: 55px;
    flex-direction: row;

    @media (max-width: 426px) {
      gap: 10px;
    }
  }
`;

export default CDAndBurfer;
