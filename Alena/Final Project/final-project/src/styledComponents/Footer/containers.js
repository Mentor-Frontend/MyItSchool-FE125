import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-scroll";

const FooterStyled = styled.footer`
    background-color: #728536;
    
`;

const NavFooterStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    @media (max-width: 1350px){
        margin-left: 36px;
    }
    @media (max-width: 1250px){
        margin-left: 0px;
    }
    @media (max-width: 1087px){
        margin-left: -11px;
    }
    @media (max-width: 1010px){
        margin-left: 0px;
        margin-bottom: 10px;
    }
    @media (max-width: 630px){
        flex-direction: column;
    }
`

const ContainerStyled = styled.div`
    max-width: 1496px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 1010px){
         flex-direction: column;
    }
`

const ImgNav = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 92px;
    @media (max-width: 1350px){
        margin-left: 66px;
    }
    @media (max-width: 1198px){
        margin-left: 23px;
    }
    @media (max-width: 1010px){
        margin-left: 0px;
    }
`;

const NavFooterLinkStyled = styled(NavLink)`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding-left: 40px;
     transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media (max-width: 1010px){
       padding-left: 0px;
    }
    @media (max-width: 630px){
       margin-bottom: 14px;
    }
`

const LinkFooterStyled = styled(Link)`
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding-left: 40px;
    cursor: pointer;
     transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media(max-width: 1156px){
        padding-left: 26px;
    }
    @media (max-width: 630px){
        padding-left: 0px;
       margin-bottom: 14px;
    }
`
const ImgLink = styled(NavLink)`
    margin-left: 30px;
     transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media(max-width: 1087px){
        margin-left: 19px;
    }
    @media(max-width: 1010px){
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const ImgStyled = styled(NavLink)`
    margin-left: 150px;
    @media (max-width: 1383px){
        margin-left: 90px;
    }
    @media (max-width: 1383px){
        margin-left: 40px;
    }
    @media (max-width: 1010px){
        margin-left: 0px;
        margin-bottom: 10px;
    }
`;

const LogoImg = styled.img`
    width: 140px;
`

export {FooterStyled, NavFooterStyled, ContainerStyled, ImgNav, NavFooterLinkStyled, LinkFooterStyled, ImgLink, ImgStyled, LogoImg};
