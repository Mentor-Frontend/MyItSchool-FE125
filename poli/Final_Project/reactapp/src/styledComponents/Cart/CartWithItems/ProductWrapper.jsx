import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 820px;
  min-height: 160px;
  margin-bottom: 50px;

  padding-bottom: 15px;
  border-bottom: 2px solid rgba(209, 209, 216, 1);

  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

export default ProductWrapper;
