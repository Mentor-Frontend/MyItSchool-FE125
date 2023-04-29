import React from "react";
import {
  RectangleTopStyled,
  RectangleBottomStyled,
  ContainerStyeled,
  ElementContainer,
  ImgContainerStyled,
  OlivesContainer,
  SpiceContainer,
  ElementFirstLastContainer,
  ElementSecondFirstContainer,
  ElementSecondLastContainer,
  ContainerSecondStyeled
} from "../../../styledComponents/Main/Delivery/containers";
import { TextElement, NameTextTopStyled, NameTextBottomStyled } from "../../../styledComponents/Main/Delivery/text";

export default function Delivery() {
  return (
    <div id="delivery">
      <ContainerStyeled>
        <RectangleTopStyled>
            <ElementContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/post.png")} alt="post" />
                <TextElement className="TEXT">Белпочта</TextElement>
            </ElementContainer>
            <ElementContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/europost.png")} alt="europost" />
                <TextElement className="TEXT">Европочта</TextElement>
            </ElementContainer>
            <ElementFirstLastContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/pickup.png")} alt="pickup" />
                <TextElement className="TEXT">Самовывоз</TextElement>
            </ElementFirstLastContainer>
        </RectangleTopStyled>
        <NameTextTopStyled>- Доставка</NameTextTopStyled>
        <SpiceContainer  src={require("../../../img/spices.png")} alt="spices" />
      </ContainerStyeled>

      <ContainerSecondStyeled>
        <RectangleBottomStyled>
            <ElementSecondFirstContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/cash_on_delivery.png")} alt="post" />
                <TextElement className="TEXT">Наложенный платёж</TextElement>
            </ElementSecondFirstContainer>
            <ElementContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/card.png")} alt="europost" />
                <TextElement className="TEXT">Картой</TextElement>
            </ElementContainer >
            <ElementSecondLastContainer>
                <ImgContainerStyled className="IMG" src={require("../../../img/cash.png")} alt="pickup" />
                <TextElement className="TEXT">Наличиными при самовывозе</TextElement>
            </ElementSecondLastContainer>
        </RectangleBottomStyled>
        <NameTextBottomStyled>Оплата -</NameTextBottomStyled>
        <OlivesContainer src={require("../../../img/olives.png")} alt="spices" />
      </ContainerSecondStyeled>
    </div>
  );
}
