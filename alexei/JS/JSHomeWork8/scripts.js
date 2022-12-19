

document.documentElement.setAttribute("lang", "en")

let title = document.createElement('title')
title.innerHTML = 'Freelancer or Studio'

let encoding = document.createElement('meta')
encoding.setAttribute('charset', 'UTF-8')

document.head.appendChild(title)
document.head.appendChild(encoding)

let header = document.createElement('header')
let section = document.createElement('section')
let divLeft = document.createElement('div')
let divRight = document.createElement('div')
let divLeftSecond = document.createElement('div')
let divRightSecond = document.createElement('div')
document.body.appendChild(header)
document.body.appendChild(section)
section.appendChild(divLeft)
section.appendChild(divRight)
divLeft.appendChild(divLeftSecond)
divRight.appendChild(divRightSecond)

header.classList.add('header')
section.classList.add('section')
divLeft.classList.add('block', 'block_left')
divRight.classList.add('block', 'block_right')
divLeftSecond.classList.add('block_second', 'block_second_left')
divRightSecond.classList.add('block_second', 'block_second_right')



let h2First = document.createElement('h2')
h2First.innerHTML = 'Choose Your Option'
header.appendChild(h2First)

let pFirst = document.createElement('p')
pFirst.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
header.appendChild(pFirst)

let h4Left = document.createElement('h4')
h4Left.innerHTML = 'FREELANCER'
divLeftSecond.appendChild(h4Left)

let h2Second = document.createElement('h2')
h2Second.innerHTML = 'Initially designed to '
divLeftSecond.appendChild(h2Second)

let pSecond = document.createElement('p')
pSecond.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
divLeftSecond.appendChild(pSecond)

let buttonLeft = document.createElement('button')
buttonLeft.innerHTML = 'START HERE'
divLeftSecond.appendChild(buttonLeft)

let h4Right = document.createElement('h4')
h4Right.innerHTML = 'STUDIO'
divRightSecond.appendChild(h4Right)

let h2Third = document.createElement('h2')
h2Third.innerHTML = 'Initially designed to '
divRightSecond.appendChild(h2Third)

let pThird = document.createElement('p')
pThird.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '
divRightSecond.appendChild(pThird)

let buttonRight = document.createElement('button')
buttonRight.innerHTML = 'START HERE'
divRightSecond.appendChild(buttonRight)

h4Left.classList.add('h4', 'h4_left')
h4Right.classList.add('h4', 'h4_right')

h2First.classList.add('h2', 'h2_first')
h2Second.classList.add('h2', 'h2_second')
h2Third.classList.add('h2', 'h2_third')

pFirst.classList.add('p', 'p_first')
pSecond.classList.add('p', 'p_second')
pThird.classList.add('p', 'p_third')

buttonLeft.classList.add('button', 'button_left')
buttonRight.classList.add('button', 'button_right') 

let style = document.createElement('style')
style.innerHTML = `
    .header {
        text-align: center;
    }
    .h2 {
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    }
    .h2_third {
        color: #FFFFFF;
    }
    .p_first {
        font-family: 'OpenSans';
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7
    }
    .section {
        display: flex;
        justify-content:space-around;
    }
    .block {
        text-align: center;
    }
    .block_right {
        background: #8F75BE;
    }
    .block {
        width: 400px;
        height: 480px;
    }
    .block_second {
        width: 210px;
        height: 315px;
        margin: 80px 95px
    }
    .h4 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
    }
    .h4_left {
        color: #9FA3A7;
    }
    .h4_right {
        color: #FFC80A;
    }
    .p_second {
        font-family: 'OpenSans';
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
    }
    .p_third {
        font-family: 'OpenSans';
        font-size: 12px;
        line-height: 22px;
        color:#FFFFFF;
    }
    .button {
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
    }
    .button:hover {
        cursor: pointer;
    }
    .button_left:hover {
        background-color: #8F75BE;
        color: #FFFFFF
    }
    .button_right:hover {
        background-color: #FFFFFF;
        color: #212121;
    }
    .button_left {
        background-color: #FFFFFF;
        color: #212121;
    }
    .button_right {
        background-color: #8F75BE;
        color: #FFFFFF
    }
`
document.head.appendChild(style)