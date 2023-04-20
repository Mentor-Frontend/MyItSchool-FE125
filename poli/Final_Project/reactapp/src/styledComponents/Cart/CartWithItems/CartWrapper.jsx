import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1280px;
  padding-top: 150px;
  min-height: 90vh;
  margin: 0 auto;

  @media (max-width: 1280px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    padding-top: 160px;
    justify-content: space-around;
  }

  @media (max-width: 912px) {
  align-items: center;
  flex-direction: column;
  }
`

export default CartWrapper;
