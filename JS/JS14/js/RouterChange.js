import { addToCart,getCartData,setCartData,SetCookie } from "./index.js";


export default function changeLocation(location, idProduct) {
    switch (location) {
        case '/product/':
        SetProductDocum(idProduct);
           break;
        case '#cart/':
           SetCart();
        break;
    }
}


function SetProductDocum(idProduct) {

    const text_category = document.querySelector('.text_category')
    const main = document.querySelector('#main')
    main.innerHTML = ''
    const Product = JSON.parse(
    localStorage.getItem('products')
    ).find((el) => el.id === idProduct)
    let nameProduct =Product.title;
    text_category.innerText = `${nameProduct}`

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapperProduct');

    let img = document.createElement('img');
    img.classList.add('Product_img');
    img.src=Product.image;
    let d = document.createElement('div');
    d.classList.add('d');
    d.appendChild(img);

    let text_box = document.createElement('div');
    text_box.classList.add('text_boxProduct');

    let p = document.createElement('p');
    p.innerHTML="Price: ";
    let span = document.createElement('span');
    span.innerHTML=Product.price;
    span.classList.add('price_box');
    p.appendChild(span);

    let h5=document.createElement('h4');
    h5.innerHTML= Product.description;

    let h4=document.createElement('h5');
    h4.innerHTML="Category:  "+Product.category;

    let rating=document.createElement('h5');
    rating.innerHTML="Rating:  "+Product.rating.rate;  

    let button = document.createElement('button');
    button.classList.add('add_item');
    button.setAttribute("data-id",Product.id)
    button.innerHTML='Add to cart';
    button.onclick=addToCart;
    button.style.display = "block";
    
    let title_box = document.createElement('h4');
    title_box.classList.add('title_box')
    title_box.innerHTML=Product.title; 

    wrapper.appendChild(d);
    text_box.appendChild(title_box);  
    text_box.appendChild(h5);
    text_box.appendChild(p);
    text_box.appendChild(h4);
    text_box.appendChild(rating);
    text_box.appendChild(button);
    wrapper.appendChild(text_box);
    main.appendChild(wrapper);

}

function SetCart() {
    const text_category = document.querySelector('.text_category')
    const main = document.querySelector('#main')
    main.innerHTML = ''
    let Products = getCartData()
    text_category.innerText = `Cart`;

    let cartData =getCartData(), 
        totalItems ="",
        totalCount=0,
        totalSum=0;
          if(cartData !== null){
              totalItems = '<table class="table"><thead><th>Наименование</th><th>Цена</th><th>Кол-во</th><th>Сумма</th><th>Удалить</th></thead>';
              for(let items in cartData){
      
               if (cartData[items]!==null) {  
              totalItems += '<tr>';
              for(let i = 0; i < cartData[items].length; i++){
              if (i==3) {
              let sum= Number((cartData[items][2]*cartData[items][1]).toFixed(2));
              totalSum+=sum
              totalItems += '<th>' + sum + '</th>';
              }
             else {
              if (i==4) {
              let id=(cartData[items][4]);
              totalItems +='<th>' + `<button class="buttonCartDelProduct" data-id=${id}` + '>X</button>' + '</th>'; 
              }
             else {
              if (i==2) totalCount+=cartData[items][i]  
              totalItems += '<th>' + cartData[items][i] + '</th>';
              }
              }
              }
              totalItems += '</tr>';
              }
              }

  totalSum=totalSum.toFixed(2)  
  totalItems += '<tr>'+'<th>ИТОГО</th>'+'<th></th>'+'<th>'+totalCount+'</th>'+'<th>'+totalSum+'</th>'+'<th></th>'+'</tr>';
  totalItems += '</table>';
  main.innerHTML = totalItems;
  } else {
   main.innerHTML = 'В корзине пусто!';
  }

  var buttons = document.querySelectorAll('.buttonCartDelProduct'),
  index, button;
  for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    buttons[index].addEventListener('click', DelToCart);
  }
}

function DelToCart(e){
  let cartData = getCartData() || [],  
     parentBox = this.parentNode, 
     itemId = this.getAttribute('data-id');
 
     if(cartData !== null){
       for(let items in cartData){
         if (cartData[items]!==null) { 
           if (cartData[items] [4] === itemId) {
             cartData.splice(items, 1);
           }         
           }
       }
     }
     setCartData(cartData) 
     SetCookie(cartData)
     changeLocation('#cart/')
return false;
}