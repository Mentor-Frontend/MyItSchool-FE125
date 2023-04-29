import React, {useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  BlocksContainerStyled,
  BlocksStyled,
  ImgArrow,
  MainImg,
  InfoFirstContainer,
  InfoSecondContainer,
  InfoThirdContainer,
  InfoFourthContainer,
} from "../../styledComponents/Slider/Main/container";
import {
  MainTextStyled,
  MainNameStyled,
  MainDescriptionStyled,
} from "../../styledComponents/Slider/Main/text";
import Counter from "./Couter";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [isColumn, setIsColumn] = useState(window.innerWidth);
  const prevIcon = (
    <ImgArrow
      src={require("../../img/arrow_left.png")}
      alt="arrow"
      onClick={() => {
        if (index > 0) {
          setIndex(index - 1);
        } else setIndex(3);
      }}
    />
  );
  const nextIcon = (
    <ImgArrow
      src={require("../../img/arrow_right.png")}
      alt="arrow"
      onClick={() => {
        if (index < 3) {
          setIndex(index + 1);
        } else setIndex(0);
      }}
    />
  );

  React.useEffect(() => {
    function handleResize() {
      setIsColumn(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Carousel
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      indicators={false}
      activeIndex={index}
    >
      <Carousel.Item>
        <Container style={{ flexDirection: "row", display: isColumn <= 964 ? 'none' : 'flex' }}>
          <MainImg src={require("../../img/salad_big.png")} alt="salad" />
          <InfoFirstContainer>
            <MainTextStyled style={{ color: "#688800" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled style={{ background: "#BFD087", color: "#546B06" }}>
                Для салата
              </BlocksStyled>
              <BlocksStyled onClick={() => setIndex(1)}>
                Итальянское
              </BlocksStyled>
              <BlocksStyled onClick={() => setIndex(2)}>Для мяса</BlocksStyled>
              <BlocksStyled onClick={() => setIndex(3)}>Восточное</BlocksStyled>
            </BlocksContainerStyled>
            <MainNameStyled>Масло “Для салата”</MainNameStyled>
            <MainDescriptionStyled>
              Название говорит само за себя. Это идеальная заправка, которая
              даже скучной и привычной капусте придаст неповторимый вкус и
              аромат.
            </MainDescriptionStyled>
            <Counter
              id={1}
              hover="linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%)"
              color="#688800"
            />
          </InfoFirstContainer>
        </Container>
        <Container style={{ flexDirection: "column", display: isColumn <= 964 ? 'flex' : 'none' }}>
        <MainTextStyled style={{ color: "#688800" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled style={{ background: "#BFD087", color: "#546B06" }}>
                Для салата
              </BlocksStyled>
              <BlocksStyled onClick={() => setIndex(1)}>
                Итальянское
              </BlocksStyled>
              <BlocksStyled onClick={() => setIndex(2)}>Для мяса</BlocksStyled>
              <BlocksStyled onClick={() => setIndex(3)}>Восточное</BlocksStyled>
            </BlocksContainerStyled>
          <MainImg src={require("../../img/salad_big.png")} alt="salad" />
          <InfoFirstContainer>
            <MainNameStyled>Масло “Для салата”</MainNameStyled>
            <MainDescriptionStyled>
              Название говорит само за себя. Это идеальная заправка, которая
              даже скучной и привычной капусте придаст неповторимый вкус и
              аромат.
            </MainDescriptionStyled>
            <Counter
              id={1}
              hover="linear-gradient(320.69deg, #536614 15.36%, #97C20B 84.86%)"
              color="#688800"
            />
          </InfoFirstContainer>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container style={{ flexDirection: "row", display: isColumn <= 964 ? 'none' : 'flex' }}>
          <MainImg src={require("../../img/italian_big.png")} alt="italian" />
          <InfoSecondContainer>
            <MainTextStyled style={{ color: "#009246" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#8BDFB4",
                  color: "#116137",
                  border: "#8BDFB4 1px solid",
                }}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(2)}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(3)}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
            <MainNameStyled>Масло “Итальянское”</MainNameStyled>
            <MainDescriptionStyled>
              Добавит ноток Италии в любое ваше блюдо. Паста, ризотто, пицца,
              салаты - его везде можно использовать.
            </MainDescriptionStyled>
            <Counter
              id={2}
              hover="linear-gradient(320.42deg, #076534 15.36%, #00DB69 82.23%)"
              color="#009246"
            />
          </InfoSecondContainer>
        </Container>
        <Container style={{ flexDirection: "column", display: isColumn <= 964 ? 'flex' : 'none' }}>
        <MainTextStyled style={{ color: "#009246" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#8BDFB4",
                  color: "#116137",
                  border: "#8BDFB4 1px solid",
                }}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(2)}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#8BDFB4 1px solid", color: "#8BDFB4" }}
                onClick={() => setIndex(3)}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
          <MainImg src={require("../../img/italian_big.png")} alt="italian" />
          <InfoSecondContainer>
            <MainNameStyled>Масло “Итальянское”</MainNameStyled>
            <MainDescriptionStyled>
              Добавит ноток Италии в любое ваше блюдо. Паста, ризотто, пицца,
              салаты - его везде можно использовать.
            </MainDescriptionStyled>
            <Counter
              id={2}
              hover="linear-gradient(320.42deg, #076534 15.36%, #00DB69 82.23%)"
              color="#009246"
            />
          </InfoSecondContainer>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container style={{ flexDirection: "row", display: isColumn <= 964 ? 'none' : 'flex' }}>
          <MainImg src={require("../../img/meat_big.png")} alt="meat" />
          <InfoThirdContainer>
            <MainTextStyled style={{ color: "#D73A31" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(1)}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#E8847E",
                  color: "#73120D",
                  border: "#E8847E 1px solid",
                }}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(3)}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
            <MainNameStyled>Масло “Для мяса”</MainNameStyled>
            <MainDescriptionStyled>
              Идеальное решение для легкого и быстрого маринада мяса, можно
              добавить капельку масла и после приготовления.
            </MainDescriptionStyled>
            <Counter
              id={3}
              hover="linear-gradient(321.31deg, #99160E 15.37%, #E84239 81.98%)"
              color="#D73A31"
            />
          </InfoThirdContainer>
        </Container>
        <Container style={{ flexDirection: "column", display: isColumn <= 964 ? 'flex' : 'none' }}>
        <MainTextStyled style={{ color: "#D73A31" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(1)}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#E8847E",
                  color: "#73120D",
                  border: "#E8847E 1px solid",
                }}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#E8847E 1px solid", color: "#E8847E" }}
                onClick={() => setIndex(3)}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
          <MainImg src={require("../../img/meat_big.png")} alt="meat" />
          <InfoThirdContainer>
            <MainNameStyled>Масло “Для мяса”</MainNameStyled>
            <MainDescriptionStyled>
              Идеальное решение для легкого и быстрого маринада мяса, можно
              добавить капельку масла и после приготовления.
            </MainDescriptionStyled>
            <Counter
              id={3}
              hover="linear-gradient(321.31deg, #99160E 15.37%, #E84239 81.98%)"
              color="#D73A31"
            />
          </InfoThirdContainer>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <Container style={{ flexDirection: "row", display: isColumn <= 964 ? 'none' : 'flex' }}>
          <MainImg src={require("../../img/eastern_big.png")} alt="eastern" />
          <InfoFourthContainer>
            <MainTextStyled style={{ color: "#E67F10" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(1)}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(2)}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#F4B979",
                  color: "#BD690D",
                  border: "#F4B979 1px solid",
                }}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
            <MainNameStyled>Масло “Восточное”</MainNameStyled>
            <MainDescriptionStyled>
              Oтлично подойдёт для блюд среднеазиатской кухни: шурпа, плов,
              лагман с этим маслом приобретут традиционные нотки Средней Азии.
            </MainDescriptionStyled>
            <Counter
              id={4}
              hover="linear-gradient(324.18deg, #BA6400 14.36%, #FF9D34 85.34%)"
              color="#E67F10"
            />
          </InfoFourthContainer>
        </Container>
        <Container style={{ flexDirection: "column", display: isColumn <= 964 ? 'flex' : 'none' }}>
        <MainTextStyled style={{ color: "#E67F10" }}>
              Наши продукты
            </MainTextStyled>
            <BlocksContainerStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(0)}
              >
                Для салата
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(1)}
              >
                Итальянское
              </BlocksStyled>
              <BlocksStyled
                style={{ border: "#F4B979 1px solid", color: "#F4B979" }}
                onClick={() => setIndex(2)}
              >
                Для мяса
              </BlocksStyled>
              <BlocksStyled
                style={{
                  background: "#F4B979",
                  color: "#BD690D",
                  border: "#F4B979 1px solid",
                }}
              >
                Восточное
              </BlocksStyled>
            </BlocksContainerStyled>
          <MainImg src={require("../../img/eastern_big.png")} alt="eastern" />
          <InfoFourthContainer>
            <MainNameStyled>Масло “Восточное”</MainNameStyled>
            <MainDescriptionStyled>
              Oтлично подойдёт для блюд среднеазиатской кухни: шурпа, плов,
              лагман с этим маслом приобретут традиционные нотки Средней Азии.
            </MainDescriptionStyled>
            <Counter
              id={4}
              hover="linear-gradient(324.18deg, #BA6400 14.36%, #FF9D34 85.34%)"
              color="#E67F10"
            />
          </InfoFourthContainer>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
