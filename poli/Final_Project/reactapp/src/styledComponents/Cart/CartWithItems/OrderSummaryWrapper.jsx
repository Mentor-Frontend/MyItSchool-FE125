import styled from "styled-components";

const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 380px;

  &.check{
    @media (max-width: 376px) {
      max-width: 300px;
    }
  }
`

export default OrderSummaryWrapper;
