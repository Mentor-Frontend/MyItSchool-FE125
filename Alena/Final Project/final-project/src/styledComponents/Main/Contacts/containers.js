import styled from "styled-components";

const MainContainer = styled.div`
    max-width: 1139px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
`
const BlockStyled = styled.div`
    translate: 154px;
    margin-top: 35px;
    width: 153px;
    height: 424px;
    background: #C3CF99;
    @media(max-width: 1049px){
        display: none;
    }
`

const ImgContainer = styled.img`
    width: 609px;
    height: fit-content;
    z-index: 2;
    translate: 92px;
    @media(max-width: 1121px){
        width: 580px;
    }
    @media(max-width: 1079px){
        width: 565px;
    }
    @media(max-width: 1049px){
        translate: 134px;
    }
    @media(max-width: 961px){
        translate: 98px;
        width: 494px;
    }
    @media(max-width: 878px){
        translate: 133px;
        width: 494px;
    }
    @media(max-width: 775px){
        translate: 67px;
        width: 417px;
    }
    @media(max-width: 694px){
        translate: 0px;
    }
    @media(max-width: 422px){
        width: 331px;
    }
    @media(max-width: 341px){
        width: 276px;
    }
`
const InfoContainer = styled.div`
    width: 377px;
    translate: -94px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    z-index: 3;
    margin-top: 32px;
    box-shadow: 10px 10px 35px 0px #BEBFB71A;
    @media(max-width: 1049px){
        translate: -31px;
    }
    @media(max-width: 878px){
        translate: 346px -121px;
    }
    @media(max-width: 775px){
        translate: 268px -121px;
    }
    @media(max-width: 694px){
        translate: 0px -82px;
    }
    @media(max-width: 422px){
        translate: 0px -51px;
        width: 298px;
    }
    @media(max-width: 341px){
        width: 258px;
    }
`

const ItemsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    @media(max-width: 422px){
        margin-top: 16px;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    @media(max-width: 422px){
        margin-bottom: 16px;
    }
`

const TextStyled = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 125%;
    color: #4A4A4A;
    margin-left: 32px;
    transition: all .3s ease 0s;
    width: 250px;
    &:hover {
        font-weight: 500;
    }
    @media(max-width: 422px){
        font-size: 14px;
        margin-left: 16px;
        width: fit-content;
    }
    @media(max-width: 341px){
        font-size: 12px;
    }
`

const ButtonStyled = styled.button`
    background: white;
    border: 1px solid #688800;
    border-radius: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #688800;
    margin-left: 78px;
    margin-right: 78px;
    width: 222px;
    margin-bottom: 32px;
    &:hover {
        border: white 1px solid;
        background: linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%);
        color: white;
    }
     &:active {
        scale: 0.95;
    }
    @media(max-width: 422px){
         margin-left: 0;
        margin-right: 0;
        margin-bottom: 16px;
    }
`
const ImgLinkStyled = styled.a`
    transition: all .3s ease 0s;
    &:hover {
        transform: translateY(-5px);
    }
`
const FlexRowStyled = styled.div`
    display: flex;
    display-direction: row;
    @media(max-width: 878px){
        flex-direction: column;
        margin-bottom: -159px;
    }
    @media(max-width: 694px){
        align-items: center;
        margin-bottom: -101px;
    }
`
const ImgContainerLink = styled.img`
    width: 32px;
    @media(max-width: 422px){
        width: 24px;
    }
`

export { MainContainer, BlockStyled, ImgContainer, InfoContainer, 
    ItemsContainerStyled, ItemContainer, TextStyled, ButtonStyled, ImgLinkStyled,
FlexRowStyled, ImgContainerLink}