import React from 'react';
import { bool, func } from 'prop-types';
import StyledMenu from '../../styledComponents/Menu';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  

  return (
    <StyledMenu open={open}  aria-hidden={!isHidden} {...props}>
      <li>
        <span></span>
        <Link onClick={() => setOpen(!open)} to='/'>Главная</Link>
    
      </li>

      <li>
        <span></span>
        <Link onClick={() => setOpen(!open)} to='/products'>Магазин</Link>
      </li>
      
       <li>  
        <span></span>
        <Link onClick={() => setOpen(!open)} to='/gallery'>О нас</Link>
      </li>

      <li>  
        <span></span>
        <Link onClick={() => setOpen(!open)} to='/contacts'>Задать вопрос</Link>
      </li>
      
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu;