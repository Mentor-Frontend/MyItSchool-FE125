import {getCookie} from './../index.js';

export default class Nav {
    constructor(){
        this.menu = [
            {
                name: 'MAIN',
                element: document.createElement('li'),

            },
            {
                name: 'PRODUCTS',
                element: document.createElement('li'),
            },
            {
                name: 'CART',
                element: document.createElement('li'),
            },
        ],
        this.data = {
            products: [],
            cartList: getCookie('cart') || []
        }
    }
    data() {
        return this.data;
    }
    
    create() {
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        const element = document.querySelector('.app');
        element.appendChild(nav);
        
    }

    drawMenu (menu) {
        const menuDOM = document.createElement('menu');
        menu.map((item) => {
            const listItem = item.element; 
            listItem.addEventListener('click', () => {
                location.hash = '#' + item.name.toLowerCase();
            });
            listItem.innerText = item.name;
            menuDOM.appendChild(listItem);
        });
        
        const nav = document.querySelector('.nav');
        nav.appendChild(menuDOM);
    }

    init() { 
        this.create();
        this.drawMenu(this.menu);
    }
}