import styled from "styled-components";

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 316px;

  &.TotalPrice {
    border-top: 2px solid rgba(209, 209, 216, 1);
  }

  &.check {
    @media (max-width: 376px) {
      width: 280px;
    }
  }
`;
export default Info;
