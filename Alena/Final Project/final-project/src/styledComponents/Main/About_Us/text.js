import styled from "styled-components";

const TitleStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #4A4A4A;
    margin-top: 24px;
    margin-left: 24px;
    @media(max-width: 461px){
        text-align: center;
        margin-left: 0px;
    }
`
const TextStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #4A4A4A;
    width: 551px;
    margin-left: 24px; 
    @media(max-width: 1156px){
        width: 421px;
    }
    @media(max-width: 961px){
        width: 584px;
        margin: 24px;
    }
    @media(max-width: 683px){
        width: 355px;
    }
    @media(max-width: 461px){
        width: 269px;
        text-align: center;
    }
    @media(max-width: 367px){
        font-size: 14px;
        margin: 16px;
        width: 211px;
    }
`
const TextSecondStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #4A4A4A;
    width: 561px;
    margin-left: 24px; 
    margin-right: 24px;
    @media(max-width: 1156px){
        width: 421px;
    }
    @media(max-width: 961px){
        width: 584px;
        margin: 24px;
    }
    @media(max-width: 683px){
        width: 355px;
    }
     @media(max-width: 461px){
        width: 269px;
        text-align: center;
    }
    @media(max-width: 367px){
        font-size: 14px;
        margin: 16px;
        width: 211px;
    }
`

export {TitleStyled, TextStyled, TextSecondStyled};