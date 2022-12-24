"use strict";
let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let metaUTF8 = document.createElement('meta');
document.head.append(metaUTF8);
metaUTF8.setAttribute('charset', 'UTF-8');

let secondMeta = document.createElement('meta');
document.head.append(secondMeta);
secondMeta.setAttribute('http-equiv', 'X-UA-Compatible');
secondMeta.setAttribute('content', 'IE=edge');

let thirdMeta = document.createElement('meta');
document.head.append(thirdMeta);
thirdMeta.setAttribute('name', 'viewport');
thirdMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');

let title = document.createElement('title');
document.head.append(title);
title.innerHTML = 'Document';

let firstLink = document.createElement('link');
document.head.append(firstLink);
firstLink.setAttribute('rel', 'preconnect');
firstLink.setAttribute('href', 'https://fonts.googleapis.com');

let secondLink = document.createElement('link');
document.head.append(secondLink);
secondLink.setAttribute('rel', 'preconnect');
secondLink.setAttribute('href', 'https://fonts.gstatic.com');

let fonts = document.createElement('link');
document.head.append(fonts);
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
fonts.setAttribute('rel', 'stylesheet');

let mainDiv = document.createElement('div');
document.body.append(mainDiv);
mainDiv.className = 'main_block';

let topBlock = document.createElement('div');
mainDiv.append(topBlock);
topBlock.className = 'top_block';

let h1 = document.createElement('h1');
topBlock.append(h1);
h1.className = 'h1'
h1.innerHTML = 'Choose Your Option';

let pInTopBlock = document.createElement('p');
topBlock.append(pInTopBlock);
pInTopBlock.className = 'p_in_top';
pInTopBlock.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let bottomBlock = document.createElement('div');
mainDiv.append(bottomBlock);
bottomBlock.className = 'bottom_block';

let leftBlock = document.createElement('div');
bottomBlock.append(leftBlock);
leftBlock.className = 'left_block';

let h3InLeftBlock = document.createElement('h3');
leftBlock.append(h3InLeftBlock);
h3InLeftBlock.innerHTML = 'FREELANCER';
h3InLeftBlock.className = 'h3_in_left_block';

let h2InLeftBlock = document.createElement('h2');
leftBlock.append(h2InLeftBlock);
h2InLeftBlock.innerHTML = 'Initially designed to ';
h2InLeftBlock.className = 'h2_in_left_block';

let pInLeftBlock = document.createElement('p');
leftBlock.append(pInLeftBlock);
pInLeftBlock.className = 'p_in_left';
pInLeftBlock.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let leftButton = document.createElement('div');
leftBlock.append(leftButton);
leftButton.className = 'left_button';

let textInLeftButton = document.createElement('p');
leftButton.append(textInLeftButton);
textInLeftButton.className = 'text_in_left_button';
textInLeftButton.innerHTML = 'START HERE';

let rightBlock = document.createElement('div');
bottomBlock.append(rightBlock);
rightBlock.className = 'right_block';

let h3InRightBlock = document.createElement('h3');
rightBlock.append(h3InRightBlock);
h3InRightBlock.innerHTML = 'STUDIO';
h3InRightBlock.className = 'h3_in_right_block';

let h2InRightBlock = document.createElement('h2');
rightBlock.append(h2InRightBlock);
h2InRightBlock.innerHTML = 'Initially designed to ';
h2InRightBlock.className = 'h2_in_right_block';

let pInRightBlock = document.createElement('p');
rightBlock.append(pInRightBlock);
pInRightBlock.className = 'p_in_right';
pInRightBlock.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let rightButton = document.createElement('div');
rightBlock.append(rightButton);
rightButton.className = 'right_button';

let textInRightButton = document.createElement('p');
rightButton.append(textInRightButton);
textInRightButton.className = 'text_in_right_button';
textInRightButton.innerHTML = 'START HERE';

let style = document.createElement('style');
document.head.append(style);
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}
.main_block{
    display: flex;
    flex-direction: column; 
    align-items: center;
}
.top_block {
    margin-top: 122px;
    text-align: center;
}
.h1 {
    font-family: 'Arvo';
    font-size: 36px;
    line-height: 48px;
    color: #212121;
    font-weight: 400;
}
.p_in_top{
    font-family: Open Sans;
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
}
.bottom_block {
    display: flex;
    flex-direction: row; 
    align-items: center;
    margin-top: 55px;
}
.left_block,
.right_block{
    text-align: center;
    width: 401px;
    height: 480px;
}
.right_block{
    background-color: #8F75BE;
}
.h3_in_left_block,
.h3_in_right_block {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 2.4x; 
    margin-top: 81px;
}
.h3_in_left_block{
    color: #9FA3A7;
}
.h3_in_right_block{
    color: #FFC80A;
}
.h2_in_left_block,
.h2_in_right_block{
    font-family: Arvo;
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    margin-top: 19px;
    margin-left: 95px;
    width: 210px;
}
.h2_in_right_block{
    color: white;
}
.h2_in_left_block{
    color: #212121;
}
.p_in_left,
.p_in_right{
    font-family: Open Sans;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    margin-top: 25px;
    margin-left: 95px;
    width: 210px;
}
.p_in_left{
    color: #9FA3A7;
}
.p_in_right{
    color: white;
}
.left_button,
.right_button{
    margin-top: 64.5px;
    margin-left: 126.5px;
    border: 3px solid #FFC80A;
    width: 147px;
    height: 46px;
    border-radius: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text_in_left_button,
.text_in_right_button{
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-align: center;    
}
.text_in_left_button{
    color: #212121;
}
.text_in_right_button{
    color: white;
}
`;
