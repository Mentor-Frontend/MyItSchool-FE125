import styled from "styled-components";

const NavStyled = styled.nav `
    margin-left: auto;
    overflow: hidden;
    position: relative;
    top: 0;
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
    width: 70px;
    gap: 30px;
    
    :hover{
        color: rgba(185, 103, 103, 0.712);
           }
    }

       
 `
 
export default NavStyled;