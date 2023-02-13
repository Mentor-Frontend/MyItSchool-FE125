'use strict';

let SomeLight = function (numOfLeds) {

    this.numOfLeds = numOfLeds,
    this.on = function () {
        this.status = true;
    },
    this.off = function () {
        this.status = false;
    }

    
    }

let lights = new SomeLight(3);

let buttons = document.createElement('div');
    buttons.innerHTML = `
    <button id = "press_1" class = "buttonOn">ON</button>
    <button id = "press_2" class = "buttonOff">OFF</button>
    `;
    document.body.append(buttons);

for (let i = 0; i < lights.numOfLeds; i++) {
    let a = document.createElement('div');
    a.classList.add('styleOff');
    a.classList.add('led');
    document.body.append(a);
}

let style = document.createElement('style');
style.innerHTML = `

    div {
        text-align: center;
    }

    .led {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        float: left;
        margin: 20px 10px 0 0;
        margin-left: inherit;
        position: relative;
        left: 374px;
        top: 200px;
    }

    .styleOff {
        background-color: grey;
    }

    .styleOn {
        background-color: #f0ff00;
        box-shadow: 7px 7px 31px 95px rgba(240, 255, 0, 0.2);
    }

    .styleOn_2 {
        background-color: #00ffdd;
        box-shadow: 7px 7px 31px 95px rgba(0, 255, 221, 0.2);
    }

    .styleOn_3 {
        background-color: #d069e8;
        box-shadow: 7px 7px 31px 95px rgba(208, 105, 232, 0.2);
    }
`

document.head.append(style);

let press_1 = document.querySelector('#press_1');


    function ledsOn () {

        lights.on();

        let k = document.querySelectorAll('.styleOff');
            for (let elem of k) {
                elem.classList.remove('styleOff');
                elem.classList.add('styleOn');
            }
            setTimeout(ledsOn_1, 1000);
};
            

        function ledsOn_1 () {

            let k = document.querySelectorAll('.styleOn');
            if (lights.status === false) {
                for (let elem of k) {
                    elem.classList.toggle('styleOn');
                elem.classList.toggle('styleOff');
                }
            } else {

                for (let elem of k) {
                elem.classList.remove('styleOn');
                elem.classList.add('styleOn_2');
        }
            }

        let timerId = setTimeout(ledsOn_2, 1000);
        if (lights.status === false) clearTimeout(timerId);
        }

    function ledsOn_2 () {
        let k = document.querySelectorAll('.styleOn_2');
        if (lights.status === false) {
            for (let elem of k) {
                elem.classList.toggle('styleOn_2');
            elem.classList.toggle('styleOff');
            }
            } else {

                for (let elem of k) {
                elem.classList.remove('styleOn_2');
                elem.classList.add('styleOn_3');
        }
            }

        let timerId = setTimeout(ledsOn_3, 1000);
        if (lights.status === false) clearTimeout(timerId);
        }

    function ledsOn_3 () {
        let k = document.querySelectorAll('.styleOn_3');
        if (lights.status === false) {
            for (let elem of k) {
                elem.classList.toggle('styleOn_3');
            elem.classList.toggle('styleOff');
            }
            } else {

                for (let elem of k) {
                elem.classList.remove('styleOn_3');
                elem.classList.add('styleOn');
        }
            }
            
        let timerId = setTimeout(ledsOn_1, 1000);
        }

    press_1.setAttribute('onclick', 'ledsOn();');

    let press_2 = document.querySelector('#press_2');

    function ledsOff () {

        let k = document.querySelectorAll('.styleOn'),
            j = document.querySelectorAll('.styleOn_2'),
            l = document.querySelectorAll('.styleOn_3');

            if (document.body.classList.contains("styleOn")) {
                for (let elem of k) {
                    elem.classList.remove('styleOn');
                    elem.classList.add('styleOff');
                
            }
            } else if (document.body.classList.contains("styleOn_2")) {
                for (let elem of j) {
                    elem.classList.remove('styleOn_2');
                    elem.classList.add('styleOff');
                    
            }
            } else if (document.body.classList.contains("styleOn_3")) {
                for (let elem of l) {
                    elem.classList.remove('styleOn_3');
                    elem.classList.add('styleOff'); 
            }
            }
        
        lights.off();
        
    }

    press_2.setAttribute('onclick', 'ledsOff()');
