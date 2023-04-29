import React from "react";
import {
  MainContainer,
  WhoContainerStyled,
  ImgWeStyled,
  BlockTopContainer,
  BlockBottomContainer,
  ToDoContainer,
  ImgStyled,
  TextAreaFirstContainer,
  TextAreaSecondContainer,
  ImgDoStyled,
} from "../../../styledComponents/Main/About_Us/containers";
import { MainTextStyled } from "../../../styledComponents/Main/Oil/text";
import {
  TitleStyled,
  TextStyled,
  TextSecondStyled,
} from "../../../styledComponents/Main/About_Us/text";

export default function AboutUs() {
  return (
    <MainContainer id="about_us">
      <MainTextStyled>О нас</MainTextStyled>
      <WhoContainerStyled>
        <BlockTopContainer />
        <ImgWeStyled>
          <ImgStyled src={require("../../../img/we.png")} alt="we" />
        </ImgWeStyled>
        <TextAreaFirstContainer>
          <TitleStyled>Кто мы</TitleStyled>
          <TextStyled>
            Мы пара: Таня и Рома и мы создатели пряного оливкового масла R.olio.
            <br />
            Предыстория: <br /> Так сложилось в нашей паре, что готовит у нас
            Рома, он очень увлечен кулинарией и каждый раз придумывает что-то
            новенькое. Накануне прошлого Нового года, мы готовили подарки нашим
            друзьям и родственникам. Нам захотелось к подаркам добавить что-то
            необычное, от себя.
            <br />
            И к нам пришла идея, Рома готовил вкуснейшее пряное оливковое масло
            для своих рецептов, добавлял розмарин, тимьян, чеснок, разные виды
            перцев...каждый раз получался новый неповторимый вкус.
            <br />
          </TextStyled>
        </TextAreaFirstContainer>
      </WhoContainerStyled>
      <ToDoContainer>
        <TextAreaSecondContainer>
          <TitleStyled>Что Мы Делаем</TitleStyled>
          <TextSecondStyled>
            И мы решили сделать такое масло, как добавление к подарку. Надо
            сказать, что наши близкие оценили презент и просили снова и снова
            сделать им такое масло.
            <br />
            И появилась идея: почему бы не попробовать
            запустить такое масло в продажу? Рома долго выверял рецепты, я
            разрабатывала дизайн этикеток и искала поставщиков. <br/>
            И вот мы готовы представить его вам! <br/>
            Мы старались сделать наше масло максимально
            доступным, при этом не потеряв в качестве. Стоимость бутылки (250мл)
            - всего 9.50 рублей. <br /> 
          </TextSecondStyled>
        </TextAreaSecondContainer>
        <ImgDoStyled>
          <ImgStyled src={require("../../../img/about_us.png")} alt="we" />
        </ImgDoStyled>
        <BlockBottomContainer/>
      </ToDoContainer>
    </MainContainer>
  );
}
