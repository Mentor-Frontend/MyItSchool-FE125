import React, { useState } from "react";
import MainStyled from "../../styledComponents/Main/Containers/index";
import MainContainerStyled from "../../styledComponents/Main/Containers/Main";
import {
  ContainerStyled,
  ButtonBackStyled,
  ContainerFullStyled,
  ContainerProductStyled,
  InfoStyled,
  MainContainerProductStyled,
  ButtonDeleteContainer,
  FormContainer,
  FormBlockStyled,
  InputStyled,
  RadioStyled,
  RadioContainer,
  TextAreaStyled,
  PostContainerStyled,
  InputContainerStyled,
  ButtonSubmitStyled,
  ButtonResetStyled,
  ImgCloseStyled,
  InputEtcStyled,
  InputIndexStyled,
  InputCityStyled,
  InputStreetStyled,
  InputHouseStyled,
  FormRightBlockStyled,
} from "../../styledComponents/Cart/containers";
import { NavLink } from "react-router-dom";
import {
  MainTextStyled,
  TextBelpostForm,
  TextFormEuropost,
  TextFormPickup,
  TextFormStyled,
  TextSizeStyled,
  TextStyled,
  TextTitleForm,
  TextTitleStyled,
} from "../../styledComponents/Cart/text";
import { getCookie } from "../../App";
import Counter from "./Counter";
import { deleteAll, deleteItem, editCart } from "../Header/Cart/Cart";

export default function Cart(props) {

  const [disabledFirst, setDisabledFirst] = useState(true);
  const [disabledSecond, setDisabledSecond] = useState(true);
  const [disabledThird, setDisabledThird] = useState(true);
  const [disabledEuropost, setDisabledEuropost] = useState(false);
  const [disabledPost, setDisabledPpost] = useState(false);
  const [disabledPickup, setDisabledPickup] = useState(false);
  const [disabledNal, setDisabledNal] = useState(false);
  const [isPickup, SetIsPickup] = useState(false);
  const [isPickup2, SetIsPickup2] = useState(false);

  const [isColumn, setIsColumn] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setIsColumn(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });


  let isCookie = false;
  let productsCart = [];
  if (document.cookie) {
    isCookie = true;
    for (let i = 1; i < 5; i++) {
      let name = "product" + i;
      let data = getCookie(name);
      if (data !== undefined) {
        let product = {
          count: data,
          datum: props.products[i - 1],
        };
        productsCart.push(product);
      }
    }
  }

  return (
    <div>
      <MainStyled style={{ display: isCookie ? "none" : "flex" }} id='empty'>
        <MainContainerStyled>
          <ContainerStyled>
            <MainTextStyled style={{textAlign:'center', lineHeight: '70px'}}>Упс... Корзина пуста :(</MainTextStyled>
            <TextStyled style={{textAlign:'center'}}>
              Вы можете вернуться в магазин, чтобы добавить товары в корзину
            </TextStyled>
            <NavLink to="/">
              <ButtonBackStyled onClick={() => {window.scrollTo(0,0)}}>В МАГАЗИН</ButtonBackStyled>
            </NavLink>
          </ContainerStyled>
        </MainContainerStyled>
      </MainStyled>
      <MainStyled style={{ display: isCookie ? "block" : "none" }} id='full'>  
      <ButtonDeleteContainer>
        <ButtonBackStyled onClick={() => {
          document.getElementById('full').style.display = 'none';
          document.getElementById('empty').style.display = 'flex';
          deleteAll();
          editCart();
        }}>Очистить корзину</ButtonBackStyled>
      </ButtonDeleteContainer>
        {productsCart.map((product) => (
          <ContainerFullStyled key={product.datum.id} id={product.datum.id}>
            <ContainerProductStyled>
              <InfoStyled>
                <TextTitleStyled>{product.datum.title}</TextTitleStyled>
                <TextSizeStyled>250 мл</TextSizeStyled>
              </InfoStyled>
              <MainContainerProductStyled >
                {product.datum.picture}
                <Counter id={product.datum.id} count={product.count} />
                <ImgCloseStyled
                  onClick={() => {
                    let counter = 0;
                    for(let i = 1; i < 5; i++){
                      let element = document.getElementById(i);
                      if(element) {
                        if(window.getComputedStyle(element).display !== 'none') counter += 1;
                      }
                      
                    }
                    if(counter === 1){
                      document.getElementById('full').style.display = 'none';
                      document.getElementById('empty').style.display = 'flex';
                      let name = `product${product.datum.id}`;
                      deleteItem(name);
                      editCart();
                    }
                    else {
                      document.getElementById(product.datum.id).style.display = 'none';
                      let name = `product${product.datum.id}`;
                      deleteItem(name);
                      editCart();
                    }
                  }}
                  src={require("../../img/close_grey.png")}
                  alt="close"
                />
              </MainContainerProductStyled>
            </ContainerProductStyled>
          </ContainerFullStyled>
        ))}
        <FormContainer name="form" style={{display: isColumn <= 792 ? 'none' : 'flex'}}>
          <FormBlockStyled>
            <TextFormStyled>
              Имя получателя
            </TextFormStyled>
            <InputStyled required type="text" placeholder="Фамилия Имя Отчество" name="name"/>
            <TextFormStyled>
            Контактный номер телефона
            </TextFormStyled>
            <InputStyled required type="tel" placeholder="+375" name="phone"/>
            <TextTitleForm>
              Способы доставки:
            </TextTitleForm>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery" id="europost" disabled={disabledEuropost}  onClick={() => {
                setDisabledFirst(false);
                setDisabledSecond(true);
                setDisabledThird(true);
                setDisabledNal(true);
                SetIsPickup(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Европочта
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery" id="post" disabled={disabledPost}  onClick={() => {
                setDisabledFirst(true);
                setDisabledSecond(false);
                setDisabledThird(true);
                setDisabledNal(false);
                SetIsPickup(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Белпочта
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery" id="pickup" disabled={disabledPickup} onClick={() => {
                setDisabledFirst(true);
                setDisabledSecond(true);
                setDisabledThird(false);
                setDisabledNal(true);
                SetIsPickup(true);
              }} />
              <TextFormStyled style={{marginBottom: '0'}}>
              Самовывоз
            </TextFormStyled>
            </RadioContainer>
            <TextFormPickup style={{display: disabledThird ? 'none' : 'block'}}>
              г.Минск, ул.Курчатова, 5
            </TextFormPickup>
            <TextFormStyled style={{display: disabledThird ? 'none' : 'block'}}>
              Время работы: 8:30 - 19:30, без выходных
            </TextFormStyled>
            <TextFormEuropost>
              Европочта:
            </TextFormEuropost>
            <InputStyled required disabled={disabledFirst} type="text" placeholder="Город" name="citypost"/>
            <InputStyled required disabled={disabledFirst} type="text" placeholder="Отделение №" name="numberpost"/>
            <TextAreaStyled name="message" placeholder="Ваш комментарий к заказу"/>
          </FormBlockStyled>
          <FormRightBlockStyled>
          <TextTitleForm>
              Способы оплаты:
            </TextTitleForm>
            <RadioContainer>
              <RadioStyled disabled={disabledNal} required type="radio" name="pay" id="cash on delivery"  onClick={() => {
                setDisabledEuropost(true);
                setDisabledPickup(true);
                setDisabledPpost(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Наложненный платёж
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="pay" id="cash"  onClick={() => {
                setDisabledEuropost(false);
                setDisabledPickup(false);
                setDisabledPpost(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Наличные
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="pay" id="card" onClick={() => {
                setDisabledEuropost(false);
                setDisabledPickup(false);
                setDisabledPpost(false);
              }} />
              <TextFormStyled style={{marginBottom: '0'}}>
              Карта
            </TextFormStyled>
            </RadioContainer>
            <TextBelpostForm>
              Белпочта:
            </TextBelpostForm>
            <PostContainerStyled>
              <InputContainerStyled>
              <InputIndexStyled disabled={disabledSecond} required type="text" placeholder="Индекс" name="index"/>
              <InputCityStyled disabled={disabledSecond} required type="text" placeholder="Город" name="city"/>
              </InputContainerStyled>
              <InputContainerStyled>
              <InputStreetStyled disabled={disabledSecond} required type="text" placeholder="Улица" name="street"/>
              <InputHouseStyled disabled={disabledSecond} required type="text" placeholder="Дом" name="house"/>
              </InputContainerStyled>
              <InputContainerStyled>
              <InputEtcStyled disabled={disabledSecond} type="text" placeholder="Дополнительно (подъезд, квартира, и т.п.)" name="etc"/>
              </InputContainerStyled>
            </PostContainerStyled>
            
            <ButtonSubmitStyled type="submit" onClick={(e)=> { 
              if(document.form.name.value !== '' && document.form.phone.value !== '' && 
              document.form.delivery.value !== '' && document.form.pay.value !== ''){
                if(isPickup || (document.form.citypost.value !== '' && document.form.numberpost.value !== '')
                ||(document.form.index.value !== '' && document.form.city.value !== '' && document.form.street.value !== '' && document.form.house.value !== '')){
                  deleteAll();
                  editCart();
                  console.log('Puk!');
                  e.preventDefault();
                  window.history.replaceState(null, {}, '/success');
                  window.location.reload();
                }
              }
            }}>Отправить</ButtonSubmitStyled>
            
            <ButtonResetStyled onClick={() => {
               setDisabledFirst(true);
               setDisabledSecond(true);
               setDisabledThird(true);
            }} type="reset">Сбросить</ButtonResetStyled>
          </FormRightBlockStyled>
        </FormContainer>


        <FormContainer name="form2" style={{display: isColumn <= 792 ? 'flex' : 'none'}}>
          <FormBlockStyled>
            <TextFormStyled>
              Имя получателя
            </TextFormStyled>
            <InputStyled required type="text" placeholder="Фамилия Имя Отчество" name="name2"/>
            <TextFormStyled>
            Контактный номер телефона
            </TextFormStyled>
            <InputStyled required type="tel" placeholder="+375" name="phone2"/>
            <TextTitleForm>
              Способы доставки:
            </TextTitleForm>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery2" id="europost" disabled={disabledEuropost}  onClick={() => {
                setDisabledFirst(false);
                setDisabledSecond(true);
                setDisabledThird(true);
                setDisabledNal(true);
                SetIsPickup2(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Европочта
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery2" id="post" disabled={disabledPost}  onClick={() => {
                setDisabledFirst(true);
                setDisabledSecond(false);
                setDisabledThird(true);
                setDisabledNal(false);
                SetIsPickup2(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Белпочта
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="delivery2" id="pickup" disabled={disabledPickup} onClick={() => {
                setDisabledFirst(true);
                setDisabledSecond(true);
                setDisabledThird(false);
                setDisabledNal(true);
                SetIsPickup2(true);
              }} />
              <TextFormStyled style={{marginBottom: '0'}}>
              Самовывоз
            </TextFormStyled>
            </RadioContainer>
            <TextFormPickup style={{display: disabledThird ? 'none' : 'block'}}>
              г.Минск, ул.Курчатова, 5
            </TextFormPickup>
            <TextFormStyled style={{display: disabledThird ? 'none' : 'block'}}>
              Время работы: 8:30 - 19:30, без выходных
            </TextFormStyled>
            <TextFormEuropost>
              Европочта:
            </TextFormEuropost>
            <InputStyled required disabled={disabledFirst} type="text" placeholder="Город" name="citypost2"/>
            <InputStyled required disabled={disabledFirst} type="text" placeholder="Отделение №" name="numberpost2"/>
            <TextBelpostForm>
              Белпочта:
            </TextBelpostForm>
            <PostContainerStyled>
              <InputContainerStyled>
              <InputIndexStyled disabled={disabledSecond} required type="text" placeholder="Индекс" name="index2"/>
              <InputCityStyled disabled={disabledSecond} required type="text" placeholder="Город" name="city2"/>
              </InputContainerStyled>
              <InputContainerStyled>
              <InputStreetStyled disabled={disabledSecond} required type="text" placeholder="Улица" name="street2"/>
              <InputHouseStyled disabled={disabledSecond} required type="text" placeholder="Дом" name="house2"/>
              </InputContainerStyled>
              <InputContainerStyled>
              <InputEtcStyled disabled={disabledSecond} type="text" placeholder="Дополнительно (подъезд, квартира, и т.п.)" name="etc"/>
              </InputContainerStyled>
            </PostContainerStyled>
          </FormBlockStyled>
          <FormRightBlockStyled>
          <TextTitleForm>
              Способы оплаты:
            </TextTitleForm>
            <RadioContainer>
              <RadioStyled disabled={disabledNal} required type="radio" name="pay2" id="cash on delivery"  onClick={() => {
                setDisabledEuropost(true);
                setDisabledPickup(true);
                setDisabledPpost(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Наложненный платёж
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="pay2" id="cash"  onClick={() => {
                setDisabledEuropost(false);
                setDisabledPickup(false);
                setDisabledPpost(false);
              }}/>
              <TextFormStyled style={{marginBottom: '0'}}>
              Наличные
            </TextFormStyled>
            </RadioContainer>
            <RadioContainer>
              <RadioStyled required type="radio" name="pay2" id="card" onClick={() => {
                setDisabledEuropost(false);
                setDisabledPickup(false);
                setDisabledPpost(false);
              }} />
              <TextFormStyled style={{marginBottom: '0'}}>
              Карта
            </TextFormStyled>
            </RadioContainer>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TextAreaStyled name="message" placeholder="Ваш комментарий к заказу"/>
            
            <ButtonSubmitStyled type="submit" onClick={(e)=> { 
              if(document.form2.name2.value !== '' && document.form2.phone2.value !== '' && 
              document.form2.delivery2.value !== '' && document.form2.pay2.value !== ''){
                if(isPickup2 || (document.form2.citypost2.value !== '' && document.form2.numberpost2.value !== '')
                ||(document.form2.index2.value !== '' && document.form2.city2.value !== '' && document.form2.street2.value !== '' 
                && document.form2.house2.value !== '')){
                  deleteAll();
                  editCart();
                  console.log('Puk!');
                  e.preventDefault();
                  window.history.replaceState(null, {}, '/success');
                  window.location.reload();
                }
              }
            }}>Отправить</ButtonSubmitStyled>
            
            <ButtonResetStyled onClick={() => {
               setDisabledFirst(true);
               setDisabledSecond(true);
               setDisabledThird(true);
            }} type="reset">Сбросить</ButtonResetStyled>
            </div>
          </FormRightBlockStyled>
        </FormContainer>
      </MainStyled>

    </div>
  );
}
