import React from "react";
import {CartStyled, BlockStyled} from "../../../styledComponents/Header/containers";
import { getCookie } from "../../../App";

function editCart() {
    let count = 0;
    let countCart = document.querySelector('#count_cart');
    if (document.cookie) {
        for (let i = 0; i < 4; i++) {
            let name = 'product' + (i + 1);
            let data = getCookie(name);
            if (data) {
                count += data;
            }
        }
        countCart.style.display = 'flex';
        countCart.innerHTML = count;
    }
    else {
        countCart.style.display = 'none';
    }
};

export function deleteAll() {
    for (let i = 1; i < 5; i++) {
        let name = `product${i}`;
        let data = getCookie(name);
        if (data) {
            document.cookie = `${name}= ; max-age=${-1}`;
        }
    }
}

export function deleteItem(name) {
    document.cookie = `${name}= ; max-age=${-1}`;
}

function Cart() {
    let isCookie = false;
    let number = 0;
    if(document.cookie){
        isCookie = true;
        for (let i = 0; i < 4; i++) {
            let name = 'product' + (i + 1);
            let data = getCookie(name);
            if (data) {
                number += data;
            }
        }
    }
    return (
        <CartStyled to="/cart" onClick={() => {
            window.scrollTo(0, 0);
          }}>
        <img width={40} style={{height: 'fit-content'}} src={require("../../../img/cart.png")} alt="cart" />
        <BlockStyled style={{display: isCookie ? 'flex' : 'none'}} id="count_cart">
            {number}
        </BlockStyled>
        </CartStyled>
    );
}

export {Cart, editCart};
