import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

const ModalStyled = styled(Modal.Body)`
   display: flex;
   flex-direction: column;
   padding-left: 32px;
   padding-right: 32px;
   padding-top: 32px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
    width: 100%;
    justify-content: space-between;
`

const TitleStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: #4A4A4A;
    margin-bottom:0;
`
const ButtonPopupStyled = styled.button`
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
    translate: -40px;
    &:hover {
        background: linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%);
        border-color: white;
        color: white;
    }
    &:active {
        scale: 0.95;
    }
    @media(max-width: 323px){
        font-size: 16px;
    }
` 
const ImgPopupStyled = styled.img`
    width: 138px;
    translate: -18px;
    z-index: 1;
`

const ClosePopupStyled = styled.img`
    width: 32px;
    transition: all .3s ease 0s;
    cursor: pointer;
    &:hover {
       transform: translateY(-5px);
    }
`
const ImgOilSuccess = styled.img`
    width: 183px;
    @media(max-width: 411px){
        display: none;
    }
` 
const ImgOilFale = styled.img`
    width: 150px;
    @media(max-width: 411px){
        display: none;
    }
`

const TextAreaStyled = styled.textarea`
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    width: 100%;
    height: 124px;
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
`

const TextSuccessStyled = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4A4A4A;
    max-width: 250px;
    @media(max-width: 411px){
        text-align: center;
    }
`


const TextFailStyled = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #4A4A4A;
    max-width: 270px;
    margin-right: 10px;
    @media(max-width: 411px){
        margin-right: 0px;
        text-align: center;
    }
`

const InfoContainerPopup = styled.div`
    display: flex;
    flex-difection: row;
    align-items: center;
    @media(max-width: 411px){
        items-content: center;
    }
`

export { ModalStyled, TitleContainer,TitleStyled, ButtonPopupStyled, ImgPopupStyled, 
    ClosePopupStyled, ImgOilFale, ImgOilSuccess, TextAreaStyled, TextSuccessStyled, TextFailStyled, InfoContainerPopup }