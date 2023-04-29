import React, { useState } from "react";
import {
  MainContainer,
  FlexContainer,
} from "../../../styledComponents/Main/Oil/containers";
import { MainTextStyled } from "../../../styledComponents/Main/Oil/text";
import Salad from "./Salad";
import Italian from "./Italian";
import Meat from "./Meat";
import Eastern from "./Eastern";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgArrow } from "../../../styledComponents/Slider/Main/container";

export default function Oil(props) {
  const [isSlider, setIsSlider] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setIsSlider(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev"
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ImgArrow src={require("../../../img/arrow_left.png")} alt="arrow" />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next" 
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <ImgArrow src={require("../../../img/arrow_right.png")} alt="arrow" />
    </button>
  );
  const settings = {
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive : [{
      breakpoint : 878,
      settings :{
          slidesToShow: 2,
      }
  },
  {
    breakpoint : 590,
    settings :{
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  },],
  };

  return (
    <MainContainer id="oils">
      <MainTextStyled>Масло</MainTextStyled>
      <FlexContainer style={{ display: isSlider <= 1156 ? "none" : "flex" }}>
        <Salad product={props.products[0]} />
        <Italian product={props.products[1]} />
        <Meat product={props.products[2]} />
        <Eastern product={props.products[3]} />
      </FlexContainer>
      <Slider
        {...settings}
        style={{ display: isSlider <= 1156 ? "block" : "none" }}
      >
        <Salad product={props.products[0]} />
        <Italian product={props.products[1]} />
        <Meat product={props.products[2]} />
        <Eastern product={props.products[3]} />
      </Slider>
    </MainContainer>
  );
}
