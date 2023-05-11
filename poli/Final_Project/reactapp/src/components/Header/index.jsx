import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderStyled from "../../styledComponents/Header";
import ContainerStyled from "../../styledComponents/Container";
import Modal from "../../styledComponents/Header/LogIn/modal";
import NavStyled from "../../styledComponents/Header/Nav";
import LinkStyled from "../../styledComponents/Header/Link";
import CartContain from "../../styledComponents/Header/Cart/CartContain";
import ItemQuantity from "../../styledComponents/Header/Cart/quantity";
import CDAndBurfer from "../../styledComponents/Header/CartAndButton/CBAndBurger";
import CartAndButton from "../../styledComponents/Header/CartAndButton/cartAndButton";
import ButtonStyled from "../../styledComponents/Header/Button";
import Logo from "../../styledComponents/Header/Logo";
import logo from "./img/logo.png";
import cartImg from "./img/cartImg.png";
import CartImage from "../../styledComponents/Header/Cart/cart";
import BurgerContainer from "../../styledComponents/Header/Burger/BurgerContainer";
import ModalWindow from "../LogIn";
import Form from "../Form";

export default function Header() {
  const { items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const [modalActive, setModalActive] = useState(false);
  const [burgerMenu, setBurgerMenuActive] = useState(false);

  return (
    <div className="fullHeader">
      <HeaderStyled>
        <ContainerStyled>
          <Logo src={logo} alt="logo" />

          <NavStyled
            className={
              burgerMenu ? ["navStyled", "active"].join(" ") : ["navStyled"]
            }
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <LinkStyled className="HeaderLink">MAIN</LinkStyled>
            </Link>

            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <LinkStyled className="HeaderLink">PRODUCTS</LinkStyled>
            </Link>

            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <LinkStyled className="HeaderLink">CART</LinkStyled>
            </Link>
          </NavStyled>
          <Modal
            className={
              burgerMenu ? ["navStyled", "active"].join(" ") : ["navStyled"]
            }
          ></Modal>

          <CDAndBurfer>
            <CartAndButton>
              <ButtonStyled
                className="open btn"
                onClick={() => setModalActive(true)}
              >
                Log in
              </ButtonStyled>

              <CartContain>
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <CartImage src={cartImg} alt="cart" />
                </Link>
                <ItemQuantity>{totalCount}</ItemQuantity>
              </CartContain>
            </CartAndButton>

            <BurgerContainer
              style={{ zIndex: "20" }}
              onClick={() => setBurgerMenuActive(!burgerMenu)}
            >
              {burgerMenu ? (
                <ion-icon name="close"></ion-icon>
              ) : (
                <ion-icon name="menu"></ion-icon>
              )}
            </BurgerContainer>
          </CDAndBurfer>
        </ContainerStyled>
      </HeaderStyled>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <Form />
      </ModalWindow>
    </div>
  );
}
