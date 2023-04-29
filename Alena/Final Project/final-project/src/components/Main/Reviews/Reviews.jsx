import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgReviews, MainContainer } from "../../../styledComponents/Main/Reviews/containers";
import { MainTextStyled } from "../../../styledComponents/Main/Oil/text";
import {ImgArrow} from "../../../styledComponents/Slider/Main/container";

export default function Reviews() {
 
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
      <ImgArrow
        src={require("../../../img/arrow_left.png")}
        alt="arrow"
      />
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
      <ImgArrow
        src={require("../../../img/arrow_right.png")}
        alt="arrow"
      />
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
    autoplay: true,
    autoplaySpeed: 6000,
    responsive : [{
      breakpoint : 1156,
      settings :{
          slidesToShow: 2,
      }
  },
  {
    breakpoint : 872,
    settings :{
        slidesToShow: 1,
    }
}],
  };
  return (
    <MainContainer id="reviews">
      <MainTextStyled>Отзывы</MainTextStyled>
      <Slider
        {...settings}
      >
        <ImgReviews
          src={require("../../../img/reviews1.png")}
          alt="reviews"
        />
        <ImgReviews
          src={require("../../../img/reviews2.png")}
          alt="reviews"
        />
        <ImgReviews
          src={require("../../../img/reviews3.png")}
          alt="reviews"
        />
        <ImgReviews
          src={require("../../../img/reviews4.png")}
          alt="reviews"
        />
        <ImgReviews
          src={require("../../../img/reviews5.png")}
          alt="reviews"
        />
      </Slider>
    </MainContainer>
  );
}
