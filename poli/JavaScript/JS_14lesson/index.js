let html = document.querySelector("html");
html.setAttribute("lang", "en");

let metaUtf8 = document.createElement("meta");
metaUtf8.setAttribute("charset", "UTF-8");
document.head.appendChild(metaUtf8);

let vieport = document.createElement("meta");
vieport.setAttribute("name", "viewport");
vieport.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(vieport);


let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "style.css");
document.head.appendChild(link);

let link2 = document.createElement("link");
link2.setAttribute("rel", "stylesheet");
link2.setAttribute("href", "media.css");
document.head.appendChild(link2);

let title = document.createElement("title");
title.innerHTML = "P I L L A";
document.head.appendChild(title);

export const mainContainer = document.createElement("main");
mainContainer.classList.add("container");

import App from "./components/App.js";
const shopApp = new App();
shopApp.init();

import Header from "./components/Header.js";
const shopHeader = new Header();
shopHeader.init();

import Nav from "./components/Nav.js";
const shopNav = new Nav();
shopNav.init();

import Main from "./components/Main.js";
const shopMain = new Main();
shopMain.init();

import Footer from "./components/Footer.js";
const shopFooter = new Footer();
shopFooter.init();

const data = shopNav.data;

if (location.hash === "") {
  shopMain.mainPage();
} else {
  checkHash();
}

export function checkHash() {
  const hash = location.hash;
  console.log(hash);

  if (hash === "#cart") {
    shopMain.cart(data);
  } else {
    if (hash === "#main") {
      shopMain.mainPage();
    } else {
      if (hash.includes("#products")) {
        shopMain.products(data);
      }
    }
  }
}

window.addEventListener("hashchange", checkHash);

export function getCookie(cname) {
  let cookieName = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      const value = c.substring(cookieName.length, c.length);
      return JSON.parse(value);
    }
  }
  return "";
}

export function setCookie(cname, cvalue, exdays = 10) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}

export function openModal(htmlElement) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="productWindow">
        <div class="cardView">
            <button class="close">✖</button>
            <h1 class='selected'>Selected item</h1>
        </div>
    </div>
    `
  );

  const modalBox = document.querySelector(".cardView");
  modalBox.appendChild(htmlElement);

  const close = document.querySelector(".close");
  close.addEventListener("click", closeModal);
}

export function closeModal() {
  const modalWindow = document.querySelector(".productWindow");
  modalWindow.remove();
  location.hash = `#products`;
}