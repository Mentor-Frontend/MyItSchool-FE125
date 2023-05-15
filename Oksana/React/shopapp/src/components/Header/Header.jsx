import React, { useState,useRef  } from "react";
import logo from "../../img/logo.png";
import HeaderStyled from "../../styledComponents/Header/index.jsx";
import Flex from "../../styledComponents/Other/Flex";
import NavStyled from "../../styledComponents/Nav";
import NavLinkStyled from "../../styledComponents/Header/Link";
import { useOnClickOutside,useResize } from "../Layout/hooks";
import Burger from '../Burger';
import Menu  from '../Menu';
import Cart from "../Cart";
import { NavLink } from "react-router-dom";

const Header=()=>{
    let [open, setOpen] = useState(false);
    const node = useRef();
 
    const widthNow = useResize();
    if (widthNow>567) {
        open=false;
    }
    useOnClickOutside(node, () => setOpen(open));  

    return ( 
        
           <HeaderStyled>
                  <Flex>
                       <div ref={node}>
                             <Burger open={open} setOpen={setOpen} />
                             <Menu open={open} setOpen={setOpen} />
                        </div> 
  
                   <div>   
                   <img  width={200} src={logo} alt=""/> 
                   </div>
                    <NavStyled>
                 
                        <NavLinkStyled to='' >Главная</NavLinkStyled>
                        <NavLinkStyled to='/gallery'>О нас</NavLinkStyled>
                        <NavLinkStyled to='/products'>Магазин</NavLinkStyled>
                        <NavLinkStyled to='/contacts'>Контакты</NavLinkStyled>
                        

                    </NavStyled>

                    <NavLink to='/cart'>
                        <Cart />
                    </NavLink>
            </Flex>
        
           </HeaderStyled>
 
    )
}
export default Header