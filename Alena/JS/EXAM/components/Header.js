import { editCart } from "./Cart.js";

class Header {
    constructor() {
        this.element = '';
    }
    create() {
        let app = document.querySelector('.app');
        let header = document.createElement('header');
        header.className = 'header';
        app.append(header);
        this.element = header;

        let headerContainer = document.createElement('div');
        header.append(headerContainer);
        headerContainer.className = 'header_container';

        let logo = document.createElement('div');
        logo.className = 'logo';
        headerContainer.append(logo);
        let imgLogo = document.createElement('img');
        logo.append(imgLogo);
        imgLogo.setAttribute('src', './img/logo.png');
        imgLogo.addEventListener('click', () => {
            location.hash = '#home';
            window.scrollTo(0, 0);
        })

        let navAndCart = document.createElement('div');
        headerContainer.append(navAndCart);
        navAndCart.className = 'nav_and_cart';

        let hambMenu = document.createElement('div');
        navAndCart.append(hambMenu);
        hambMenu.className = 'hamb_menu';

        hambMenu.addEventListener('click', () => {
            let popup = document.querySelector('.popup');
            if (popup.style.left === "-100%" || popup.style.left === "") {
                hambMenu.classList.toggle('active');
                popup.style.left = "0";
                document.body.style.overflow = "hidden";
            }
            else {
                hambMenu.classList.toggle('active');
                popup.style.left = "-100%";
                document.body.style.overflow = "";
            }
        });

        for (let i = 0; i <= 2; i++) {
            let lineIcon = document.createElement('div');
            hambMenu.append(lineIcon);
            lineIcon.className = 'icon_line';
        }

        let nav = document.createElement('nav');
        nav.className = 'nav';
        navAndCart.append(nav);
        let ulNav = document.createElement('ul');
        nav.append(ulNav);

        let liFirst = document.createElement('li');
        ulNav.append(liFirst);
        liFirst.innerHTML = 'Home';
        liFirst.addEventListener('click', () => {
            location.hash = '#home';
            window.scrollTo(0, 0);
        })

        let liSecond = document.createElement('li');
        ulNav.append(liSecond);
        liSecond.innerHTML = 'Shop';
        liSecond.addEventListener('click', () => {
            location.hash = '#shop';
            window.scrollTo(0, 0);
        })

        let liThird = document.createElement('li');
        ulNav.append(liThird);
        liThird.innerHTML = 'Contacts';
        liThird.addEventListener('click', () => {
            window.scrollTo(0, document.body.scrollHeight);
        })

        let cart = document.createElement('div');
        navAndCart.append(cart);
        cart.className = 'cart';

        let imgCart = document.createElement('img');
        cart.append(imgCart);
        imgCart.setAttribute('src', './img/cart.png');
        cart.addEventListener('click', () => {
            location.hash = '#cart';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
            let popup = document.querySelector('.popup');
            if (popup.style.left === "0px") {
                hambMenu.classList.toggle('active');
                popup.style.left = "-100%";
            }
        })

        let cartInfo = document.createElement('div');
        cart.append(cartInfo);
        cartInfo.className = 'cart_info';

        let price = document.createElement('h3');
        cartInfo.append(price);
        price.innerHTML = "00.00 $";
        price.className = 'price_cart';

        let count = document.createElement('div');
        cartInfo.append(count);
        count.innerHTML = "0";
        count.className = 'count_cart';

        if (document.cookie) {
            editCart();
        }

    }
    init() {
        this.create();
        return this.element;
    }
}
const header = new Header().init();
export { header };