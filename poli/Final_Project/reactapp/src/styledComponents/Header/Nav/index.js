import styled from "styled-components";

const NavStyled = styled.nav`
  &.navStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    max-width: 30%;

    @media (max-width: 1024px) {
      flex-direction: column;
      position: fixed;
      right: -100%;
      top: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
      z-index: 19;
      transition: right 0.2s;
      box-shadow: 0px 10px 10px gray;
    }
  }

  &.active {
    right: 0;
    padding: 0 100px 0 100px;
  }
`;

export default NavStyled;
