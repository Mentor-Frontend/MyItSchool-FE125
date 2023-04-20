import styled from "styled-components";

const ProductImage = styled.img`
    display: block;
    width: 100%;
    height: 580px;

    @media(max-width: 426px) {
        height: 390px;
    }
`

export default ProductImage;