import styled from "styled-components";

const CounterButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid rgba(23, 24, 59, 1);
  border-radius: 8px;
  width: 160px;
  height: 55px;

  @media (max-width: 426px) {
    width: 120px;
  }
`;

export default CounterButtonWrapper;
