import React from "react";
import emptyCart from "./img/emptyCartPage.png";
import EmptyCartWrapper from "../../styledComponents/Cart/EmptyCartPage/EmprtCartWrapper";
import ImageEmptyPage from "../../styledComponents/Cart/EmptyCartPage/imageEmpty";
import H2Cart from "../../styledComponents/Cart/EmptyCartPage/H2Cart";
import PCart from "../../styledComponents/Cart/EmptyCartPage/PCart";
import TextBlock from "../../styledComponents/Cart/EmptyCartPage/TextBlock";

export default function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <ImageEmptyPage src={emptyCart} alt="emptyCart" />

      <TextBlock>
        <H2Cart>YOUR CART IS EMPTY</H2Cart>
        <PCart>Looks like you haven't made your choice yet...</PCart>
      </TextBlock>
    </EmptyCartWrapper>
  );
}
