import styled from "styled-components";


const HeaderStyled = styled.header `
    position: sticky;
    top: 0;
    max-width: 1280px;
    z-index: 10;
    width: auto;
    margin: 0 auto;
    background: rgb(0,0,0);
    /* background: linear-gradient(#b4a7ab, #2c0c0c); */
     box-shadow: 0px 4px 4px #b4a7ab;

    @media (max-width: 1200px) {
        max-width: 950px;
    }
    @media (max-width: 900px) {
        max-width: 700px;
    }
    @media (max-width: 700px) {
        max-width: 567px;
    }
    @media (max-width: 567px) {
        max-width: 400px;
    }
    @media (max-width: 400px) {
        max-width: 370px;
    }

    button {
            display: none;
        }

    nav {
        display: flex;
    }    

    @media (max-width: 567px) {
        button {
            display: flex;
        }
        nav {
            display: none;
        }
    }
  
`

export default HeaderStyled