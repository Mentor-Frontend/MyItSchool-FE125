let html = document.querySelector('html');
html.setAttribute('lang', 'ru');
let body = document.querySelector('body');
let title = document.createElement('title');
title.innerHTML = 'Первое задание по DOM';
let charUTF = document.createElement('meta');
charUTF.setAttribute('charset', 'UTF-8');
document.head.appendChild(title);
document.head.appendChild(charUTF);


let header = document.createElement('header');
body.appendChild(header);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
header.appendChild(h1);

let headerP = document.createElement('p');
headerP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
header.appendChild(headerP);

let section = document.createElement('section');
section.classList.add('change-direction');
body.appendChild(section);

let div = document.createElement('div');
div.classList.add('freelancer');
section.appendChild(div);

let freelancerH3 = document.createElement('h3');
freelancerH3.innerHTML = 'FREELANCER';
div.appendChild(freelancerH3);

let freelancerH2 = document.createElement('h2');
freelancerH2.innerHTML = 'Initially designed to';
div.appendChild(freelancerH2);

let freelancerP = document.createElement('p');
freelancerP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div.appendChild(freelancerP);

let freelancerButton = document.createElement('button');
freelancerButton.innerHTML = 'start here';
div.appendChild(freelancerButton);

let studioDiv = document.createElement('div');
studioDiv.classList.add('studio');
section.appendChild(studioDiv);

let studioH3 = document.createElement('h3');
studioH3.innerHTML = 'studio';
studioDiv.appendChild(studioH3);

let studioH2 = document.createElement('h2');
studioH2.innerHTML = 'Initially designed to';
studioDiv.appendChild(studioH2);

let studioP = document.createElement('p');
studioP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
studioDiv.appendChild(studioP);

let studioButton = document.createElement('button');
studioButton.innerHTML = 'start here';
studioDiv.appendChild(studioButton);

let style = document.createElement('style');
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}

h1 {
    margin-top: 50px;
    font-family: 'Arvo';
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    color: #212121;
}

header p {
    font-family: 'OpenSans';
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;
    margin-bottom: 55px;
}

.change-direction {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.change-direction .freelancer {
    width: 400px;
    height: 480px;
    border: 1px solid #E8E9ED;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.freelancer h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    margin-top: 81px;
}

.freelancer h2 {
    font-family: 'Arvo';
    width: 210px;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #212121;
    margin-top: 19px;
}

.freelancer p {
    margin-top: 25px;
    font-family: 'OpenSans';
    width: 210px;
    font-size: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #9FA3A7;
}

.freelancer button {
    margin-top: 64px;
    width: 147px;
    height: 46px;
    border: 3px solid #FFC80A;
    border-radius: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-align: center;
    color: #212121;
    background-color: #fff;
    text-transform: uppercase;
}

.change-direction .studio {
    width: 400px;
    height: 480px;
    background-color: #8F75BE;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.studio h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFC80A;
    margin-top: 81px;
    text-transform: uppercase;
}

.studio h2 {
    font-family: 'Arvo';
    width: 210px;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: 19px;
}

.studio p {
    margin-top: 25px;
    font-family: 'OpenSans';
    width: 210px;
    font-size: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
}
.studio button {
    margin-top: 64px;
    width: 147px;
    height: 46px;
    border: 3px solid #FFC80A;
    border-radius: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-align: center;
    color: #fff;
    background-color: #8F75BE;;
    text-transform: uppercase;
} 
`
document.head.appendChild(style);
