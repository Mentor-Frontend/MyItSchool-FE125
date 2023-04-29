import React from "react";
import logo from "../../img/logo_footer.png";
import {
  FooterStyled,
  ContainerStyled,
  ImgLink,
  ImgNav,
  LinkFooterStyled,
  NavFooterLinkStyled,
  NavFooterStyled,
  ImgStyled,
  LogoImg,
} from "../../styledComponents/Footer/containers";

export default function Footer() {
  return (
    <FooterStyled>
      <ContainerStyled>
        <ImgStyled
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <LogoImg src={logo} alt="logo" />
        </ImgStyled>
        <NavFooterStyled>
          <NavFooterLinkStyled
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Главная
          </NavFooterLinkStyled>
          <LinkFooterStyled
            activeClass="active"
            to="oils"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-170}
            duration={100}
          >
            Масло
          </LinkFooterStyled>
          <LinkFooterStyled
            activeClass="active"
            to="about_us"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-170}
            duration={100}
          >
            О нас
          </LinkFooterStyled>
          <LinkFooterStyled
            activeClass="active"
            to="reviews"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-170}
          >
            Отзывы
          </LinkFooterStyled>
          <LinkFooterStyled
            activeClass="active"
            to="delivery"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-170}
          >
            Оплата и доставка
          </LinkFooterStyled>
          <LinkFooterStyled
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-170}
          >
            Контакты
          </LinkFooterStyled>
        </NavFooterStyled>
        <ImgNav>
          <ImgLink to="https://www.facebook.com/r.olio8/" target="_blank">
            <img
              width={24}
              src={require("../../img/fd_white.png")}
              alt="facebook"
            />
          </ImgLink>
          <ImgLink
            to="https://www.instagram.com/r.olio_/guides/?hl=ru"
            target="_blank"
          >
            <img
              width={24}
              src={require("../../img/inst_white.png")}
              alt="instagram"
            />
          </ImgLink>
          <ImgLink to="https://t.me/r_olio" target="_blank">
            <img
              width={24}
              src={require("../../img/tg_white.png")}
              alt="telegram"
            />
          </ImgLink>
          <ImgLink to="https://skobelkin.ru/viber/380952041639" target="_blank">
            <img
              width={24}
              src={require("../../img/viber_white.png")}
              alt="viber"
            />
          </ImgLink>
        </ImgNav>
      </ContainerStyled>
    </FooterStyled>
  );
}
