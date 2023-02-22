"use strict";

// head
let title = document.createElement('title');

title.innerHTML = 'Freelance';

let metaUTF8= document.createElement('meta');
metaUTF8.setAttribute('charset','UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUTF8);
// head end

// body
let h1 = document.createElement('h1');
h1.innerHTML='Choose Your Option'
document.body.appendChild(h1)


let p1 = document.createElement('p');
p1.innerHTML='But I must explain to you how all this mistaken idea of denouncing '
document.body.appendChild(p1)
p1.classList.add('intro-text')

let div1 = document.createElement('div');
div1.innerHTML='<div class=left><h3>FREELANCER</h3> <h2>Initially <br> designed to </h2> <p>But I must explain to you how all this <br> mistaken idea of denouncing </p> <button>START HERE</button></div> <div class=right><h3>STUDIO</h3> <h2>Initially <br> designed to </h2> <p>But I must explain to you how all this <br> mistaken idea of denouncing </p> <button>START HERE</button></div>'
document.body.appendChild(div1)
div1.classList.add('container')



