import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  minusItem,
  removeItem
} from "../../store/cartSlice";
import ProductWrapper from "../../styledComponents/Cart/CartWithItems/ProductWrapper";
import ProductImage from "../../styledComponents/Cart/CartWithItems/ProductImage";
import Description from "../../styledComponents/ProductPage/LeftPart/Description";
import AboutProduct from "../../styledComponents/Cart/CartWithItems/AboutProduct";
import TitleAndPriceWrapper from "../../styledComponents/Cart/CartWithItems/TitleAndPriceWrapper";
import H4Cart from "../../styledComponents/Cart/CartWithItems/H4Cart";
import CathegoryName from "../../styledComponents/ProductPage/LeftPart/CathegoryName";
import CounterAndRemove from "../../styledComponents/Cart/CartWithItems/CounterAndRemove";
import CounterButtonWrapper from "../../styledComponents/ProductPage/LeftPart/CounterButtonWrapper";
import CounterButton from "../../styledComponents/ProductPage/LeftPart/CounterButton";
import RemoveButton from "../../styledComponents/Cart/CartWithItems/RemoveButton";

export default function CartItem({
  id,
  title,
  price,
  count,
  image,
  cathegoryName,
}) {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const handleMinus = () => {
    dispatch(minusItem(id));
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <ProductWrapper>
        <ProductImage src={image} alt="product" />
        <div>
          <TitleAndPriceWrapper>
            <H4Cart>{title}</H4Cart>
            <H4Cart>${price * count}</H4Cart>
          </TitleAndPriceWrapper>
          <AboutProduct>
            <CathegoryName>{cathegoryName}</CathegoryName>{" "}
            <CounterAndRemove>
              <CounterButtonWrapper>
                <CounterButton onClick={handleMinus}>
                  <ion-icon name="remove-outline"></ion-icon>
                </CounterButton>
                <Description>{count}</Description>
                <CounterButton onClick={handlePlus}>
                  <ion-icon name="add-outline"></ion-icon>
                </CounterButton>
              </CounterButtonWrapper>

              <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
            </CounterAndRemove>
          </AboutProduct>
        </div>
      </ProductWrapper>
    </>
  );
}
