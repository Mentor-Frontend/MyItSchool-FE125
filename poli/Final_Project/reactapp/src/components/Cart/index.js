import React from "react";
import { useSelector } from "react-redux";
import CartWrapper from "../../styledComponents/Cart/CartWithItems/CartWrapper";
import CartItem from "./Item";
import EmptyCart from "./emptyCart";
import ItemsWrapper from "../../styledComponents/Cart/CartWithItems/ItemsWrapper";
import OrderSummaryWrapper from "../../styledComponents/Cart/CartWithItems/OrderSummaryWrapper";
import OrderSummary from "../../styledComponents/Cart/CartWithItems/OrderSummary";
import H3Cart from "../../styledComponents/Cart/CartWithItems/H3Cart";
import InfoContainer from "../../styledComponents/Cart/CartWithItems/InfoContainer";
import Info from "../../styledComponents/Cart/CartWithItems/Info";
import H5Cart from "../../styledComponents/Cart/CartWithItems/H5Cart";
import CheckOutButton from "../../styledComponents/Cart/CartWithItems/CheckOutButton";
import COModalWindow from "../CheckOut/COModalWindow/COModalWindow";
import COForm from "../CheckOut/COForm/COForm";

export default function Cart() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const [modalActive, setModalActive] = React.useState(false);

  if (!totalCount) {
    return <EmptyCart />;
  } else {
    return (
      <>
        <CartWrapper>
          <ItemsWrapper>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ItemsWrapper>

          <OrderSummaryWrapper>
            <OrderSummary>
              <H3Cart>Order Summary</H3Cart>
              <InfoContainer>
                <Info>
                  <H5Cart className="info">Products quantity</H5Cart>
                  <H5Cart className="info">{totalCount}</H5Cart>
                </Info>

                <Info>
                  <H5Cart className="info">Shipping</H5Cart>
                  <H5Cart className="info">Free</H5Cart>
                </Info>

                <Info className="TotalPrice">
                  <H5Cart>Total price</H5Cart>
                  <H5Cart>${totalPrice}</H5Cart>
                </Info>

                <CheckOutButton
                  className="open btn"
                  onClick={() => setModalActive(true)}
                >
                  CheckOut
                </CheckOutButton>
              </InfoContainer>
            </OrderSummary>
          </OrderSummaryWrapper>
        </CartWrapper>

        <COModalWindow active={modalActive} setActive={setModalActive}>
          <COForm />
        </COModalWindow>
      </>
    );
  }
}
