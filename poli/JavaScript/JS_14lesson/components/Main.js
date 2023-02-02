import {mainContainer} from '../index.js';
import {getCookie} from '../index.js';
import {setCookie} from '../index.js';
import {openModal} from '../index.js';

export default class Main {
    create() {
        const main = document.createElement('main');
        main.classList.add('main');
        mainContainer.appendChild(main);
        const element = document.querySelector('.app');
        element.appendChild(mainContainer);
    }

    // main
    mainPage() {
        
        const mainContainer = document.querySelector('.container')
        mainContainer.innerHTML = '';
        mainContainer.insertAdjacentHTML('afterbegin', `
        <h1 class = 'main_h1'> MAIN </h1>
        <img class = 'gomer' src='../img/gomer.png' width='500' height='620' alt='gomer'>
        <p class = 'mainSlogan'>LOVE FROM THE FIRST DONUT</p>
        <p class = 'work'>WE ARE WORKING:</p>
        <ul class = 'mainUl'>
        <li>MONDAY - FRIDAY: 8.00 - 22.00</li>
        <li>SATURDAY: 9:00 - 22.00</li>
        <li>SATURDAY: 9:00 - 21.00</li>
        </ul>
        <p class = 'adressMain'>Adress:</p>
        <p class = 'adressSt'>Virginia State Route 191</p>
        <img class = 'gomerMedia' src='../img/gomerMedia.png' alt='gomerMedia'>
        `)
    
    }
    
    productCard = (data) => {
        let counter = 1;

        const block = document.createElement('div');
        block.classList.add('block');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('modal-image-block');

        const img = new Image(250);
        img.src = data.image;
        imgWrapper.appendChild(img);
        img.classList.add('imgOnCard');
        block.appendChild(imgWrapper);

        const title = document.createElement('h2');
        title.innerText = data.title;
        title.classList.add('title');

        const counterBlock = document.createElement('div');
        counterBlock.classList.add('counter-block');
        block.appendChild(counterBlock);

        const countMinus = document.createElement('span');
        countMinus.innerText = '-';

        const countPlus = document.createElement('span');
        countPlus.innerText = '+';

        const countText = document.createElement('div');
        countText.innerText = counter;

        countMinus.addEventListener('click', () => {
            if (counter > 1) {
                counter--;
                countText.innerText = counter;
            }
        });

        countPlus.addEventListener('click', () => {counter++; countText.innerText = counter;})
        
        counterBlock.appendChild(countMinus);
        counterBlock.appendChild(countText);
        counterBlock.appendChild(countPlus);

        const btnAdd = document.createElement('button');
        btnAdd.innerText = 'Add to cart';
        btnAdd.classList.add('addToCart');
    
        btnAdd.addEventListener('click', () => {
            const cartList = getCookie('cart') || [];
            if(cartList?.find(item => item.id === data.id)) {
                alert('This product has already been added to the cart.')
            } else {
            
                cartList.push({
                    id: data.id,
                    count: counter
                })
                setCookie('cart', cartList);           
            }
        })
        block.appendChild(btnAdd);

        return block;
}
    // products
    products = (data) => {
        mainContainer.innerHTML = '';
        mainContainer.insertAdjacentHTML('afterbegin', `
            <h1> PRODUCTS </h1>
        `)
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-wrapper');
        let products;
        if(localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        } else {
            const response = fetch('https://fakestoreapi.com/products');
            products = response.json();
    
            localStorage.setItem('products', JSON.stringify(products));
        }
    
        products.map((item) => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card');

            const cardIns = document.createElement('div');
            cardIns.classList.add('cardIns');
            cardItem.appendChild(cardIns);

            const imgItem = new Image(300);
            imgItem.src = item.image;
            cardIns.appendChild(imgItem);

            const title = document.createElement('h3');
            title.innerText = item.title;
            title.classList.add('title_h3');
            cardIns.appendChild(title);

            const price = document.createElement('div');
            price.innerText = item.price + '$';
            price.classList.add('price_card');
            cardIns.appendChild(price);

            cardIns.addEventListener('click', () => {
                location.hash = `#products/${item.id}`;
            });
            cardsContainer.appendChild(cardItem);
        })
        mainContainer.appendChild(cardsContainer)
    
        if(location.hash !== '#products') {
            const productId = location.hash.replace('#products/', '');

            const product = products.find((item) => item.id == productId);
            console.log(product);

            if(product) {
                const productHtml = this.productCard(product, data.cartList);
                openModal(productHtml);
               
            } else {
                alert('Sorry. Such a product is not available now.')
            }
        }
    }


    getTotalPrice = (products) => {
        const cart = getCookie('cart');

        let total = 0;
        cart.map(item => {
            const currentProduct = products.find(product => product.id === item.id);
            total+=currentProduct.price*item.count;
        })
        return total.toFixed(2);
    }
    
    // cart
    cart = (data) => {
        mainContainer.innerHTML = '';
        mainContainer.insertAdjacentHTML('afterbegin', `
            <h1> CART </h1>
        `)

        const totalPrice = document.createElement('div');
        totalPrice.classList.add('total-price');

        const products = JSON.parse(localStorage.getItem('products'));
        const cartList = getCookie('cart');

        cartList?.map(cartItem => {
            const currentProduct = products.find(item => item.id === cartItem.id);
            console.log(currentProduct);

            const counterBlock2 = document.createElement('div');
            counterBlock2.classList.add('counter-block2');

            const countMinus = document.createElement('span');
            countMinus.innerText = '-';

            const countPlus = document.createElement('span');
            countPlus.innerText = '+';

            const countText = document.createElement('div');
            countText.innerText = cartItem.count;

            countMinus.addEventListener('click', () => {
                if (cartItem.count > 1) {
                    cartItem.count--;
                    countText.innerText = cartItem.count;
                    price.innerHTML = (cartItem.count*currentProduct.price).toFixed(2);
                    setCookie('cart', cartList);
                    totalPrice.innerText = 'Total price ' + this.getTotalPrice(products) + '$';
                }
            });

            countPlus.addEventListener('click', () => {
                cartItem.count++; 
                countText.innerText = cartItem.count;
                price.innerHTML = (cartItem.count*currentProduct.price).toFixed(2);
                setCookie('cart', cartList);
                totalPrice.innerText = 'Total price ' + this.getTotalPrice(products) + '$';
            })

            counterBlock2.appendChild(countMinus);
            counterBlock2.appendChild(countText);
            counterBlock2.appendChild(countPlus);

            const title = document.createElement('h2');
            title.innerHTML = currentProduct.title;
            title.classList.add('title');
            mainContainer.appendChild(title);

            const imgItem = new Image();
            imgItem.src = currentProduct.image;
            imgItem.classList.add('imgItemCart');
            mainContainer.appendChild(imgItem);
            
            const price = document.createElement('div');
            price.innerHTML = (cartItem.count * currentProduct.price) + '$';
            price.classList.add('price');
            mainContainer.appendChild(price);
            
            const desc = document.createElement('p');
            desc.innerHTML = currentProduct.description;
            desc.classList.add('desc');
            mainContainer.appendChild(desc);


            mainContainer.appendChild(counterBlock2);
    
            const btnRemove = document.createElement('button');
            btnRemove.classList.add('remove');
            btnRemove.innerText = 'Remove this item';
            btnRemove.addEventListener('click', () => {
                const filteredCartList = cartList.filter(item => item.id !== cartItem.id);
                setCookie('cart', filteredCartList);
                this.cart(data);
            })
            mainContainer.appendChild(btnRemove);
            totalPrice.innerText = 'Total price ' + this.getTotalPrice(products) + '$';
            mainContainer.appendChild(totalPrice);
        })     
    }

    init() {
        this.create();    
    }
}