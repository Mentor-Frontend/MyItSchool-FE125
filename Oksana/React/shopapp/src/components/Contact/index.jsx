import React from "react";

import {
  ContactWrapper,
  ContactHeader,
  ContactHeading,
  ContactBody,
  ContactFieldset,
  ContactInput,
  ContactButton,
} from '../../styledComponents/Contact';
import ContainerStyled from "../../styledComponents/Container";
import ContactImg from '../../img/contact.png'

export function Contact() {
  return (
    <div className="App">
      <ContainerStyled>
      <ContactWrapper>
        <ContactHeader>
          <ContactHeading>Хочешь заказать или задать вопрос?</ContactHeading>
        </ContactHeader>

        <ContactBody>
          <ContactFieldset>
            
            <ContactInput placeholder="Имя" type="text" required />
          </ContactFieldset>

          <ContactFieldset>
            <ContactInput placeholder="E-mail" type="text" required />
          </ContactFieldset>

          <ContactFieldset>
            <ContactInput placeholder="Телефон" type="text" required />
          </ContactFieldset>

          <ContactFieldset>
            <ContactInput placeholder="Сообщение" type="text" required />
          </ContactFieldset>

          <p className="checkbox"><input type="checkbox" name="a" value="S1" /> Я согласен на обработку моих персональных данных</p>
          <p className="checkbox"><input type="checkbox" name="b" value="S2" /> Я принмаю политику конфиденциальности</p>

          <ContactFieldset>
            <ContactButton type="button">Отправить сообщение</ContactButton>
          </ContactFieldset>

          </ContactBody>
      
          <img className="gradient" src={ContactImg} alt="" />
       </ContactWrapper>
      </ContainerStyled>
    </div>
  );
}

