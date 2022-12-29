'use strict';

let html = document.querySelector('html');

html.setAttribute('lang', 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';

document.head.prepend(title);
document.head.prepend(meta);


let style = document.createElement('style');
style.innerHTML = `
.arvo {
    font-family: Arvo; 
    font-size: 36px; 
    text-align: center; 
    margin-bottom: 10px;
}

.openSans {
    font-family: OpenSans; 
    font-size: 12px; 
    color: #9FA3A7; 
    margin-bottom: 52px; 
    text-align: center;
}

.divSuggest {
    width: 400px; 
    height: 480px; 
    text-align: center; 
    
    border: 1px solid #E8E9ED;
    border-radius: 10px 0 0 10px;
}

.container {
    padding: 0 95px 0 95px;
    display: grid; 
    align-content: center;
}

.name {
    font-family: Montserrat; 
    font-size: 12px; 
    color: #9FA3A7;
}

.button {
    font-family: Montserrat;
    font-size: 12px;
    border: 3px solid #FFC80A;
    width: 147px; 
    height: 46px;
    border-radius: 30px;
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
}

a {
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}

.button:hover {
    background-color: yellow;
}

div {
    display: flex;
    justify-content: center;
}



.divForBlock2 .divSuggest .name {
    color: #FFC80A;
}

.divForBlock2 .arvo,
.divForBlock2 .openSans,
.divForBlock2 a {
    color: white;
}

.divForBlock2 a:hover {
    color: black;
}

div .divForBlock2 .divSuggest {
    
    border-left: none;
    border: 1px solid #8F75BE;
    border-radius: 0 10px 10px 0;
    background-color: #8F75BE;
}
`
document.head.append(style);

let p1 = document.createElement('p');
p1.innerHTML = 'Choose Your Option';
p1.classList.add('arvo');
document.body.append(p1);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('openSans');
document.body.append(p2);

let div = document.createElement('div');
div.innerHTML = (`

<div class = divSuggest>
<div class = container>
<p class = name>FREELANCER</p>
<p class = arvo>Initially designed to </p>
<p class = openSans>But I must explain to you how all this mistaken idea of denouncing</p>
<div class = button><a href = '#'>START HERE</a></div>
</div>
</div>`)
document.body.append(div);

let div2 = div.cloneNode(true);
div2.querySelector('.name').innerHTML = 'STUDIO';
div2.classList.add('divForBlock2');
div.append(div2);