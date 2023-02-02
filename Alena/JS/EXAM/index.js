"use strict";
import App from '../components/App.js';
import { header } from '../components/Header.js';
import { main } from '../components/Main.js';
import { footer } from '../components/Footer.js';

main.init();
footer.init();

if (location.hash === "") {
    main.createMain();
}
else checkHash();

function checkHash() {
    if (location.hash === "#home") {
        let mainContainer = document.querySelector('.main_container');
        if (mainContainer) mainContainer.remove();
        main.createMain();
    }
    else if (location.hash === "#shop") {
        let mainContainer = document.querySelector('.main_container');
        if (mainContainer) mainContainer.remove();
        main.createShop();
    }
    else if (location.hash === "#cart") {
        let mainContainer = document.querySelector('.main_container');
        if (mainContainer) mainContainer.remove();
        main.createCart();
    }
}

window.addEventListener('hashchange', checkHash);

export function getData() {
    let products = localStorage.getItem('products');
    if (products) return JSON.parse(products);
    else return 0;
}

export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(matches[1]) : undefined;
  }

// export function deleteCookie(name) {
//     setCookie(name, "", {
//       'max-age': -1
//     })
//   }

export let age = 10*24*60*60;
