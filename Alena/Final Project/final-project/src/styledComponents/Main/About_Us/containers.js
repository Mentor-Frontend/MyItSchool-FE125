import styled from "styled-components";

const MainContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1195px;
`
const WhoContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    @media(max-width: 961px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 0px;
    }
`
const ImgWeStyled = styled.div`
    z-index: 1;
    @media(max-width: 1156px){
        translate: 63px;
    }
    @media(max-width: 1087px){
        translate: 51px;
    }
    @media(max-width: 1040px){
        translate: 127px;
    }
    @media(max-width: 1040px){
        translate: 97px;
    }
    @media(max-width: 961px){
        translate: 0px;
    }
`
const ImgDoStyled = styled.div`
    z-index: 1;
    @media(max-width: 1156px){
        translate: 32px;
    }
    @media(max-width: 1087px){
        translate: 12px;
    }
    @media(max-width: 991px){
        translate: 0px;
    }
    @media(max-width: 961px){
        translate: 0px -44px;
    }
    @media(max-width: 367px){
        translate: 0px -25px;
    }
`

const TextAreaFirstContainer = styled.div`   
    z-index: 2;
    margin-top: 48px;
    background-color: white;
    width: 609px;
    translate: -48px;
    @media(max-width: 1156px){
        width: fit-content;
        translate: -24px;
    }
    @media(max-width: 1087px){
        translate: -51px;
    }
    @media(max-width: 1040px){
        translate: 32px;
    }
    @media(max-width: 991px){
        translate: 0px;
    }
    @media(max-width: 961px){
        translate: 0px -113px;
        box-shadow: 10px 10px 35px 0px rgba(106, 106, 106, 0.31);
    }
    @media(max-width: 367px){
        translate: 0px -77px;
    }
`
const TextAreaSecondContainer = styled.div`
    z-index: 2;
    margin-top: 48px;
    background-color: white;
    width: 609px;
    translate: 61px;
    @media(max-width: 1156px){
        width: fit-content;
        translate: 116px;
    }
    @media(max-width: 1087px){
        translate: 97px;
    }
    @media(max-width: 991px){
        translate: 62px;
    }
     @media(max-width: 961px){
        translate: 0px;
        box-shadow: 10px 10px 35px 0px rgba(106, 106, 106, 0.31);
    }
`
const BlockTopContainer = styled.div`
    width: 153px;
    height: 357px;
    margin-top: 48px;
    background-color: #C3CF99;
    transform: translate(68px);
    @media(max-width: 1156px){
        translate: 72px;
    }
    @media(max-width: 1087px){
        translate: 50px;
    }
    @media(max-width: 1040px){
        display: none;
    }
`
const BlockBottomContainer = styled.div`
    width: 153px;
    height: 357px;
    margin-top: 48px;
    background-color: #C3CF99;
    transform: translate(-48px);
    @media(max-width: 1087px){
        translate: -21px;
    }
    @media(max-width: 1040px){
        display: none;
    }
`

const ToDoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1195px;
     display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    @media(max-width: 961px){
        flex-direction: column;
        align-items: center;
    }
`
const ImgStyled = styled.img`
    width: 448px;
    @media(max-width: 461px){
        width: 348px;
    }
    @media(max-width: 367px){
        width: 276px;
    }
`

export { MainContainer, WhoContainerStyled, ImgWeStyled, 
    TextAreaFirstContainer, TextAreaSecondContainer, BlockTopContainer, 
    ToDoContainer, ImgStyled, ImgDoStyled, BlockBottomContainer}