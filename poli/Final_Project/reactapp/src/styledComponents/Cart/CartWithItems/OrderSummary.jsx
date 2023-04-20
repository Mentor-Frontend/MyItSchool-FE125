import styled from "styled-components";

const OrderSummary = styled.div`
  max-width: 380px;
  padding: 32px;
  border: 1px solid rgba(23, 24, 59, 1);

  @media (max-width: 426px) {
    padding: 16px;
  }
`;
export default OrderSummary;
