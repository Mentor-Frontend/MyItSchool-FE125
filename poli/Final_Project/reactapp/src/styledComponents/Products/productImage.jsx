import styled from "styled-components";

const ProductImage = styled.img`
  display: block;
  border-radius: 10px;
  height: 300px;
  margin: auto;

  @media (max-width: 1280px) {
    margin: 0;
  }

  @media (max-width: 1024px) {
    height: 290px;
  }
`;

export default ProductImage;
