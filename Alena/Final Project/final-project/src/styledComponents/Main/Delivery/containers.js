import styled from "styled-components";

const ContainerStyeled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 64px;
    @media(max-width: 783px){
        flex-direction: column-reverse;
    }
   
`

const ContainerSecondStyeled = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 64px;
    @media(max-width: 783px){
        flex-direction: column-reverse;
    }
`

const ImgContainerStyled = styled.img`
    transition: all .3s ease 0s;
    width: 40px;
`

const RectangleTopStyled = styled.div`
    height: 123px;
    background-color: #EDF4D2;
    box-shadow: 10px 10px 35px rgba(190, 191, 183, 0.1);
    display: flex;
    flex-direction: row;
    flex: 0 1 53%;
    justify-content: flex-end;
    align-items: center;
    @media(max-width: 783px){
        flex: none;
        width: 100%;
        justify-content: center;
    }
`
const RectangleBottomStyled = styled.div`
    height: 123px;
    background-color: #EDF4D2;
    box-shadow: 10px 10px 35px rgba(190, 191, 183, 0.1);
    display: flex;
    flex-direction: row;
    flex: 0 1 53%;
    justify-content: flex-start;
    align-items: center;
    text-align: right;
    @media(max-width: 783px){
        flex: none;
        width: 100%;
        justify-content: center;
    }
`

const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 64px;
    width: 90px;
    &:hover .IMG {
        transform: translateY(-5px);
    }
    &:hover .TEXT {
        font-weight: 500;
    }
    @media(max-width: 433px){
        margin-right: 24px;
    }
    @media(max-width: 312px){
        margin-right: 0px;
    }
`
const ElementFirstLastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
    width: 90px;
    &:hover .IMG {
        transform: translateY(-5px);
    }
    &:hover .TEXT {
        font-weight: 500;
    }
    @media(max-width: 783px){
        margin-right: 0;
    }
`
const ElementSecondFirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 64px;
    margin-left: 24px;
    width: 160px;
    &:hover .IMG {
        transform: translateY(-5px);
    }
    &:hover .TEXT {
        font-weight: 500;
    }
    @media(max-width: 1156px){
        width: 110px;
    }
    @media(max-width: 783px){
        margin-left: 0;
    }
    @media(max-width: 433px){
        margin-right: 24px;
        width: 90px;
    }
    @media(max-width: 312px){
        margin-right: 0;
    }
`
const ElementSecondLastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 64px;
    width: 231px;
    &:hover .IMG {
        transform: translateY(-5px);
    }
    &:hover .TEXT {
        font-weight: 500;
    }
    @media(max-width: 1156px){
        width: 130px;
    }
    @media(max-width: 783px){
        margin-right: 0;
    }
    @media(max-width: 433px){
        width: 90px;
    }
    
`

const SpiceContainer = styled.img`
    width: 120px;
    translate: 350px 126px;
    @media(max-width: 1320px){
        translate: 317px 126px;
    }
    @media(max-width: 1239px){
        translate: 279px 126px;
    }
    @media(max-width: 1156px){
        translate: 244px 126px;
    }
    @media(max-width: 1087px){
        translate: 125px 53px;
    }
     @media(max-width: 928px){
       translate: 38px 65px;
    }
    @media(max-width: 783px){
        display: none;
    }
`
const OlivesContainer = styled.img`
    translate: -260px -116px;
    width: 191px;
    @media(max-width: 1320px){
        translate: -176px -116px;
    }
    @media(max-width: 1198px){
        translate: -111px -116px;
    }
    @media(max-width: 1087px){
        translate: -57px -48px;
    }
    @media(max-width: 928px){
        translate: 31px -70px;
    }
    @media(max-width: 783px){
        display: none;
    }
`

export {RectangleTopStyled, ContainerStyeled, ElementContainer, ImgContainerStyled, SpiceContainer, OlivesContainer,
ElementFirstLastContainer, ElementSecondFirstContainer, ElementSecondLastContainer, ContainerSecondStyeled, RectangleBottomStyled}