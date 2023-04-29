import styled from "styled-components";

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }


  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(8.5px, 8px);
      width: 30px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
        opacity: 0;
        pointer-events: none;
      }

    span:nth-of-type(4) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 30px;
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 30px;
  height: 1.25px;
  margin-bottom: 6px;
  background-color: #688800;
  border-radius: 5px;
`;

const MenuContainer = styled.div`
position: fixed;
top: 125px;
left: 100%;
width: 350px;
height: 100%;
background-color: rgba(125, 160, 12, 0.88);
z-index: 100;
display: flex;
justify-content: center;
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
@media(max-width: 401px){
  top: 106px;
}
@media(max-width: 351px){
  width: 100%;
}
`

export { MenuButton, Bar, MenuContainer };