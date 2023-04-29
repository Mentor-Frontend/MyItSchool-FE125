import { useRef, useState } from "react";
import React from "react";
import {
  ProductsContainerStyled,
  ButtonStyled,
  BlockInfoStyled,
  PriceStyled,
} from "../../../styledComponents/Main/Oil/containers";
import {
  TitleStyled,
  InfoTextStyled,
  NumberStyled,
  SizeTextStyled,
  CostTextStyled,
  BynTextStyled,
} from "../../../styledComponents/Main/Oil/text";
import {
  PlusMinusStyled,
  MainCounterStyled,
} from "../../../styledComponents/Slider/Main/container";
import { age, getCookie } from "../../../App";
import { editCart } from "../../Header/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Eastern(props) {
  const [isHover, setIsHover] = useState(false);
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [isBottom, setIsBottom] = useState(window.innerWidth);
  const target = useRef(null);

  function handlePlus() {
    if (count < 50) {
      setCount(count + 1);
    }
  }

  function handleMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  React.useEffect(() => {
    function handleResize() {
      setIsBottom(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <ProductsContainerStyled
      onMouseEnter={() => {
        setSelected(true);
      }}
      onMouseLeave={() => {
        setSelected(false);
      }}
    >
      <div style={{height: '200px'}}>
      <div style={{ display: selected ? "none" : "flex" }}>
        {props.product.picture}
      </div>
      <div style={{ display: selected ? "flex" : "none" }}>
        {props.product.picture_hover}
      </div>
      </div>
      <div style={{ textAlign: "left", height: "204px" }}>
        <TitleStyled style={{ color: props.product.color }}>
          {props.product.title}
        </TitleStyled>
        <InfoTextStyled>{props.product.discroption}</InfoTextStyled>
        <InfoTextStyled><b>Состав:</b>{props.product.ingredients}</InfoTextStyled>
      </div>
      <MainCounterStyled style={{ marginTop: "8px", alignItems: "center", marginBottom: '16px' }}>
        <PlusMinusStyled style={{ width: "24px", height: "24px" }}
        onClick={handleMinus}>
          <img width={6} src={require("../../../img/minus.png")} alt="minus" />
        </PlusMinusStyled>
        <NumberStyled style={{ color: props.product.color }}>{count}</NumberStyled>
        <PlusMinusStyled style={{ width: "24px", height: "24px", opacity: count === 50 ? '0.3' : '1' }}
        onClick={handlePlus}>
          <img width={6} src={require("../../../img/plus.png")} alt="plus" />
        </PlusMinusStyled>
      </MainCounterStyled>
      <BlockInfoStyled>
        <SizeTextStyled>250 мл</SizeTextStyled>
        <PriceStyled>
        <CostTextStyled style={{color: props.product.color}}>9.50</CostTextStyled>
        <BynTextStyled style={{color: props.product.color}}>BYN</BynTextStyled>
        </PriceStyled>
      </BlockInfoStyled>
      <ButtonStyled ref={target}
      onClick={() => {
        let countCookie = count;
        let name = 'product4';
        let cookie = getCookie(name);
        if (cookie) {
            if (count < (50 - cookie)) {
                 countCookie =  cookie + count;
            }
            else {
              countCookie = 50;
              setShow(true);
              setTimeout(() => {
                setShow(false);
              }, 2000);
            }
        }
        document.cookie = `product4=${JSON.stringify(countCookie)}; max-age=${age}`;
        editCart();
      }}
        style={{
          color: isHover ? "white" : props.product.color,
          borderColor: isHover ? "white" : props.product.color,
          background: isHover ? props.product.color_hover : "white",
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        В КОРЗИНУ
      </ButtonStyled>
      <Overlay target={target.current} show={show} placement={isBottom <= 462 ? "bottom" : "right"} delay={{ show: 250, hide: 400 }}>
        {(props) => (
          <Tooltip className={isBottom <= 462 ? "tooltip tooltip-bottom" : "tooltip tooltip-right"} {...props}>
            Достигнуто максимальное количество товара!!!
          </Tooltip>
        )}
      </Overlay>
    </ProductsContainerStyled>
  );
}
