import React, { useState } from "react";
import {
  PlusMinusStyled,
  MainCounterStyled,
} from "../../styledComponents/Slider/Main/container";
import { NumberStyled } from "../../styledComponents/Slider/Main/text";
import { age } from "../../App";
import { editCart } from "../Header/Cart/Cart";
import { CounterFlex,  FlexPrice } from "../../styledComponents/Cart/containers";
import { TextBynStyled} from "../../styledComponents/Cart/text";

export default function Counter(props) {
  const [count, setCount] = useState(props.count);
  const [price, setPrice] = useState(9.5*count);
  function handelPlus() {
    if (count < 50) {
      document.cookie = `product${props.id}=${JSON.stringify(
        count + 1
      )}; max-age=${age}`;
      setPrice(9.5*(count+1));
      setCount(count + 1);
      editCart();
    }
  }

  function handleMinus() {
    if (count > 1) {
      document.cookie = `product${props.id}=${JSON.stringify(
        count - 1
      )}; max-age=${age}`;
      setPrice(9.5*(count-1));
      setCount(count - 1);
      editCart();
    }
  }
  return (
    <CounterFlex>
      <MainCounterStyled style={{ marginBottom: "0" }}>
        <PlusMinusStyled
          style={{ background: "#F8FAF3" }}
          onClick={handleMinus}
        >
          <img style={{opacity: '0.65'}} width={8} src={require("../../img/minus.png")} alt="minus" />
        </PlusMinusStyled>
        <NumberStyled style={{ color: "#688800" }}>{count}</NumberStyled>
        <PlusMinusStyled style={{ background: "#F8FAF3", opacity: count === 50 ? '0.3' : '1' }} onClick={handelPlus}>
          <img style={{opacity: '0.65'}} width={8} src={require("../../img/plus.png")} alt="plus" />
        </PlusMinusStyled>
      </MainCounterStyled>
      <FlexPrice>
        <NumberStyled style={{ color: "#688800", marginLeft: '0', marginRight: '16px' }}>{price.toFixed(2)}</NumberStyled>
        <TextBynStyled>BYN</TextBynStyled>
      </FlexPrice>
    </CounterFlex>
  );
}
