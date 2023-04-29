import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonBackStyled = styled.button`
    margin-top: 24px;
    margin-bottom: 24px;
    width: 234px;
    height: 48px;
    border: 1px solid #688800;
    background: white;
    border-radius: 50px;
    color: #688800;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%);
        border-color: white;
        color: white;
    }
     &:active {
        scale: 0.95;
    }
`

const ContainerFullStyled = styled.div`
    background: #F8FAF3;
    width: 100%;
    margin-top: 8px;
    display: block

`
const ContainerProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 990px;
    padding-top: 16px;
`
const MainContainerProductStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 32px;
    margin-right: 32px;
`
const InfoStyled = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
`
const CounterFlex = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    @media(max-width: 418px){
        flex-direction: column; 
    }
`

const FlexPrice = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: baseline;
    margin-left: 16px;
    @media(max-width: 418px){
        margin-left: 0px;
        margin-top: 10px; 
    }
`
const ButtonDeleteContainer = styled.div`
    max-width: 1066px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 32px;
    @media(max-width: 298px){
        margin-right: 0px;
        justify-content: center;
    }
`

const FormContainer = styled.form`
    max-width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    margin-bottom: 56px;
    justify-content: center;
    @media(max-width: 793px){
        flex-direction: column;
        align-items: center
    }
`
const FormBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start

`
const FormRightBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    @media(max-width: 973px){
        margin-left: 0px;
    }
`

const InputStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 486px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 24px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    @media(max-width: 1013px){
        width: 386px;
    }
    @media(max-width: 413px){
        width: 266px;
    }
`

const RadioStyled = styled.input`
   
    margin-right: 10px;
`
const RadioContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const TextAreaStyled = styled.textarea`
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    margin-top: 64px;
    width: 612px;
    height: 120px;
    resize: none;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    @media(max-width: 1013px){
        width: 386px;
    }
     @media(max-width: 973px){
        margin-top: 24px;
        margin-bottom: 24px;
    }
     @media(max-width: 413px){
        width: 266px;
    }
`

const PostContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    @media(max-width: 413px){
        flex-direction: column;
    }
`


const ButtonSubmitStyled = styled.button`
    width: 360px;
    height: 48px;
    margin-bottom: 24px;
    border: 1px solid #688800;
    background: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #688800;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        border-color: white;
        background: linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%);
        color: white;
    }
     &:active {
        scale: 0.95;
    }
     @media(max-width: 413px){
        width: 266px;
    }
`
const ButtonResetStyled = styled.button`
    width: 360px;
    height: 48px;
    border: 1px solid #949494;
    background: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #949494;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        border-color: white;
        background: linear-gradient(320.69deg, #3A363A 15.36%, #949494 84.86%);
        color: white;
    }
     &:active {
        scale: 0.95;
    }
     @media(max-width: 413px){
        width: 266px;
    }
`

const ImgCloseStyled = styled.img`
    width: 24px;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
`

const InputEtcStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 360px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 0px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    @media(max-width: 413px){
        width: 266px;
    }
`
const InputIndexStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 127px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 0px;
    margin-right: 16px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    @media(max-width: 413px){
        margin-bottom: 24px;
        margin-right: 0px;
    }
`

const InputCityStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 217px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 0px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    
`
const InputStreetStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 217px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 0px;
    margin-right: 16px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
    @media(max-width: 413px){
        margin-bottom: 24px;
        margin-right: 0px;
    }
`
const InputHouseStyled = styled.input`
    border: 1px solid #D9D9D9;
    width: 127px;
    height: 40px;
    border-radius: 4px;
    padding-left: 16px;
    margin-bottom: 0px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #BFBFBF;
    }
`

export {ContainerStyled, ButtonBackStyled, ContainerFullStyled, ContainerProductStyled, 
    InfoStyled, MainContainerProductStyled, CounterFlex, FlexPrice, ButtonDeleteContainer,
FormContainer, FormBlockStyled, InputStyled, RadioStyled, RadioContainer, TextAreaStyled,
PostContainerStyled, InputContainerStyled, ButtonResetStyled, ButtonSubmitStyled, ImgCloseStyled, 
InputEtcStyled, InputIndexStyled, InputCityStyled, InputStreetStyled, InputHouseStyled, FormRightBlockStyled}