import styled from "styled-components";

const ProductImage = styled.img`
  width: 160px;
  margin-right: 30px;

  @media (max-width: 426px) {
    width: 120px;
  }

  @media (max-width: 378px) {
    margin: auto;
    margin-right: 10px;
  }
`;

export default ProductImage;
