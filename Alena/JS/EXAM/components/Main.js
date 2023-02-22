import { getData } from "../index.js";
import { getCookie } from "../index.js";
import { age } from "../index.js";
import { editCart } from "./Cart.js";
import { deleteAll } from "./Cart.js";

// let this.products = getData();
// if (!this.products) {
//     alert('The data is not loaded, reload the page!');
// } //я не решила свою проблемы с загрузкой данных, поэтому сделала костыль 

class Main {
    constructor() {
        this.element = '';
        this.products = ''
    }
    create() {
        let app = document.querySelector('.app');
        let main = document.createElement('main');
        main.className = 'main';
        app.append(main);
        this.element = main;
    }
    createMain() {
        let main = this.element;
        let mainContainer = document.createElement('div');
        main.append(mainContainer);
        mainContainer.className = 'main_container';
        main.style.backgroundColor = 'white';

        let hambMenu = document.querySelector('.hamb_menu');

        let popup = document.createElement('div');
        mainContainer.prepend(popup);
        popup.className = 'popup';

        let navHamb = document.createElement('div');
        navHamb.className = 'nav_hamb';
        popup.append(navHamb);

        let ulNavHamb = document.createElement('ul');
        navHamb.append(ulNavHamb);

        let liFirst = document.createElement('li');
        ulNavHamb.append(liFirst);
        liFirst.innerHTML = 'Home';
        liFirst.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#home';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liSecond = document.createElement('li');
        ulNavHamb.append(liSecond);
        liSecond.innerHTML = 'Shop';
        liSecond.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#shop';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liThird = document.createElement('li');
        ulNavHamb.append(liThird);
        liThird.innerHTML = 'Contacts';
        liThird.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            popup.style.left = '-100%';
            window.scrollTo(0, document.body.scrollHeight);
            document.body.style.overflow = "";
        })

        let firstBlock = document.createElement('div');
        mainContainer.append(firstBlock);
        firstBlock.className = 'first_block';

        let firstBlockCont = document.createElement('div');
        firstBlock.append(firstBlockCont);
        firstBlockCont.className = 'first-block_container';

        let leftBlock = document.createElement('div');
        firstBlockCont.append(leftBlock);
        leftBlock.className = 'left_block';

        let h1 = document.createElement('h1');
        leftBlock.append(h1);
        h1.innerHTML = 'Flowers,' + String.fromCodePoint(0x1F33F) + 'what the world needs!';

        let h2Main = document.createElement('h2');
        leftBlock.append(h2Main);
        h2Main.innerHTML = 'The largest online store of seedlings, flowers, garden tools and everything that will help make our Earth greener.'
        h2Main.className = 'h2_main';

        let button = document.createElement('button');
        leftBlock.append(button);
        button.innerHTML = 'Shop Now!';
        button.classList = 'button_shop';
        button.addEventListener('click', () => {
            location.hash = '#shop';
            window.scrollTo(0, 0);
        })

        let tile = document.createElement('div');
        firstBlockCont.append(tile);
        tile.className = 'tile';
        let img1 = document.createElement('img');
        tile.append(img1);
        img1.setAttribute('src', './img/tile1.png');
        let img2 = document.createElement('img');
        tile.append(img2);
        img2.setAttribute('src', './img/tile2.png');
        let img3 = document.createElement('img');
        tile.append(img3);
        img3.setAttribute('src', './img/tile6.png');
        let img4 = document.createElement('img');
        tile.append(img4);
        img4.setAttribute('src', './img/tile4.png');
        let img5 = document.createElement('img');
        tile.append(img5);
        img5.setAttribute('src', './img/tile5.png');
        let img6 = document.createElement('img');
        tile.append(img6);
        img6.setAttribute('src', './img/tile3.png');

        //---------slider---------//

        let secondBlock = document.createElement('div');
        mainContainer.append(secondBlock);
        secondBlock.className = 'second_block';

        let slider = document.createElement('div');
        secondBlock.append(slider);
        slider.className = 'slider';

        let sale1 = this.products[2],
            sale2 = this.products[5],
            sale3 = this.products[11],
            sale4 = this.products[17];

        let arrSale = [sale1, sale2, sale3, sale4];

        for (let i = 0; i < 4; i++) {
            let slide = document.createElement('div');
            let sizeWindow = document.querySelector('.second_block').offsetWidth;
            slider.append(slide);
            slide.className = 'slide';
            if (sizeWindow < 1440) {
                slide.style.width = sizeWindow + 'px';
            }

            let imgSlide = document.createElement('img');
            slide.append(imgSlide);
            imgSlide.setAttribute('src', `${arrSale[i]?.image}`);

            let info = document.createElement('div');
            slide.append(info);
            info.className = 'info';

            let title = document.createElement('h2');
            info.append(title);
            title.innerHTML = arrSale[i].title;

            let description = document.createElement('h3');
            info.append(description);
            description.innerHTML = arrSale[i].description;
            description.className = 'description';

            let saleText = document.createElement('h3');
            info.append(saleText);
            saleText.innerHTML = 'SALE 20%!!!';
            saleText.className = 'sale_text';

            let priceBlock = document.createElement('div');
            info.append(priceBlock);
            priceBlock.className = 'price_block';

            let price = document.createElement('h3');
            priceBlock.append(price);
            price.innerHTML = `${arrSale[i].price}$`;
            price.className = 'price';

            let priceSale = document.createElement('h3');
            priceBlock.append(priceSale);
            priceSale.innerHTML = (arrSale[i].price * 0.8).toFixed(2) + '$';
            priceSale.className = 'price_sale';

            let buttonAdd = document.createElement('button');
            info.append(buttonAdd);
            buttonAdd.innerHTML = 'Add to cart';
            buttonAdd.className = 'button_add';

            buttonAdd.addEventListener('click', () => {
                let data = {
                    id: arrSale[i].id,
                    max: arrSale[i].rating.count,
                    count: 1
                }
                let name = 'product' + data.id;
                let cookie = getCookie(name);
                if (cookie) {
                    if (cookie.count < cookie.max) {
                        data.count += cookie.count;
                    }
                }
                document.cookie = 'product' + data.id + '=' + JSON.stringify(data) + '; max-age=' + age;
                editCart();
            })
        }

        let arrow = document.createElement('div');
        secondBlock.append(arrow);
        arrow.className = 'arrow';

        let arrowLeft = document.createElement('div');
        arrow.append(arrowLeft);
        arrowLeft.className = 'arrow_left';
        arrowLeft.innerHTML = String.fromCodePoint(0x2039);

        let arrowRight = document.createElement('div');
        arrow.append(arrowRight);
        arrowRight.className = 'arrow_right';
        arrowRight.innerHTML = String.fromCodePoint(0x203A);

        let index = 0;

        arrowLeft.addEventListener('click', function () {
            let windowSize = (document.querySelector('.second_block').offsetWidth);
            if (index > 0) {
                index--;
            }
            else {
                index = 3;
            }
            slider.style.left = -index * windowSize + 'px';

        });

        arrowRight.addEventListener('click', function () {
            let windowSize = document.querySelector('.second_block').offsetWidth;
            if (index < 3) {
                index++;
            }
            else {
                index = 0;
            }
            slider.style.left = -index * windowSize + 'px';

        });

        window.addEventListener('resize', () => {
            let sizeMediaBefore = document.querySelector('.second_block').offsetWidth;
            if (sizeMediaBefore < 1440) {
                let slide = document.querySelectorAll('.slide');
                for (let elem of slide) {
                    elem.style.width = sizeMediaBefore + 'px';
                }
            }
        })

    }
    createShop() {
        let main = this.element;
        let mainContainer = document.createElement('div');
        main.append(mainContainer);
        mainContainer.className = 'main_container';

        let hambMenu = document.querySelector('.hamb_menu');

        let popup = document.createElement('div');
        mainContainer.prepend(popup);
        popup.className = 'popup';

        let navHamb = document.createElement('div');
        navHamb.className = 'nav_hamb';
        popup.append(navHamb);

        let ulNavHamb = document.createElement('ul');
        navHamb.append(ulNavHamb);

        let liFirst = document.createElement('li');
        ulNavHamb.append(liFirst);
        liFirst.innerHTML = 'Home';
        liFirst.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#home';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liSecond = document.createElement('li');
        ulNavHamb.append(liSecond);
        liSecond.innerHTML = 'Shop';
        liSecond.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#shop';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liThird = document.createElement('li');
        ulNavHamb.append(liThird);
        liThird.innerHTML = 'Contacts';
        liThird.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            popup.style.left = '-100%';
            window.scrollTo(0, document.body.scrollHeight);
            document.body.style.overflow = "";
        })

        let shop = document.createElement('div');
        mainContainer.append(shop);
        shop.className = 'shop';

        let shopCont = document.createElement('div');
        shop.append(shopCont);
        shopCont.className = 'shop_container';

        for (let i = 0; i < 20; i++) {
            let card = document.createElement('div');
            shopCont.append(card);
            card.className = 'card';

            let category = document.createElement('h3');
            card.append(category);
            category.innerHTML = this.products[i].category;

            let img = document.createElement('img');
            card.append(img);
            img.setAttribute('src', `${this.products[i].image}`);

            let name = document.createElement('h2');
            card.append(name);
            name.innerHTML = this.products[i].title;

            let priceCont = document.createElement('div');
            card.append(priceCont);
            priceCont.className = 'price_container';

            let price = document.createElement('h4');
            priceCont.append(price);

            if (this.products[i].id === 3 || this.products[i].id === 6 || this.products[i].id === 12 || this.products[i].id === 18) {
                let oldPrice = document.createElement('h4');
                priceCont.append(oldPrice);
                oldPrice.setAttribute('id', 'old_price');
                oldPrice.innerHTML = this.products[i].price + '$';
                price.innerHTML = (this.products[i].price * 0.8).toFixed(2) + '$';

            }
            else price.innerHTML = this.products[i].price + '$';

            let addCont = document.createElement('div');
            card.append(addCont);
            addCont.className = 'add_container';

            let countEdit = document.createElement('div');
            addCont.append(countEdit);
            countEdit.className = 'count_edit';

            let minus = document.createElement('img');
            countEdit.append(minus);
            minus.setAttribute('src', './img/minus.png');

            let number = document.createElement('h5');
            countEdit.append(number);
            number.innerHTML = '1';

            let plus = document.createElement('img');
            countEdit.append(plus);
            plus.setAttribute('src', './img/plus.png');

            let count = 1;

            minus.addEventListener('click', () => {
                if (count > 1) {
                    count -= 1;
                    number.innerHTML = count;
                }
            });

            plus.addEventListener('click', () => {
                if (count < this.products[i].rating.count) {
                    count += 1;
                    number.innerHTML = count;
                }
            });

            let buttonAdd = document.createElement('button');
            addCont.append(buttonAdd);
            buttonAdd.className = 'button_add';
            buttonAdd.innerHTML = 'Add to cart';

            buttonAdd.addEventListener('click', () => {
                let data = {
                    id: this.products[i].id,
                    max: this.products[i].rating.count,
                    count: count
                }
                let name = 'product' + data.id;
                let cookie = getCookie(name);
                if (cookie) {
                    if (cookie.count < cookie.max) {
                        data.count += cookie.count;
                    }
                }
                document.cookie = 'product' + this.products[i].id + '=' + JSON.stringify(data) + '; max-age=' + age;
                editCart();
            })

        }

    }
    createCart() {
        let main = this.element;
        let mainContainer = document.createElement('div');
        main.append(mainContainer);
        mainContainer.className = 'main_container';

        let hambMenu = document.querySelector('.hamb_menu');

        let popup = document.createElement('div');
        mainContainer.prepend(popup);
        popup.className = 'popup';

        let navHamb = document.createElement('div');
        navHamb.className = 'nav_hamb';
        popup.append(navHamb);

        let ulNavHamb = document.createElement('ul');
        navHamb.append(ulNavHamb);

        let liFirst = document.createElement('li');
        ulNavHamb.append(liFirst);
        liFirst.innerHTML = 'Home';
        liFirst.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#home';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liSecond = document.createElement('li');
        ulNavHamb.append(liSecond);
        liSecond.innerHTML = 'Shop';
        liSecond.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            location.hash = '#shop';
            popup.style.left = '-100%';
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
        })

        let liThird = document.createElement('li');
        ulNavHamb.append(liThird);
        liThird.innerHTML = 'Contacts';
        liThird.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            popup.style.left = '-100%';
            window.scrollTo(0, document.body.scrollHeight);
            document.body.style.overflow = "";
        })

        let cartCont = document.createElement('div');
        mainContainer.append(cartCont);
        cartCont.className = 'cart_container';

        let cartCont2 = document.createElement('div');
        cartCont.append(cartCont2);
        cartCont2.className = 'cart_container2';

        if (!document.cookie) {
            let main = document.querySelector('.main');
            main.style.backgroundColor = '#ebebeb';

            let empty = document.createElement('h2');
            cartCont2.append(empty);
            empty.innerHTML = 'The cart is empty :(';
            empty.setAttribute('id', 'empty');

            let buttonShop = document.createElement('button');
            cartCont2.append(buttonShop);
            buttonShop.innerHTML = 'Go to shop';
            buttonShop.className = 'button_go';
            buttonShop.addEventListener('click', () => {
                location.hash = '#shop';
            })
        }
        else {
            if (cartCont2.offsetWidth < 700 || document.querySelector('#empty')) {
                cartCont2.style.flexDirection = 'column';
                cartCont2.style.alignItems = 'center';
            }
            else {
                cartCont2.style.flexDirection = 'row';
                cartCont2.style.alignItems = 'flex-start';
            }

            window.addEventListener('resize', () => {
                if (cartCont2.offsetWidth < 700) {
                    cartCont2.style.flexDirection = 'column';
                    cartCont2.style.alignItems = 'center';
                }
                else {
                    cartCont2.style.flexDirection = 'row';
                    cartCont2.style.alignItems = 'flex-start';
                }
            })
            main.style.backgroundColor = '#ebebeb';

            let yourCart = document.createElement('div');
            cartCont2.append(yourCart);
            yourCart.className = 'left_block_cart';

            let titleCart = document.createElement('h2');
            yourCart.append(titleCart);
            titleCart.innerHTML = 'Your Cart';
            titleCart.className = 'title_cart'

            let totalPrice = 0;
            let index = 0;
            let arrId = [];

            for (let i = 0; i < 20; i++) {
                let name = 'product' + (i + 1);
                let data = getCookie(name);
                if (data) {
                    arrId.push(data.id);
                    index += 1;
                    if (data.id === 3 || data.id === 6 || data.id === 12 || data.id === 18) {
                        totalPrice += this.products[i].price * 0.8 * data.count;
                    }
                    else totalPrice += this.products[i].price * data.count;
                }
            }

            for (let i = 0; i < index; i++) {
                let card = document.createElement('div');
                yourCart.append(card);
                card.className = 'card_cart';

                let img = document.createElement('img');
                card.append(img);
                img.setAttribute('src', `${this.products[arrId[i] - 1].image}`)

                let infoCard = document.createElement('div');
                card.append(infoCard);
                infoCard.className = 'info_card';

                let nameWithDelete = document.createElement('div');
                infoCard.append(nameWithDelete);
                nameWithDelete.className = 'name_with_delete';

                let name = document.createElement('h2');
                nameWithDelete.append(name);
                name.innerHTML = this.products[arrId[i] - 1].title;
                name.className = 'name_in_card';

                let trash = document.createElement('img');
                nameWithDelete.append(trash);
                trash.setAttribute('src', './img/trash.png');
                trash.addEventListener('click', () => {
                    let nameCookie = 'product' + arrId[i];
                    index -= 1;
                    let data = getCookie(nameCookie);
                    if (arrId[i] === 3 || arrId[i] === 6 || arrId[i] === 12 || arrId[i] === 18) {
                        totalPrice -= this.products[arrId[i] - 1].price * 0.8 * data.count;
                    }
                    else totalPrice -= this.products[arrId[i] - 1].price * data.count;
                    document.cookie = nameCookie + '= ' + '' + '; max-age=' + -1;
                    editCart();
                    card.remove();
                    let subtotal = document.querySelector('.subtotal');
                    subtotal.innerHTML = 'Subtotal for ' + index + ' items: ' + totalPrice.toFixed(2) + ' $';

                    if (!document.cookie) {
                        main.style.backgroundColor = '#ebebeb';
                        yourCart.remove();
                        infoCart.remove();

                        cartCont2.style.flexDirection = 'column';
                        cartCont2.style.alignItems = 'center';

                        let empty = document.createElement('h2');
                        cartCont2.append(empty);
                        empty.innerHTML = 'The cart is empty :(';
                        empty.setAttribute('id', 'empty');

                        let buttonShop = document.createElement('button');
                        cartCont2.append(buttonShop);
                        buttonShop.innerHTML = 'Go to shop';
                        buttonShop.className = 'button_go';
                        buttonShop.addEventListener('click', () => {
                            location.hash = '#shop';
                        });
                    }

                });

                let description = document.createElement('p');
                infoCard.append(description);
                description.innerHTML = this.products[arrId[i] - 1].description;
                description.className = 'description_card';

                let priceCont = document.createElement('div');
                infoCard.append(priceCont);
                priceCont.className = 'price_container';

                let price = document.createElement('h4');
                priceCont.append(price);

                if (arrId[i] === 3 || arrId[i] === 6 || arrId[i] === 12 || arrId[i] === 18) {
                    let oldPrice = document.createElement('h4');
                    priceCont.append(oldPrice);
                    oldPrice.setAttribute('id', 'old_price');
                    oldPrice.innerHTML = this.products[arrId[i] - 1].price + '$';
                    price.innerHTML = (this.products[arrId[i] - 1].price * 0.8).toFixed(2) + '$';

                }
                else price.innerHTML = this.products[arrId[i] - 1].price + '$';

                let editWithPrice = document.createElement('div');
                infoCard.append(editWithPrice);
                editWithPrice.className = 'edit_with_price';

                let countEdit = document.createElement('div');
                editWithPrice.append(countEdit);
                countEdit.className = 'count_edit';

                let minus = document.createElement('img');
                countEdit.append(minus);
                minus.setAttribute('src', './img/minus.png');

                let nameCookie = 'product' + arrId[i];
                let cookie = getCookie(nameCookie);
                let count = cookie.count;

                let number = document.createElement('h5');
                countEdit.append(number);
                number.innerHTML = count;

                let plus = document.createElement('img');
                countEdit.append(plus);
                plus.setAttribute('src', './img/plus.png');

                let sumPrice = 0;

                if (arrId[i] === 3 || arrId[i] === 6 || arrId[i] === 12 || arrId[i] === 18) {
                    sumPrice = this.products[arrId[i] - 1].price * 0.8 * count;
                }
                else sumPrice = this.products[arrId[i] - 1].price * count;

                let total = document.createElement('p');
                editWithPrice.append(total);
                total.className = 'total';
                total.innerHTML = 'Total: ' + sumPrice.toFixed(2) + ' $';

                minus.addEventListener('click', () => {
                    if (count > 1) {
                        count -= 1;
                        number.innerHTML = count;
                        let subtotal = document.querySelector('.subtotal');
                        if (arrId[i] === 3 || arrId[i] === 6 || arrId[i] === 12 || arrId[i] === 18) {
                            totalPrice -= this.products[arrId[i] - 1].price * 0.8;
                            sumPrice = this.products[arrId[i] - 1].price * 0.8 * count;
                        }
                        else {
                            totalPrice -= this.products[arrId[i] - 1].price;
                            sumPrice = this.products[arrId[i] - 1].price * count;
                        }
                        subtotal.innerHTML = 'Subtotal for ' + index + ' items: ' + totalPrice.toFixed(2) + ' $';
                        total.innerHTML = 'Total: ' + sumPrice.toFixed(2) + ' $';
                    }
                    let data = {
                        id: arrId[i],
                        max: this.products[arrId[i] - 1].rating.count,
                        count: count
                    }
                    document.cookie = nameCookie + '=' + JSON.stringify(data) + '; max-age=' + age;
                    editCart();

                });

                plus.addEventListener('click', () => {
                    if (count < this.products[arrId[i] - 1].rating.count) {
                        count += 1;
                        number.innerHTML = count;
                        let subtotal = document.querySelector('.subtotal');
                        if (arrId[i] === 3 || arrId[i] === 6 || arrId[i] === 12 || arrId[i] === 18) {
                            totalPrice += this.products[arrId[i] - 1].price * 0.8;
                            sumPrice = this.products[arrId[i] - 1].price * 0.8 * count;
                        }
                        else {
                            totalPrice += this.products[arrId[i] - 1].price;
                            sumPrice = this.products[arrId[i] - 1].price * count;
                        }
                        subtotal.innerHTML = 'Subtotal for ' + index + ' items: ' + totalPrice.toFixed(2) + ' $';
                        total.innerHTML = 'Total: ' + sumPrice.toFixed(2) + ' $';
                    }
                    let data = {
                        id: arrId[i],
                        max: this.products[arrId[i] - 1].rating.count,
                        count: count
                    }
                    document.cookie = nameCookie + '=' + JSON.stringify(data) + '; max-age=' + age;
                    editCart();
                });


            }

            let infoCart = document.createElement('div');
            cartCont2.append(infoCart);
            infoCart.className = 'right_block_cart';

            let subtotal = document.createElement('p');
            infoCart.append(subtotal);
            subtotal.innerHTML = 'Subtotal for ' + index + ' items: ' + totalPrice.toFixed(2) + ' $';
            subtotal.className = 'subtotal';

            let buttonClear = document.createElement('button');
            infoCart.append(buttonClear);
            buttonClear.innerHTML = 'Clear cart';
            buttonClear.className = 'button_clear';
            buttonClear.addEventListener('click', () => {
                main.style.backgroundColor = '#ebebeb';
                deleteAll();
                yourCart.remove();
                infoCart.remove();
                let empty = document.createElement('h2');
                cartCont2.append(empty);
                empty.innerHTML = 'The cart is empty :(';
                empty.setAttribute('id', 'empty');

                cartCont2.style.flexDirection = 'column';
                cartCont2.style.alignItems = 'center';

                let buttonShop = document.createElement('button');
                cartCont2.append(buttonShop);
                buttonShop.innerHTML = 'Go to shop';
                buttonShop.className = 'button_go';
                buttonShop.addEventListener('click', () => {
                    location.hash = '#shop';
                })

                let countCart = document.querySelector('.count_cart');
                countCart.style.display = 'none';
                let priceCart = document.querySelector('.price_cart');
                priceCart.style.display = 'none';

            });

        }

    }
    init() {
        console.log('main init')
        this.products = getData()
        this.create();
        return this.element;
    }
}
const main = new Main();
export { main };
