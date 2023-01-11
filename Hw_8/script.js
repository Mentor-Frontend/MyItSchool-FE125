let html = document.querySelector("html");
html.setAttribute("lang", "ru");
let head = document.querySelector("head");
let body = document.querySelector("body");
let meta = document.createElement("meta");
meta.setAttribute("charset", "UTF-8");
meta.setAttribute("http-equiv", "X-UA-Compatible");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
let title = document.createElement("title");
title.innerHTML = "HW-8";
head.appendChild(meta);
head.appendChild(title);
let header = document.createElement("header");
body.appendChild(header);
let h1 = document.createElement("h1");
h1.innerHTML = "Choose Your Option";
header.appendChild(h1);
let headerP = document.createElement("p");

headerP.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing ";
header.appendChild(headerP);
let style = document.createElement("style");
style.innerHTML = `* {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #212121;
    
  }
  header p {
    font-family: 'OpenSans';
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;
    margin-top: 10px;
    margin-bottom: 55px;
  }
  .common {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  .freelancer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #e8e9ed;
    padding-top: 81px
  }
  .freelancer p {
    font-family: "Montserrat";
    font-weight: 800;
    font-size: 12px;
    line-height: 14.6px;
    letter-spacing: 2.4px;
    color: #9fa3a7;
  }
  .freelancer h2 {
    font-family: "Arvo";
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    letter-spacing: 0px;
    padding-top: 19px;
    color: #212121;
  }
  #but {
    font-family: "OpenSans";
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    padding-top: 25px;
    max-width: 210px;
    color: #9fa3a7;
  }
  .freelancer button {
    font-family: "Montserrat";
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #212121;
    height: 46px;
    width: 147px;
    left: 14.5px;
    top: 8.5px;
    border: 3px solid #FFC80A;
    border-radius: 15px;
    background-color: #fff;
    margin-top: 65px;
    margin-bottom: 93px;
  }
  .studio {
    display: flex;
    flex-direction: column;
    padding-top: 81px;
    background-color: #8f75be;
    align-items: center;
  }
  .studio p {
      font-family: "Montserrat";
      font-weight: 800;
      font-size: 12px;
      line-height: 14.6px;
      letter-spacing: 2.4px;
      color: #FFC80A;
      ;
    }
    .studio h2 {
      font-family: "Arvo";
      font-size: 36px;
      font-weight: 400;
      line-height: 46px;
      letter-spacing: 0px;
      padding-top: 19px;
      color: #FFFFFF;
    }
    .studio button {
      font-family: "Montserrat";
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 2.4px;
      color: #fff;
      height: 46px;
      width: 147px;
      left: 14.5px;
      top: 8.5px;
      border: 3px solid #FFC80A;
      border-radius: 15px;
      background-color: #8F75BE;
      margin-top: 65px;
      margin-bottom: 93px;
    }
  `;
head.appendChild(style);
let common = document.createElement("div");
common.classList.add("common");
body.appendChild(common);
let freelancer = document.createElement("div");
freelancer.classList.add("freelancer");
common.appendChild(freelancer);

let studio = document.createElement("div");
studio.classList.add("studio");
common.appendChild(studio);
let freelancerP = document.createElement("p");
freelancerP.innerHTML = "freelancer";
freelancer.appendChild(freelancerP);
let freelancerH2 = document.createElement("h2");
freelancerH2.innerHTML = "Initially designed to";
freelancer.appendChild(freelancerH2);
let but = document.createElement("p");
but.innerHTML =
  "But I must explain to you how all this mistaken idea of denouncing";
but.setAttribute("id", "but");
freelancer.appendChild(but);
let button = document.createElement("button");
button.innerHTML = "start here";
freelancer.appendChild(button);
head.appendChild(style);

let studioP = document.createElement("p");
studioP.innerHTML = "studio";
studio.appendChild(studioP);
let studioH2 = document.createElement("h2");
studioH2.innerHTML = "Initially designed to";
studio.appendChild(studioH2);
let studioH2Clone = but.cloneNode(true);
studio.appendChild(studioH2Clone);
let studioButton = button.cloneNode(true);
studio.appendChild(studioButton);

let clickButtons = document.querySelectorAll("button");

//  for (i = 0; i < clickButtons.length; i++) {
//  clickButtons[i].addEventListener('click', function () {
//     alert('Я нажал кнопку');
//   })
// }
