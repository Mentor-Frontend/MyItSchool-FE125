import styled from 'styled-components';

const StyledMenu = styled.ul`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-150%)'};
  height: 20vh;
  text-align: left;
  padding: 1.3rem 1.3rem 1.3rem 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width:max-content;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  list-style: none;
  width: 80%;
  /* @media (max-width: 567px) {
      width: 100%;
    } */
  li {
    font-size: 1.2rem;
    text-transform: uppercase;
    /* padding: 2rem 0; */
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: left;
    :hover {
      background-color: darkgray;
    }    
    
    
  }
`;

export default StyledMenu;