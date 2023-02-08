'use strict';

import app from './Components/App.js';
import {header, nav, main, footer} from './Components/App.js';

const items = [];

let itemsForReload = [];

let clone = itemsForReload.slice(0);

    if (!localStorage.getItem('Array')) localStorage.setItem('Array', clone);
    else itemsForReload = localStorage.getItem('Array').split(',');

let allDelete = [];

let list = localStorage.getItem('productsData'),
    listOfProducts = JSON.parse(list);

let div = document.querySelector('.app');

    div.prepend(main);
    
let mainBlock = document.querySelector('main');
let cont = document.createElement('div');

    cont.classList.add('container_main');
    mainBlock.prepend(cont)
    location.hash = "#";

    div.prepend(header);
let titleOfPage = document.createElement('div');
    titleOfPage.classList.add('titleOfPage');
    header.prepend(titleOfPage);
    titleOfPage.innerHTML = 'Please, buy something! &#10084';

let divContainer = document.createElement('div');
    divContainer.classList.add('container_nav');
    divContainer.innerHTML = `
    
    <div class="navigation">
        <div class="menu-toggle"></div>
        <ul class="list">
            <li class="list-item active" style="--color:#f44336"><a href="#">
                <span class="icon">
                    <ion-icon name="home-outline">
                        <img class="icon_img" src="./img/heart-svgrepo-com.svg">
                    </ion-icon>
                </span>
                <span class="text">Home</span>
            </a></li>
            <li class="list-item" style="--color:#ffa117"><a href="#">
                <span class="icon">
                    <ion-icon name="alert-outline">
                        <img class="icon_img" src="./img/beer-svgrepo-com.svg">
                    </ion-icon>
                </span>
                <span class="text">About</span>
            </a></li>
            <li class="list-item" style="--color:#0fc70f"><a href="#">
                <span class="icon">
                    <ion-icon name="call-outline">
                        <img class="icon_img" src="./img/chat-svgrepo-com.svg">
                    </ion-icon>
                </span>
                <span class="text">Contact</span>
            </a></li>
            <li class="list-item" style="--color:#2196f3"><a href="#">
                <span class="icon">
                    <ion-icon name="grid-outline">
                        <img class="icon_img" src="./img/folder-svgrepo-com.svg">
                    </ion-icon>
                </span>
                <span class="text">Portfolio</span>
            </a></li>
            <li class="list-item" style="--color:#b145e9"><a href="#">
                <span class="icon">
                    <ion-icon name="pencil-outline">
                        <img class="icon_img" src="./img/notebook-svgrepo-com.svg">
                    </ion-icon>
                </span>
                <span class="text">Blog</span>
            </a></li>
        </ul>
    </div>
    `
    header.prepend(divContainer);

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
    menuToggle.onclick = () => {

        navigation.classList.toggle('open');
    }

const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.onclick = () => {
            listItems.forEach(item =>
                item.classList.remove('active'));
                item.classList.add('active');
                location.hash = '#'
    }
    })

    for (let i = 0; i<listOfProducts.length; i++) {

        let card = document.createElement('div');
            card.classList.add('eachProduct');
            card.innerHTML = `

            <div class="id">${listOfProducts[i].id}</div>
            <div class="name">${listOfProducts[i].title}</div>
            <div class="pic"><img src="${listOfProducts[i].image}"></div>
            <div class="buy">
                <div class="id">${listOfProducts[i].id}</div>
                <div class="cost">${listOfProducts[i].price} $</div>
                <div class="button"></div>
            </div>
            
            `
        let cardBlock = document.querySelector('.container_main');
            cardBlock.prepend(card);

        let load = document.cookie.split(';');
            
            for (let j = 0; j < load.length; j++) {
                let cookie = load[j].split('=');

                    if(listOfProducts[i].id == cookie[0]){

                        let but = document.querySelector('.button');
                            but.classList.add('disabled_b');
                }
            }

            document.querySelector('.button').addEventListener('click', add);
            document.querySelector('.button').addEventListener('click', changeButton);
            document.querySelector('.pic').addEventListener('click', itemPage);
    }

    function changeButton(){

        this.classList.add('disabled_b');
    }

    function itemPage () {

        let chooseCard = this.parentNode;
        let id = +chooseCard.children[0].innerText;
            location.hash = '#product/' + id;
        
        let carts = document.createElement('div');
            carts.classList.add('cart');
            carts.innerHTML = `
        
            <div class="nameOfBuy_cart">${listOfProducts[id-1].title}</div>
            <div class="category_cart">${listOfProducts[id-1].category}</div>
        
            <div class="picOfBuy_cart"><img src="${listOfProducts[id-1].image}"></div>
        
            <div class="description_cart">${listOfProducts[id-1].description}</div>
            <div class="buy_cart">
                <div class="id">${listOfProducts[id-1].id}</div>
                <div class="cost">${listOfProducts[id-1].price} $</div>
                <div class="button"></div>
            </div>
            `

    let h = document.querySelector('header');
        h.after(carts);

    let cookie, allcookie = document.cookie.split(';');
            
        for (let i = 0; i < allcookie.length; i++) {
            cookie = allcookie[i].split('=');
            let cook = cookie[0]
            if(cook == id){

                let but = document.querySelector('.button');
                    but.classList.add('disabled_b');
            }
        }

    document.querySelector('.button').addEventListener('click', add);
    document.querySelector('.button').addEventListener('click', changeButton);
    }

let productId;
    

    function add(){

        let products = this.parentNode;
    
            productId = +products.children[0].innerText;

        let itemCard = {
    
            name: listOfProducts[productId - 1].title,
            pic: listOfProducts[productId - 1].image,
            cost: listOfProducts[productId - 1].price,
        }
    
            items.push(itemCard);

        let name = listOfProducts[productId - 1].id;
        let value = listOfProducts[productId - 1].price;
        let newNum;

        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';' + 'path=/';

        function getCookie (names) {
            let cookie, allcookie = document.cookie.split(';');
                for (let i = 0; i < allcookie.length; i++) {
                    cookie = allcookie[i].split('=');
                        if (cookie[0] == names) {
                            return decodeURIComponent(cookie[1]);
                        }
                }
                    return false;
        }

        getCookie(name);

        document.querySelector('#fieldForCost').textContent = +document.querySelector('#fieldForCost').textContent + +getCookie(name);
        newNum = +document.querySelector('#fieldForCost').textContent;
        let n = +newNum.toFixed(2);
        document.querySelector('#fieldForCost').textContent = n;
        document.querySelector('#num').textContent = +document.querySelector('#num').textContent + 1;

        itemsForReload.push('1');
        localStorage.setItem('Array', itemsForReload);
    };

let busketIcon = document.createElement('div');
    busketIcon.classList.add('busket');
    busketIcon.innerHTML = `
        <div id="picOfBusket">
            <div id="num">0</div>
        </div>
        <div id="fieldForCost">0</div>
    `

let h = document.querySelector('header');
    h.prepend(busketIcon);

let busketClick = document.querySelector('#picOfBusket');

    window.addEventListener('hashchange', hashchange);

let deleteItem;

    function hashchange () {

        let cart = document.querySelector('.cart');
        let card = document.querySelector('.addToPrice');
        let cont = document.querySelector('.container_main');
        let hash = location.hash;
        let empty = document.querySelector('.emptyBasket');
        let changedHashSearch = /#product\/\d{1,2}/;
        let slide = document.querySelector('.wrapper')

            if(hash === '#card') {

                    localStorage.setItem('Array', itemsForReload);

                let findCookie = document.cookie.split(';');
        
                if (findCookie[0] == ''){

                    if(!document.querySelector('.emptyBasket')){

                        let buy = document.createElement('div');
                            buy.classList.add('emptyBasket');
                            buy.innerHTML = 'Basket is empty'

                        let buyBlock = document.querySelector('header');
                            buyBlock.after(buy);
                    } else {

                        document.querySelector('.emptyBasket').style.display = 'flex';
                    }

                } else {

                    basket();
                }

                if(cart) {

                    cart.style.display = 'none';
                    slide.style.display = 'none';
                        if(cont){
                            cont.style.display = 'none';
                            slide.style.display = 'none';
                        }
                } else if(cont) {
                    console.log(cont)

                    cont.style.display = 'none';
                    slide.style.display = 'none';
                } 
            } else if (changedHashSearch.test(hash)){

                cart.style.display = 'flex'

                if (cont) {

                    cont.style.display = 'none';
                    slide.style.display = 'none';
                        if(card){

                            card.style.display = 'none';
                            slide.style.display = 'none';
                        } else if(empty){
                            empty.style.display = 'none';
                            slide.style.display = 'none';
                        }

                }  else if(empty){
                    empty.style.display = 'none';
                    slide.style.display = 'none';
                }
            } else if (hash = '#'){

                if (card){
                    card.style.display = 'none';
                    if(cart){
                        cart.style.display = 'none';
                    } else if (empty){
                        empty.style.display = 'none';
                    }
                } 
                else if (cart){
                    if(card){
                        card.style.display = 'none';
                    }
                        else if (empty){
                            empty.style.display = 'none';
                        }
            
                        cart.style.display = 'none';
                } else if (empty){
                    empty.style.display = 'none';
                }

                    cont.style.display = 'flex';
                    slide.style.display = 'flex';

        let choosenOnMainPage = document.querySelectorAll('.buy > .button');

        for (let i = 0; i<choosenOnMainPage.length; i++) {

            let load = document.cookie.split(';');

            let but = choosenOnMainPage[i];
            let butChanged = but.parentNode;

                for (let j = 0; j < load.length; j++) {

                    let cookie = load[j].split('=');

                        if(+butChanged.children[0].innerText == +cookie[0]){

                            let butDis = butChanged.children[2];

                                butDis.classList.add('disabled_b');
                        };
            
                };

                for (let k = 0; k < allDelete.length; k++) {

                    if(+butChanged.children[0].innerText === +allDelete[k].children[0].innerText){
        
                        let butDis = butChanged.children[2];
                            butDis.classList.remove('disabled_b');
                    };
                }

        };
            }
    }

let reload = document.cookie.split(';');
        
    if(reload[0] != ''){

        let numForReload = localStorage.getItem('Array');
        let coo = numForReload.split(',');

            for (let i = 0; i < reload.length; i++) {

                let cookie = reload[i].split('=');
                    document.querySelector('#fieldForCost').textContent = +document.querySelector('#fieldForCost').textContent + (+cookie[1] * +coo[i]);
                let newNum = +document.querySelector('#fieldForCost').textContent;
                let n = +newNum.toFixed(2);
                    document.querySelector('#fieldForCost').textContent = n;
                    document.querySelector('#num').textContent = +document.querySelector('#num').textContent + +coo[i];

            }
    } 

    busketClick.addEventListener('click', () => {

    location.hash = '#card';
    }) 

    function basket(){

        if(!document.querySelector('.addToPrice')){

            let buy = document.createElement('div');
                buy.classList.add('addToPrice');

            let buyBlock = document.querySelector('header');
                buyBlock.after(buy);
                getCookieId ();
        } else {

                document.querySelector('.addToPrice').style.display = 'flex';
            let el = document.querySelectorAll('.items');
                for(let i=0; i<el.length; i++){
                    el[i].remove()
                }
                
                getCookieId ();
        }

        function getCookieId () {

            let cookie, allcookie = document.cookie.split(';');
                for (let i = 0; i < allcookie.length; i++) {
                        cookie = allcookie[i].split('=');
                    let cook = cookie[0]

                    let buyItems = document.createElement('div');
                        buyItems.classList.add('items');
            
                        buyItems.innerHTML = `

                            <div class="id">${listOfProducts[cook-1].id}</div>
                            <div class="nameOfBuy">${listOfProducts[cook-1].title}</div>
                            <div class="picOfBuy"><img src="${listOfProducts[cook-1].image}"></div>
                            <div class="input-number">
                                <div class="input-number__minus">-</div>
                                <input class="input-number__input" type="text" pattern="^[0-9]+$" value="1">
                                <div class="input-number__plus">+</div>
                            </div>
                            <div class="costOfBuy">${listOfProducts[cook-1].price} $</div>
                            <div class="buttonToDelete"></div>
                        `
                
                    let buyBlocks = document.querySelector('.addToPrice');
                        buyBlocks.append(buyItems);

                    let numForReload = localStorage.getItem('Array');

                    let coo = numForReload.split(',');

                    let numForRem = document.querySelectorAll('.input-number__input');

                        numForRem[i].value = +coo[i];

                    let allDel = document.querySelectorAll('.buttonToDelete')
                        for(let n=0; n<allDel.length; n++){

                            allDel[n].addEventListener('click', del);
                        }
                }
        }

            let total = document.querySelectorAll('.input-number__input'),
            min = 1,
            max = 99;

        for(let k=0; k<total.length; k++) {

            let total_minus = document.querySelectorAll('.input-number__minus');
    
                total_minus[k].addEventListener('click', () => {
                    itemsForReload.length = 0;
                        if (total[k].value > min) {
                                total[k].value = +total[k].value - 1;

                            let totalId = total[k].parentNode.parentNode;
                            let totalId_info = totalId.children[0].innerHTML;

                                document.querySelector('#fieldForCost').textContent = +document.querySelector('#fieldForCost').textContent - listOfProducts[totalId_info-1].price;
                            let newNum = +document.querySelector('#fieldForCost').textContent;
                            let n = +newNum.toFixed(2);
                                document.querySelector('#fieldForCost').textContent = n;
                                document.querySelector('#num').textContent = +document.querySelector('#num').textContent - 1;

                            let sup = document.querySelectorAll('.input-number__input');

                            for (let i=0; i<sup.length; i++) {

                                let num = sup[i].value;
                                    itemsForReload.push(num);
                                    localStorage.setItem('Array', itemsForReload);
                            }
                        }
                });
        }

        for(let k=0; k<total.length; k++) {

            let total_plus = document.querySelectorAll('.input-number__plus');

                total_plus[k].addEventListener('click', () => {
    
                    itemsForReload.length = 0;
                        if (total[k].value < max) {
                                total[k].value = +total[k].value + 1;

                            let totalId = total[k].parentNode.parentNode;
                            let totalId_info = totalId.children[0].innerHTML;

                                document.querySelector('#fieldForCost').textContent = +document.querySelector('#fieldForCost').textContent + listOfProducts[totalId_info-1].price;
                            let newNum = +document.querySelector('#fieldForCost').textContent;
                            let n = +newNum.toFixed(2);
                                document.querySelector('#fieldForCost').textContent = n;
                                document.querySelector('#num').textContent = +document.querySelector('#num').textContent + 1;

                            let sup = document.querySelectorAll('.input-number__input');

                            for (let i=0; i<sup.length; i++) {

                                let num = sup[i].value;
                                    itemsForReload.push(num);
                                    localStorage.setItem('Array', itemsForReload);

                            }
                        }
                })
        }
            document.querySelectorAll('.input-number__input').forEach(function(el) {
    
                el.addEventListener('input', function() {
                this.value = this.value.replace(/[^d]/g, '');
                });
            });

    function del () {

            deleteItem = this.parentNode;
            itemsForReload.length = 0;
            allDelete.push(deleteItem);
        let deleteId = deleteItem.children[0].innerText;
            

        let cookie, allcookie = document.cookie.split(';');
            for (let i = 0; i < allcookie.length; i++) {
                    cookie = allcookie[i].split('=');
                let cook = cookie[0]
                        if (+cook===+deleteId) {

                            let allItems = document.querySelectorAll('.input-number__input');
                                for (let i=0; i<allItems.length; i++) {

                                    let numForDel = allItems[i].parentNode.parentNode;
                                    let numForDel_but = numForDel.children[0].innerHTML;

                                        if(+deleteId == +numForDel_but) {
                                            let findedNum = allItems[i].value;

                                                document.querySelector('#fieldForCost').textContent = +document.querySelector('#fieldForCost').textContent - (+listOfProducts[deleteId-1].price * +findedNum);
                                            let newNum = +document.querySelector('#fieldForCost').textContent;
                                            let n = +newNum.toFixed(2);
                                                document.querySelector('#fieldForCost').textContent = n;
                                                document.querySelector('#num').textContent = +document.querySelector('#num').textContent - +findedNum;
                                        }
                                }

                    document.cookie = cook + '=; path=/; max-age=-1';
                    deleteItem.remove();

                let but = document.querySelector('.button');

                    but.classList.remove('disabled_b');
            
                        }
            }

        let sup = document.querySelectorAll('.input-number__input');

            for (let i=0; i<sup.length; i++) {
                let num = sup[i].value;
                    itemsForReload.push(num);
                    localStorage.setItem('Array', itemsForReload);
            }
    }
    }         

    main.after(footer);

let footerBlock = document.createElement('div');
    footerBlock.classList.add = ('footer_container');
    footerBlock.innerHTML = `
    <div class="footer_top">
        <div class="company_info">
            <h2 class="company_logo">Super company</h2>
            <p class="company_description">We glad to see you!</p>
            <span class="copyright">All rights bla-bla-bla. All fine, don\`t worry! &#128520;</span>
        </div>
        <div class="social">
            <a href="#" target="_blank" class="btn">
                <i class="fab fa-facebook-f fa fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" class="btn">
                <i class="fab fa-twitter fa fa-twitter fa-2x"></i>
            </a>
            <a href="#" target="_blank" class="btn">
                <i class="fab fa-google fa fa-google-plus fa-2x"></i>
            </a>
            <a href="#" target="_blank" class="btn">
                <i class="fab fa-instagram fa fa-instagram fa-2x"></i>
            </a>
            <a href="#" target="_blank" class="btn">
                <i class="fab fa-youtube fa fa-youtube fa-2x"></i>
            </a>
        </div>
        <div>
            <h6 class="footer_title">Cool Site</h6>
            <ul class="footer_list">
                <li class="footer_list-item">
                    <a href="" class="footer_list-link">About</a>
                </li>
            
            </ul>
        </div>
    
    </div>
    `
    footer.append(footerBlock);

let slider = document.createElement('div');
    slider.classList.add('wrapper');
    slider.innerHTML = `
    <h1>Our friends</h1>
    <div class="images-area">
        <img src="./img/joom_.png" alt="image" class="firstImage">
        <img src="./img/lstr_.png" alt="image">
        <img src="./img/mydevice_.png" alt="image">
        <img src="./img/oz_.png" alt="image">
        <img src="./img/symbal_.png" alt="image">
    </div>
    <div class="buttons-area">
        <div class="previous-btn">
            <i class="bx bx-chevron-left"></i>
        </div>
        <div class="next-btn">
            <i class="bx bx-chevron-right"></i>
        </div>
            <div class="pagination-area">
        </div>
    </div>
    `

    footer.before(slider);

let imagesAreaImages = document.querySelectorAll('.images-area img'),
    imagesAreaFirstImage = document.querySelector('.images-area .firstImage'),
    previousBtn = document.querySelector('.previous-btn'),
    nextBtn = document.querySelector('.next-btn'),
    paginationArea = document.querySelector('.pagination-area'),
    currentImageCount = 1,
    sliderController;

    previousBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);

function previousImage(){
    if(currentImageCount === 1){
        return false
    } else {
        currentImageCount--
        sliderController();
    }
}

function nextImage() {

    if(currentImageCount === imagesAreaImages.length){
        return false;
    }else{ 
        currentImageCount++;
        sliderController();
    };
};
    
(function createPaginationSpans(){
    for(let i = 0; i < imagesAreaImages.length; i++){ 
        let paginationSpan = document.createElement('span');
            paginationArea.appendChild(paginationSpan)
    };
})();
    
(sliderController = function (){
    let paginationCircls = document.querySelectorAll('.pagination-area span');
        removeAllActive(paginationCircls);
        activeButton();
    let currentImageMinusOne = currentImageCount - 1;
        paginationCircls[currentImageMinusOne].classList.add('active');
        imagesAreaFirstImage.style.marginLeft = `-${1017 * currentImageMinusOne}px`;
})();
    
function removeAllActive(targetElement){
    for(let i = 0; i < targetElement.length; i++){
        targetElement[i].classList.remove('active');
    };
};
    
function activeButton() {

    currentImageCount === 1 ? 
    previousBtn.classList.add('disabled') : 
    previousBtn.classList.remove('disabled');
        
    currentImageCount === imagesAreaImages.length ? 
    nextBtn.classList.add('disabled') : 
    nextBtn.classList.remove('disabled');
};
    
setInterval(() => {

    if(currentImageCount != imagesAreaImages.length){
        currentImageCount++;
        sliderController();
    }else{ 
        currentImageCount = 1;
        sliderController();
    };
}, 3000);