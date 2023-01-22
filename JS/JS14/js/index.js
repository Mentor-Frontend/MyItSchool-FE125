import { header, nav, main, footer } from "../components/Main.js";
import changeLocation from "../rotuterChange.js";

// let app=document.getElementById('app');
import App  from '../components/App.js';




function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}

 
function div_AddProduct(obj) {
    let item_box = document.createElement('div');
    item_box.classList.add('item_box');

    
    let item_box_a = document.createElement('a');
    item_box_a.setAttribute('href', (`#/product/${obj.id}`));
    item_box_a.onclick = changeLocation.bind(this, '/product/', obj.id)
    console.log(window.location)

    let img = document.createElement('img');
    img.src=obj.image;
    
    let h4 = document.createElement('h4');
    h4.classList.add('title_box')
    h4.innerHTML=obj.title;


    let text_box = document.createElement('div');
    text_box.classList.add('text_box');

    let p = document.createElement('p');
   
    p.innerHTML="Price: ";
    let span = document.createElement('span');
    span.innerHTML=obj.price;
    span.classList.add('price_box');
    p.appendChild(span);

    let button = document.createElement('button');
    button.classList.add('add_item');
    button.setAttribute("data-id",obj.id)
    button.innerHTML='Add to cart';
    button.onclick=addToCart;
   
    item_box_a.appendChild(img);
    item_box.appendChild(item_box_a);
    text_box.appendChild(h4);
    text_box.appendChild(p);
    text_box.appendChild(button);
    item_box.appendChild(text_box);
    return item_box;
}

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
if (App.getData!=null) {
 
    App.getData.forEach(function(product_) {
     let item_box=div_AddProduct(product_);
      wrapper.appendChild(item_box);  
})
}

main.appendChild(wrapper);

let category = document.createElement('div');
category.classList.add('category')

 
let text_category = document.createElement("span");
category.appendChild(text_category);
text_category.innerHTML='another category';
App.element.appendChild(category);

App.element.appendChild(main);

App.element.appendChild(footer);
App.render();


function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
  if (o===null) return false;

  localStorage.setItem('cart', JSON.stringify(o));
  
  if (!getCookie('cart_count')) {
  let age = 60*60, count=1;
  document.cookie=`cart_count=${count}; max-age=`+age;
  }
  else {
    console.log(getCookie('cart_count'));
    let count =Number(getCookie('cart_count'));
    let age = 60*60;
    document.cookie=`cart_count=${count++}; max-age=`+age; 
  }
  return false;
}

function addToCart(e){
  this.disabled = true; 
  let cartData = getCartData() || [], 
      parentBox = this.parentNode, 
      itemId = this.getAttribute('data-id'),
      itemTitle = parentBox.querySelector('.title_box').innerHTML,
      itemPrice = parentBox.querySelector('.price_box').innerHTML;

  if(cartData.hasOwnProperty(itemId)){ 
    cartData[itemId][2] += 1;
   } else { 
    if (!this.parentNode || null) return false;
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ 
    this.disabled = false; 
  }
 return false;
}


// // addEvent(d.getElementById('checkout'), 'click', openCart);
// // addEvent(d.getElementById('clear_cart'), 'click', function(e){
// // localStorage.removeItem('cart');
// // cartCont.innerHTML = 'Корзина очишена.';
// // });


document.addEventListener('load', ()=>{
  !getCookie('cart_count') && localStorage.removeItem('cart');
})

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// (function () {
//   function init() {
//       var router = new Router([
//           new Route(App.element,'index', 'index.html', true),
//           new Route(App.element, 'cart', 'cart.html'),            
//           new Route(App.element, 'product', 'product.html')
//       ]);
//   }
//   init();
// }());


