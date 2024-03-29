import changeLocation from "../js/RouterChange.js";

export class mHeader {
    constructor(){
        this.element="";
    }
    create() {
        let elem = document.createElement('header');
        elem.setAttribute("class", "header");
        this.element=elem;  
     }
     init() {
        this.create();
        return this.element;
     }  
}

export class mNav {
    constructor(){
        this.element="";
    }
    create() {
        let elem = document.createElement("nav");
        elem.setAttribute("class", "nav");
        this.element=elem;
     }
     init() {
        this.create();
        return this.element;
     }  
}

export class mMain {
    constructor(){
        this.element="";
    }
    create() {
        let elem = document.createElement('main');
        elem.setAttribute("class", "main");
        elem.setAttribute('id',"main");
        this.element=elem;
     }

     init() {
        this.create();
        return this.element;
     }  
}


export class mFooter {
    constructor(){
        this.element="";
    }
    create() {
        let elem = document.createElement('footer');
        elem.setAttribute("class", "footer");
        this.element=elem;
     }

     init() {
        this.create();
        return this.element;
     }  
}



let header=  new mHeader().init();
let nav=  new mNav().init();
let main=  new mMain().init();
let footer=  new mFooter().init();

let logo = document.createElement('div'); 
logo.classList.add('logo');
let logo_img = document.createElement('img'); 
logo_img.src='./img/logo.png';
logo.appendChild(logo_img);
let logo2 = document.createElement('div'); 
logo2.classList.add('logo');
let logo_img2 = document.createElement('img'); 
logo_img2.src='./img/logo.png';
logo2.appendChild(logo_img2);


let ul=document.createElement('ul');
ul.classList.add('ul');

let li_home = document.createElement('li'); 
let a_home = document.createElement('a'); a_home.setAttribute('href', 'index.html');  a_home.innerHTML='Home'; 
li_home.appendChild(a_home);

let li_shop = document.createElement('li'); 
let a_shop = document.createElement('a'); a_shop.setAttribute('href', '#'); a_shop.innerHTML='Shop';  
li_shop.appendChild(a_shop);

let li_contacts = document.createElement('li'); 
let a_contacts = document.createElement('a'); a_contacts.setAttribute('href', '#'); a_contacts.innerHTML='Contacts';  
li_contacts.appendChild(a_contacts);

let cart = document.createElement('div'); 
cart.classList.add('cart');
let cart_a = document.createElement('a');
    
cart_a.setAttribute('href', (`#cart/`)   );
// cart_a.setAttribute('href','#cart');
cart_a.onclick = changeLocation.bind(this, '#cart/')

let cart_img = document.createElement('img'); 
cart_img.src='./img/cart.png';
let cart_count = document.createElement('div'); 
cart_count.classList.add('cart_count');
cart_count.innerHTML='0';
let cart_sum = document.createElement('div'); 
cart_sum.classList.add('cart_sum');
cart_sum.innerHTML='0';

cart_a.appendChild(cart_img);
cart.appendChild(cart_a);
cart_a.appendChild(cart_count);
cart_a.appendChild(cart_sum);
ul.appendChild(li_home);
ul.appendChild(li_shop);
ul.appendChild(li_contacts);
nav.appendChild(logo)
nav.appendChild(ul);
nav.appendChild(cart);

header.appendChild(nav);       
document.body.appendChild(header);

let wrapperFooter = document.createElement('div');
wrapperFooter.classList.add('wrapperFooter')
let text_wrapperFooter = document.createElement("span");
text_wrapperFooter.classList.add('text_wrapperFooter');
text_wrapperFooter.innerHTML='This is footer';
wrapperFooter.appendChild(logo2);
footer.appendChild(wrapperFooter);
wrapperFooter.appendChild(text_wrapperFooter);

export { header,nav,main,footer }
