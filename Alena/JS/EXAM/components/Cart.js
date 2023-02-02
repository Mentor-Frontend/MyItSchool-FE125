import { getCookie } from "../index.js";
import { getData } from "../index.js";

export function editCart() {
    let products = getData(); 
    let count = 0;
    let price = 0;
    for (let i = 0; i < 20; i++) {
        let name = 'product' + (i+1);
        let data = getCookie(name);
        if (data) {
            count += data.count;
            if(data.id === 3 || data.id === 6 || data.id === 12 || data.id === 18){
                price += (products[i].price * 0.8) * data.count;
            }
            else {
                price += products[i].price * data.count;
            }
        }
    }
    let countCart = document.querySelector('.count_cart');
    countCart.style.display = 'flex';
    if(count > 99){
        countCart.style.alignItems = "center"
        countCart.style.fontSize = '16px';
    }
    countCart.innerHTML = count;  
    let priceCart = document.querySelector('.price_cart');
    priceCart.style.display = 'block';
    priceCart.innerHTML = price.toFixed(2) + '$';   
}

export function deleteAll(){
    for (let i = 0; i < 20; i++) {
        let name = 'product' + (i+1);
        let data = getCookie(name);
        if (data) {
          document.cookie = name + '= ' + '' + '; max-age=' + -1;
        }
    }
}
