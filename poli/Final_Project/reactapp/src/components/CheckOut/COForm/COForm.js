import { useSelector } from "react-redux";
import COContainer from "../../../styledComponents/CheckOut/COForm/COContainer";
import OrderSummaryWrapper from "../../../styledComponents/Cart/CartWithItems/OrderSummaryWrapper";
import OrderSummary from "../../../styledComponents/Cart/CartWithItems/OrderSummary";
import H3Cart from "../../../styledComponents/Cart/CartWithItems/H3Cart";
import InfoContainer from "../../../styledComponents/Cart/CartWithItems/InfoContainer";
import Info from "../../../styledComponents/Cart/CartWithItems/Info";
import H5Cart from "../../../styledComponents/Cart/CartWithItems/H5Cart";
import Form from "../../../styledComponents/CheckOut/COForm/Form";
import Double from "../../../styledComponents/CheckOut/COForm/Double";
import Input from "../../../styledComponents/CheckOut/COForm/Input";

export default function COForm() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <>
      <div className="wrapper">
        <COContainer>
          <OrderSummaryWrapper className="check">
            <OrderSummary className="check">
              <H3Cart className="check">Order Summary</H3Cart>
              <InfoContainer className="check">
                <Info className="check">
                  <H5Cart className="info check">Products quantity</H5Cart>
                  <H5Cart className="info check">{totalCount}</H5Cart>
                </Info>

                <Info className="check">
                  <H5Cart className="info check">Shipping</H5Cart>
                  <H5Cart className="info check">Free</H5Cart>
                </Info>

                <Info className="TotalPrice check">
                  <H5Cart className="check">Total price</H5Cart>
                  <H5Cart className="check">${totalPrice}</H5Cart>
                </Info>
              </InfoContainer>
            </OrderSummary>
          </OrderSummaryWrapper>

          <div>
            <Form>
              <Double>
                <div>
                  <H5Cart>Name</H5Cart>
                  <Input type="text" name="name" placeholder="Name" required />
                </div>

                <div>
                  <H5Cart>Surname</H5Cart>
                  <Input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    required
                  />
                </div>
              </Double>

              <div>
                <H5Cart>Address</H5Cart>
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="long"
                  required
                />
              </div>

              <div>
                <H5Cart>Card number</H5Cart>
                <Input
                  type="text"
                  name="cardnumber"
                  placeholder="Card number"
                  className="long"
                  required
                />
              </div>

              <Double>
                <div>
                  <H5Cart>Valid through</H5Cart>
                  <Input
                    type="text"
                    name="cardnumber"
                    maxLength={5}
                    placeholder="Valid through"
                    required
                  />
                </div>

                <div>
                  <H5Cart>CVV</H5Cart>
                  <Input
                    type="text"
                    name="cvv"
                    maxLength={3}
                    placeholder="CVV"
                    required
                  />
                </div>
              </Double>
              <Input
                type="submit"
                name="buy"
                value={"BUY"}
                className="submit"
              />
            </Form>
          </div>
        </COContainer>
      </div>
    </>
  );
}
