import React, { useState } from "react";
import {
  MainContainer,
  BlockStyled,
  ImgContainer,
  InfoContainer,
  ItemsContainerStyled,
  ItemContainer,
  TextStyled,
  ButtonStyled,
  ImgLinkStyled,
  FlexRowStyled,
  ImgContainerLink
} from "../../../styledComponents/Main/Contacts/containers";
import { MainTextStyled } from "../../../styledComponents/Main/Oil/text";
import {
  ButtonPopupStyled,
  ClosePopupStyled,
  ImgOilFale,
  ImgOilSuccess,
  ImgPopupStyled,
  ModalStyled,
  TextAreaStyled,
  TextFailStyled,
  TextSuccessStyled,
  TitleContainer,
  TitleStyled,
  InfoContainerPopup
} from "../../../styledComponents/Popup/Popup";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextFormStyled } from "../../../styledComponents/Cart/text";
import {
  InputStyled,
} from "../../../styledComponents/Cart/containers";

export default function Contacts() {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  return (
    <>
      <MainContainer id="contacts">
        <MainTextStyled>Контакты</MainTextStyled>
        <FlexRowStyled >
          <BlockStyled />
          <ImgContainer
            src={require("../../../img/contacts.png")}
            alt="contacts"
          />
          <InfoContainer>
            <ItemsContainerStyled>
              <ItemContainer>
                <ImgLinkStyled href="tel:+380952041639">
                  <ImgContainerLink
                    src={require("../../../img/phone.png")}
                    alt=""
                  />
                </ImgLinkStyled>
                <TextStyled>
                  <a href="tel:+380952041639">+38 (095) 20-41-639</a>
                </TextStyled>
              </ItemContainer>
              <ItemContainer>
                <ImgLinkStyled
                  href="https://www.facebook.com/r.olio8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImgContainerLink src={require("../../../img/fb.png")} alt="" />
                </ImgLinkStyled>
                <TextStyled>
                  <a
                    href="https://www.facebook.com/r.olio8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/r.olio8/
                  </a>
                </TextStyled>
              </ItemContainer>
              <ItemContainer>
                <ImgLinkStyled
                  href="https://www.instagram.com/r.olio_/guides/?hl=ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImgContainerLink
                    src={require("../../../img/inst.png")}
                    alt=""
                  />
                </ImgLinkStyled>
                <TextStyled>
                  <a
                    href="https://www.instagram.com/r.olio_/guides/?hl=ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.instagram.com/r.olio_/
                  </a>
                </TextStyled>
              </ItemContainer>
              <ItemContainer>
                <ImgLinkStyled
                  href="https://t.me/r_olio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImgContainerLink src={require("../../../img/tg.png")} alt="" />
                </ImgLinkStyled>
                <TextStyled>
                  <a
                    href="https://t.me/r_olio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://t.me/r_olio
                  </a>
                </TextStyled>
              </ItemContainer>
              <ItemContainer>
                <ImgLinkStyled
                  href="https://skobelkin.ru/viber/380952041639"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImgContainerLink
                    src={require("../../../img/viber.png")}
                    alt=""
                  />
                </ImgLinkStyled>
                <TextStyled>
                  <a
                    href="https://skobelkin.ru/viber/380952041639"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +38 (095) 20-41-639
                  </a>
                </TextStyled>
              </ItemContainer>
            </ItemsContainerStyled>
            <ButtonStyled
              onClick={() => {
                setShow(true);
              }}
            >
              НАПИСАТЬ НАМ
            </ButtonStyled>
          </InfoContainer>
        </FlexRowStyled>
      </MainContainer>
      <Modal show={show} centered>
        <ModalStyled>
          <TitleContainer>
            <TitleStyled>Написать нам</TitleStyled>
            <ClosePopupStyled onClick={() => {
              setShow(false);
            }}
            src={require("../../../img/close.png")}
              alt="close" />
          
          </TitleContainer>
          <form>
          <TextFormStyled>Имя</TextFormStyled>
          <InputStyled
            id="Name"
            style={{ width: "100%" }}
            required
            type="text"
            placeholder="Фамилия Имя Отчество"
            name="name"
          />
          <TextFormStyled>Контактный номер телефона</TextFormStyled>
          <InputStyled
            id="Phone"
            style={{ width: "100%" }}
            required
            type="tel"
            placeholder="+375"
            name="phone"
          />
          <TextAreaStyled
            id="Comment"
            required
            placeholder="Текст комментария"
            name="comment"
          />
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <ImgPopupStyled src={require("../../../img/oil.png")} alt="oil"/>
          <ButtonPopupStyled type="submit" onClick={(e) => {
            let random = Math.floor(Math.random() * 5);
            if(document.getElementById('Name').value !== '' && document.getElementById('Phone').value !== '' && document.getElementById('Comment').value !== ''){
              e.preventDefault();
              setShow(false);
              if (random === 2){
                setShowFail(true);
              }
              else setShowSuccess(true);
            }
          }}>Отправить</ButtonPopupStyled>
          </div>
          </form>
        </ModalStyled>
      </Modal>
      <Modal show={showSuccess} centered>
        <ModalStyled>
          <TitleContainer style={{marginBottom: '0'}}>
            <TitleStyled style={{color: '#7DA00C'}}>Спасибо</TitleStyled>
            <ClosePopupStyled onClick={() => {
              setShowSuccess(false);
            }}
            src={require("../../../img/close.png")}
              alt="close" />
           
          </TitleContainer>
          <InfoContainerPopup>
          <TextSuccessStyled >Ваше сообщение было доставлено. Мы перезвоним Вам в ближайшее время и ответим на все вопросы.</TextSuccessStyled>
          <ImgOilSuccess src={require("../../../img/oil.png")} alt="oil" />
          </InfoContainerPopup>
        </ModalStyled>
      </Modal>
      <Modal show={showFail} centered>
        <ModalStyled>
          <TitleContainer style={{marginBottom: '10px'}}>
            <TitleStyled style={{color: '#D73A31'}}>Вышла какая-то ошибка</TitleStyled>
            <ClosePopupStyled onClick={() => {
              setShowFail(false);
            }}
            src={require("../../../img/close_red.png")}
              alt="close" />
           
          </TitleContainer>
          <InfoContainerPopup>
          <TextFailStyled>Ваше сообщение не было доставлено. К сожалению, что-то пошло не так и Ваше сообщение не было доставлено. Мы очень старались его получить, но не смогли. Пожалуйста, попробуйте снова.</TextFailStyled>
          <ImgOilFale src={require("../../../img/oil.png")} alt="oil" />
          </InfoContainerPopup>
        </ModalStyled>
      </Modal>
    </>
  );
}
