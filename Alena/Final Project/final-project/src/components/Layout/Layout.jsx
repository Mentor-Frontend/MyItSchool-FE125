import UseGlobalStyles from "../../styles/global";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { MenuContainer } from "../../styledComponents/BurgerMenu/containers";
import { LinkStyled, NavLinkStyled, NavStyled } from "../../styledComponents/Header/containers";

export default function Layout() {
  return (
    <>
      <UseGlobalStyles />
      <Header />
      <MenuContainer id='burger'>
      <NavStyled style={{flexDirection: 'column'}} >
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
      </MenuContainer>
      <Outlet />
      <Footer />
    </>
  );
}
