import styled from "styled-components"; 

const MainContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1066px;
    margin-top: 80px;
    margin-bottom: 80px;
    @media(max-width: 1156px){
        max-width: 800px;
    }
    @media(max-width: 879px){
        max-width: 507px;
    }
    @media(max-width: 591px){
        max-width: 274px;
    }
    @media(max-width: 314px){
        max-width: 202px;
    }
`
const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const ProductsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 10px 35px 0px #BEBFB71A;
    width: 244px;
    margin-right: 15px;
    margin-left: 15px;
    @media(max-width: 314px){
        width: 172px
    }
`

const ButtonStyled = styled.button`
    background: white;
    width: 212px;
    height: 32px;
    border: 1px solid #009246;
    border-radius: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    &:active {
        scale: 0.95;
    }
    @media(max-width: 314px){
        width: 160px;
    }
`
const BlockInfoStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    align-items: center;
`
const PriceStyled = styled.div`
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`

export {MainContainer, FlexContainer, ProductsContainerStyled, ButtonStyled, BlockInfoStyled, PriceStyled};