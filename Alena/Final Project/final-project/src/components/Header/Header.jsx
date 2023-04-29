import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import {
  HeaderStyled,
  FlexStyled,
  NavLinkStyled,
  NavStyled,
  LinkStyled,
  LogoImg,
  HeaderContainerStyled,
} from "../../styledComponents/Header/containers";
import { Cart } from "./Cart/Cart";
import { useState } from "react";
import { Bar, MenuButton} from "../../styledComponents/BurgerMenu/containers";

export default function Header() {
  const [isBurger, setIsBurger] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleIsMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  React.useEffect(() => {
    function handleResize() {
      setIsBurger(window.innerWidth);
      if(isBurger <= 958){
        setIsMenuOpen(false);
        document.getElementById('burger').style.left = '100%';
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <FlexStyled>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <LogoImg src={logo} alt="logo" />
          </NavLink>
          <NavStyled style={{ display: isBurger <= 958 ? "none" : "flex" }}>
            <NavLinkStyled
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/"
            >
              Главная
            </NavLinkStyled>

            <LinkStyled
              onClick={(e) => {
                if (window.location.pathname === "/cart") {
                  e.preventDefault();
                  window.history.replaceState(null, {}, "/#oils");
                  window.location.reload();
                }
              }}
              activeClass="active"
              to="oils"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={100}
            >
              Масло
            </LinkStyled>

            <LinkStyled
              onClick={(e) => {
                if (window.location.pathname === "/cart") {
                  e.preventDefault();
                  window.history.replaceState(null, {}, "/#about_us");
                  window.location.reload();
                }
              }}
              activeClass="active"
              to="about_us"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={100}
            >
              О нас
            </LinkStyled>
            <LinkStyled
              onClick={(e) => {
                if (window.location.pathname === "/cart") {
                  e.preventDefault();
                  window.history.replaceState(null, {}, "/#reviews");
                  window.location.reload();
                }
              }}
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={100}
            >
              Отзывы
            </LinkStyled>
            <LinkStyled
              onClick={(e) => {
                if (window.location.pathname === "/cart") {
                  e.preventDefault();
                  window.history.replaceState(null, {}, "/#delivery");
                  window.location.reload();
                }
              }}
              activeClass="active"
              to="delivery"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={100}
            >
              Оплата и доставка
            </LinkStyled>
            <LinkStyled
              onClick={(e) => {
                if (window.location.pathname === "/cart") {
                  e.preventDefault();
                  window.history.pushState(null, null, "/#contacts");
                  window.location.reload();
                }
              }}
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={100}
            >
              Контакты
            </LinkStyled>
          </NavStyled>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MenuButton className={isMenuOpen ? 'active' : ''}
          onClick={() => {
            handleIsMenuOpen();
            if(isMenuOpen){
              document.getElementById('burger').style.left = '100%';
              console.log(document.getElementById('burger').offsetWidth);
            }
            else document.getElementById('burger').style.left = `calc(100vw - ${document.getElementById('burger').offsetWidth}px)`;
          }}
          style={{ display: isBurger <= 958 ? "block" : "none" }}>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </MenuButton>
          <Cart />
          </div>
        </FlexStyled>
      </HeaderContainerStyled>
    </HeaderStyled>
  );
}
