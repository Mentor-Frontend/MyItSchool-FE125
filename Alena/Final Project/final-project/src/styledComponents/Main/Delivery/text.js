import styled from "styled-components";

const TextElement = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4A4A4A;
    margin-bottom: 0;
    margin-top: 16px;
    transition: all .3s ease 0s;
    text-align: center;
    @media(max-width: 433px){
        font-size: 14px;
    }
`
const NameTextTopStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 125%;
    color: #4A4A4A;
    margin-left: 30px;
    @media(max-width: 783px){
        margin-left: 0;
    }
`

const NameTextBottomStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 125%;
    color: #4A4A4A;
    margin-right: 30px;
    @media(max-width: 783px){
        margin-right: 0;
    }
`

export {TextElement, NameTextTopStyled, NameTextBottomStyled};