import React, { useState, useRef } from "react";
import { PlusMinusStyled, MainCounterStyled, ButtonStyled, ButtonContainer } from "../../styledComponents/Slider/Main/container";
import { NumberStyled } from "../../styledComponents/Slider/Main/text";
import { age, getCookie } from "../../App";
import { editCart } from "../Header/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Counter(props) {
    const [count, setCount] = useState(1);
    const [isHover, setIsHover] = useState(true);
    const [show, setShow] = useState(false);
    const [isBottom, setIsBottom] = useState(window.innerWidth);
    const target = useRef(null);
    function handelPlus() {
        if (count < 50) {
            setCount(count + 1);
          }
    }

    React.useEffect(() => {
      function handleResize() {
        setIsBottom(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
    });
    
  function handleMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return(
    <div>
      <MainCounterStyled>
    <PlusMinusStyled
    onClick={handleMinus}>
    <img
      width={8}
      src={require("../../img/minus.png")}
      alt="minus"
    />
  </PlusMinusStyled>
  <NumberStyled style={{ color: props.color }}>{count}</NumberStyled>
  <PlusMinusStyled
  onClick={handelPlus}
  style={{opacity: count === 50 ? '0.3' : '1'}}>
    <img
      width={8}
      src={require("../../img/plus.png")}
      alt="plus"
    />
  </PlusMinusStyled>
  </MainCounterStyled>
  <ButtonContainer>
  <ButtonStyled ref={target} onClick={() => {
        let countCookie = count;
        let name = `product${props.id}`;
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
        document.cookie = `product${props.id}=${JSON.stringify(countCookie)}; max-age=${age}`;
        editCart();
      }}
        style={{
          color: isHover ? "white" : props.color,
          borderColor: isHover ? "white" : props.color,
          background: isHover ? props.hover : "white",
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>В КОРЗИНУ</ButtonStyled>
       <Overlay target={target.current} show={show} placement={isBottom <= 442 ? "bottom" : "right"} delay={{ show: 250, hide: 400 }}>
        {(props) => (
          <Tooltip className= {isBottom <= 442 ? "tooltip tooltip-bottom" : "tooltip tooltip-right"} {...props}>
            Достигнуто максимальное количество товара!!!
          </Tooltip>
        )}
      </Overlay>
      </ButtonContainer>
  </div>
  );
}