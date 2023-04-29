import styled from "styled-components";

const MainTextStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 125%;
    margin-bottom: 32px;
`

const MainNameStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 125%;
    color: #4A4A4A;
    @media(max-width: 525px){
        font-size: 52px;
    }
    @media(max-width: 312px){
        font-size: 42px;
    }
`

const MainDescriptionStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #4A4A4A;
    max-width: 609px;
    margin-bottom: 32px;
    @media (max-width: 1260px){
        max-width: 597px;
    }
    @media (max-width: 1216px){
        max-width: 467px;
    }
    @media (max-width: 1040px){
        max-width: 406px;
    }
    @media(max-width: 965px){
        max-width: 471px;
        text-align: center;
    }
    @media(max-width: 525px){
        max-width: 322px;
        font-size: 16px;
    }
     @media(max-width: 312px){
        max-width: 226px;
    }
`
const NumberStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-left: 25px;
    margin-right: 25px;
`

export {NumberStyled, MainTextStyled, MainNameStyled, MainDescriptionStyled};