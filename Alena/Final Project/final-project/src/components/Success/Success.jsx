import React from "react";
import MainStyled from "../../styledComponents/Main/Containers/index";
import MainContainerStyled from "../../styledComponents/Main/Containers/Main";
import {ContainerStyled, ButtonBackStyled} from "../../styledComponents/Cart/containers";
import { NavLink } from "react-router-dom";
import {MainTextStyled, TextStyled} from "../../styledComponents/Cart/text";

export default function Success() {
    return(
        <MainStyled>
        <MainContainerStyled>
          <ContainerStyled>
            <MainTextStyled style={{textAlign:'center', lineHeight: '70px'}}>Заказ успешно оформлен!</MainTextStyled>
            <TextStyled style={{textAlign:'center'}}>
              В течении дня Вам позвонять подтвердить Ваш заказ :)
            </TextStyled>
            <NavLink to="/">
              <ButtonBackStyled onClick={() => {window.scrollTo(0,0)}}>В МАГАЗИН</ButtonBackStyled>
            </NavLink>
          </ContainerStyled>
        </MainContainerStyled>
      </MainStyled>
    )
 
};