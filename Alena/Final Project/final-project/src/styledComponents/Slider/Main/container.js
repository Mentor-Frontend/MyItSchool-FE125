import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-left: 155px;
    align-items: center;
    @media (max-width: 1288px){
        margin-left: 115px;
    }
    @media (max-width: 965px){
        margin-left: 0px;
    }
`

const InfoFirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 64px;
    @media(max-width: 965px){
        margin-left: 0;
        align-items: center;
    }
`
const InfoSecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 34px;
    @media(max-width: 965px){
        margin-left: 0;
        align-items: center;
    }
`
const InfoThirdContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 61px;
    @media(max-width: 965px){
        margin-left: 0;
        align-items: center;
    }
`
const InfoFourthContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 49px;
    @media(max-width: 965px){
        margin-left: 0;
        align-items: center;
    }
`

const BlocksContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    flex-wrap: wrap;
    @media(max-width: 1087px){
        width: 262px;
    }
    @media(max-width: 965px){
        width: 520px;
    }
    @media(max-width: 546px){
        width: 260px;
    }
`

const BlocksStyled = styled.button`
    border: #BFD087 1px solid;
    margin-right: 4px;
    margin-left: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 143px;
    height: 40px;
    color: #BFD087;
    background: white;
    margin-top: 8px;
    &:hover{
        scale: 1.025;
    }
     &:active {
        scale: 0.95;
    }
    @media(max-width: 1216px){
        width: 122px;
    }
  
`

const MainCounterStyled = styled.div`
display: flex;
flex-diraction: row;
margin-bottom: 32px;
@media(max-width: 965px){
    justify-content: center;
}
`

const PlusMinusStyled = styled.button`
    border: grey 1px solid;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
     &:active {
        scale: 0.95;
    }
`
const ButtonStyled = styled.button`
    border: #688800 1px solid;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    width: 203px;
    height: 48px;
    background-color: white;
     &:active {
        scale: 0.95;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ImgArrow = styled.img`
    &:active {
        scale: 0.85;
    }
    width: 10px;
`

const MainImg = styled.img`
    width: 393px;
    height: fit-content;
    @media(max-width: 1157px){
        width: 342px;
    }
    @media(max-width: 525px){
        width: 242px;
    }
    @media(max-width: 312px){
        width: 200px;
    }
`

export {Container, InfoFirstContainer,InfoFourthContainer, InfoSecondContainer, InfoThirdContainer, 
    BlocksContainerStyled, BlocksStyled, MainCounterStyled, 
    PlusMinusStyled, ButtonStyled, ButtonContainer, ImgArrow, MainImg};