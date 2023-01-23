import { header,nav,main,footer } from "../components/Main.js";
import changeLocation from "./RouterChange.js";
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
    
    item_box_a.setAttribute('href', (`#/product/${obj.id}`)   );
    item_box_a.onclick = changeLocation.bind(this, '/product/', obj.id)
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
text_category.classList.add('text_category');
category.appendChild(text_category);
text_category.innerHTML='another category';
App.element.appendChild(category);

App.element.appendChild(main);

App.element.appendChild(footer);
App.render();


function SetCookie(cartData) {
  let totalSum=0;
  let totalCount=0;
  let age=60*60*60;
  if(cartData !== null){
    for(let items in cartData){
      if (cartData[items]!==null) { 
        totalSum=totalSum+cartData[items][3]
        totalCount=totalCount+cartData[items][2]
      }
    }
  }

   document.cookie=`cart_count=${totalCount}; max-age=`+age;
  let cart_count = document.querySelector('.cart_count');
  cart_count.innerHTML=totalCount;  
  document.cookie=`cart_sum=${totalSum}; max-age=`+age; 
  let cart_sum = document.querySelector('.cart_sum');
  cart_sum.innerHTML=totalSum;   
  
}

function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
  if (o===null) return false;
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}

function addToCart(e){
  this.disabled = true; 
  let cartData = getCartData() || [],  
      parentBox = this.parentNode, 
      itemId = this.getAttribute('data-id'),
      itemTitle = parentBox.querySelector('.title_box').innerHTML,
      itemPrice = Number(parentBox.querySelector('.price_box').innerHTML),
      itemSum = 0;
      let isId=false;
       if(cartData !== null){
       for(let items in cartData){
           if (cartData[items]!==null) { 
           if (cartData[items] [4] === itemId) {
               cartData[items][2] += 1;
               cartData[items][3] = Number((cartData[items][2]*cartData[items][1]).toFixed(2)) ;
               isId=true;
          
        }  }
        }
        }

        if (isId===false) {
          cartData.push([itemTitle, itemPrice, 1, itemPrice, itemId])
        }

        if(!setCartData(cartData)){ 
          this.disabled = false; 
          SetCookie(cartData);
         }
 return false;
}

window.addEventListener('load', ()=>{
  console.log("load");
  if (!getCookie('cart_count')) localStorage.removeItem('cart');
  if (getCookie('cart_count')) {
    let count =Number(getCookie('cart_count'));
    let cart_count = document.querySelector('.cart_count');
    cart_count.innerHTML=count;  

  }
  if (getCookie('cart_sum')) {
    let count =Number(getCookie('cart_sum'));
    let cart_sum = document.querySelector('.cart_sum');
    cart_sum.innerHTML=count;  
  }
})

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export { addToCart,getCartData,setCartData,SetCookie }