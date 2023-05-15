import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavLinkStyled=styled(NavLink)`

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.25rem;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        color: white;
        font-weight: 900;
    }
`
export default NavLinkStyled;