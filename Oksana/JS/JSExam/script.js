const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['foto/m1.jpg', 'foto/m2.jpg', 'foto/m3.jpg', 'foto/m4.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

//
let popup = document.getElementById("my_popup");
let btn = document.getElementById("btn_popup");
let span = document.getElementsByClassName("close_popup")[0];

btn.onclick = function () {
    popup.style.display = "block";
 }

span.onclick = function () {
    popup.style.display = "none";
 }

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}