import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import styled from 'styled-components';

const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.90);
`
const HeaderContainerStyled = styled.div`
    max-width: 1496px;
    margin-left: auto;
    margin-right: auto;
`

const NavStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    align-items: center;
    @media(max-width: 959px){
        flex-direction: column;
         margin-left: 0px;
         margin-top: 30px;
    }
`
const NavLinkStyled = styled(NavLink)`
    font-family: El Messiri;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color: #688800;
    padding-left: 64px;
    transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media(max-width: 1198px){
        padding-left: 34px;
    }
    @media(max-width: 959px){
        padding-left: 0px;
        margin-bottom: 40px;
        font-size: 32px;
        color: white;
    }
   
`
const LinkStyled = styled(Link)`
    font-family: El Messiri;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color: #688800;
    padding-left: 64px;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media(max-width: 1198px){
        padding-left: 34px;
    }
    @media(max-width: 959px){
        padding-left: 0px;
        margin-bottom: 40px;
        font-size: 32px;
        color: white;
    }
`

const FlexStyled = styled.div`
    margin-left: 121px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1383px){
        margin-left: 88px;
    }
    @media (max-width: 1350px){
        margin-left: 75px;
    }
    @media (max-width: 1288px){
        margin-left: 38px;
    }
    @media(max-width: 1198px){
        margin-left: 63px;
    }
    @media(max-width: 1087px){
        margin-left: 46px;
    }
    @media(max-width: 991px){
        margin-left: 17px;
    }
    @media(max-width: 959px){
        justify-content: space-between;
        margin-left: 40px;
    }
    @media(max-width: 401px){
        margin-left: 16px;
    }
    @media(max-width: 312px){
        margin-left: 4px;
    }
`
const CartStyled = styled(NavLink)`
    display: flex;
    flex-direction: row;
    margin-left: 110px;
    transition: all .3s ease 0s;
    &:hover {
       transform: translateY(-5px);
    }
    @media (max-width: 1350px){
        margin-left: 72px;
    }
    @media(max-width: 1040px){
        margin-left: 59px;
    }
    @media(max-width: 959px){
        margin-left: 37px;
        margin-right: 40px;
    }
    @media(max-width: 401px){
        margin-right: 16px;
    }
    @media(max-width: 312px){
        margin-left: 10px;
    }
`
const BlockStyled = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    background-color: #D73A31;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    translate: -6px -11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #FFFFFF;
`
const LogoImg = styled.img`
    width: 212px;
    @media(max-width: 1248px){
        width: 174px;
    }
    @media(max-width: 1040px){
        width: 148px;
    }
    @media(max-width: 401px){
        width: 126px;
    }
`

export {HeaderStyled, NavStyled, NavLinkStyled, LinkStyled, BlockStyled, CartStyled, FlexStyled, LogoImg, HeaderContainerStyled};