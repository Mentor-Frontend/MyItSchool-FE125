import styled from "styled-components";

const ProductList = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
  }

  @media (max-width: 1024px) {
    max-width: fit-content;
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductList;
