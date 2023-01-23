let html = document.querySelector("html");
html.setAttribute("lang", "en");

let metaUtf8 = document.createElement("meta");
metaUtf8.setAttribute("charset", "UTF-8");
document.head.appendChild(metaUtf8);

let title = document.createElement("title");
title.innerHTML = "JavaScript";
document.head.appendChild(title);

// Шрифты
let firstLink = document.createElement("link");
firstLink.setAttribute("rel", "preconnect");
firstLink.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(firstLink);

let secondLink = document.createElement("link");
secondLink.setAttribute("rel", "preconnect");
secondLink.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(secondLink);

let thirdLink = document.createElement("link");
thirdLink.setAttribute("rel", "stylesheet");
thirdLink.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap"
);
document.head.appendChild(thirdLink);

//-------------------------------------------------

let divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.appendChild(divContainer);

// Header
let divHeader = document.createElement("div");
divHeader.classList.add("header");
divContainer.appendChild(divHeader);

let Text_h1 = document.createElement("h1");
Text_h1.classList.add("text_name");
Text_h1.innerHTML = "Choose Your Option";
divHeader.appendChild(Text_h1);

let Text_p = document.createElement("p");
Text_p.classList.add("text_undername");
Text_p.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing ";
divHeader.appendChild(Text_p);

// MainBlock
let divMainBlock = document.createElement("div");
divMainBlock.classList.add("main_block");
divContainer.appendChild(divMainBlock);

// LeftBlock
let divLeftBlock = document.createElement("div");
divLeftBlock.classList.add("left_block");
divMainBlock.appendChild(divLeftBlock);

let LB_name = document.createElement("p");
LB_name.classList.add("LB_name");
LB_name.innerHTML = "FREELANCER";
divLeftBlock.appendChild(LB_name);

let LB_h1 = document.createElement("h1");
LB_h1.classList.add("LB_h1");
LB_h1.innerHTML = "Initially designed to";
divLeftBlock.appendChild(LB_h1);

let LB_text = document.createElement("p");
LB_text.classList.add("LB_p");
LB_text.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing";
divLeftBlock.appendChild(LB_text);

let LB_button = document.createElement("button");
LB_button.classList.add("LB_button");
LB_button.innerHTML = "START HERE";
divLeftBlock.appendChild(LB_button);

// RightBlock
let divRightBlock = document.createElement("div");
divRightBlock.classList.add("right_block");
divMainBlock.appendChild(divRightBlock);

let RB_name = document.createElement("p");
RB_name.classList.add("RB_name");
RB_name.innerHTML = "STUDIO";
divRightBlock.appendChild(RB_name);

let RB_h1 = document.createElement("h1");
RB_h1.classList.add("RB_h1");
RB_h1.innerHTML = "Initially designed to";
divRightBlock.appendChild(RB_h1);

let RB_text = document.createElement("p");
RB_text.classList.add("RB_p");
RB_text.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing";
divRightBlock.appendChild(RB_text);

let RB_button = document.createElement("button");
RB_button.classList.add("RB_button");
RB_button.innerHTML = "START HERE";
divRightBlock.appendChild(RB_button);


// Style
let style = document.createElement("style");
document.head.appendChild(style);

style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}

.container {
    width: 1280px;
    height: 880px;
    margin: 0 auto;
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 55px;
    margin-top: 60px;
}

.text_name {
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    color: #212121;
    margin-bottom: 10px;
}

.text_undername {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
}

.main_block{
    display: flex;
    margin: 0 auto;
    max-width: 800px;
    height: 480px;
    border: 2px solid #E8E9ED;
}

.left_block{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 80px 95px;
}

.LB_name{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    margin-bottom: 19px;
}

.LB_h1{
    font-family: Arvo;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    color: #212121;
    margin-bottom: 25px;
}

.LB_p{
    font-family: Open Sans;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #9FA3A7;
}

.LB_button{
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    text-align: center;
    color: #212121;

    display: block;
    width: 145px;
    height: 45px;
    border-radius: 60px;
    border: 3px solid #FFC80A;
    background-color: Transparent;
    margin-top: 52px;
    cursor: pointer;
}


.right_block{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #8F75BE;
    padding: 80px 95px;
}

.RB_name{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #FFC80A;
    margin-bottom: 19px;
}

.RB_h1{
    font-family: Arvo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    color: #FFFFFF;
    margin-bottom: 25px;
}

.RB_p{
    font-family: Open Sans;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}

.RB_button{
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-align: center;
    color: #FFFFFF;

    display: block;
    width: 145px;
    height: 45px;
    border-radius: 60px;
    border: 3px solid #FFC80A;
    margin-top: 52px;
    background-color: #8F75BE;
    cursor: pointer;
}
`;
