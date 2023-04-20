import styled from "styled-components";

const CartAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 150px;

  @media (max-width: 426px) {
    width: auto;
  }
`;
export default CartAndButton;
