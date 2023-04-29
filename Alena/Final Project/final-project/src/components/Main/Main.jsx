import React from "react";
import MainStyled from "../../styledComponents/Main/Containers/index";
import MainContainerStyled from "../../styledComponents/Main/Containers/Main";
import Slider from "../Slider/SliderMain";
import Oil from "./Oil/Oil";
import AboutUs from "./About_Us/About_Us";
import Reviews from "./Reviews/Reviews";
import Delivery from "./Delivery/Delivery";
import Contacts from "./Contacts/Contacts";

export default function Main(props) {
    return(
        <MainStyled>
            <MainContainerStyled>
            <Slider/>
            <Oil products={props.products}/>
            <AboutUs/>
            <Reviews/>
            </MainContainerStyled>
            <Delivery/>
            <Contacts/>
        </MainStyled>
    );
}