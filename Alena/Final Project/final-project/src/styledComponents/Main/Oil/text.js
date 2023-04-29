import styled from "styled-components";

const MainTextStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    color: #4A4A4A;
    margin-bottom: 40px;
`
const TitleStyled = styled.h2`
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 125%;
    margin-left: 16px;
`
const InfoTextStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 125%;
    color: #4A4A4A;
    margin: 16px;
    @media(max-width: 314px){
        width: 173px;
    }
`

const NumberStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 0;
    margin-left: 16px;
    margin-right: 16px;
`
const SizeTextStyled = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 32px;
    color: #4A4A4A;
`
const CostTextStyled = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
`

const BynTextStyled = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    padding-left: 4px;
`

export { MainTextStyled, TitleStyled, InfoTextStyled, NumberStyled, 
    SizeTextStyled, CostTextStyled, BynTextStyled};