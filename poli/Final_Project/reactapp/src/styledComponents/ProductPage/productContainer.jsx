import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1320px;
    gap: 50px;

    @media(max-width: 912px) {
        flex-direction: column-reverse;
    }
`

export default ProductContainer;