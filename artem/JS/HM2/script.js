
console.log('---------- ЗАДАНИЕ 1 ------------');
let name = prompt('Как вас зовут?');
let age = prompt('Сколько вам лет?');
let city = prompt('Город проживания?');
let phone = prompt('Ваш телефон?');
let email = prompt('Ваша почта?');
let company = prompt('Где работаете?');

console.log('Меня зовут ' + name + '. Мне ' + age + '. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');

console.log('---------- ЗАДАНИЕ 2 ------------');

let year = 2022;
let birthday = year - age;

console.log(name + ' родился в ' + birthday + ' году.');

console.log('---------- ЗАДАНИЕ 3 ------------');

let stroke = "123456";
let sum1 = stroke[0]+stroke[1]+stroke[2];

let sum2 = stroke[3]+stroke[4]+stroke[5];

if (sum1 == sum2) {
    console.log('да');
} else {
    console.log('Нет');
}

console.log('---------- ЗАДАНИЕ 4 ------------');

let a1 = 1;

if (a1 > 0) {
    console.log('Верно, число больше 0');
} else {
    console.log('Неверно, число меньше 0');
}

a1 = 0;

if (a1 > 0) {
    console.log('Верно, число больше 0');
} else {
    console.log('Неверно, число меньше 0');
}

a1 = -3;

if (a1 > 0) {
    console.log('Верно, число больше 0');
} else {
    console.log('Неверно, число меньше 0');
}

console.log('---------- ЗАДАНИЕ 5 ------------');

let a = 10;
let b = 2;

let sum = a + b;
let razn = a - b;
let proizv = a * b;
let chastn = a / b;
let sumall = sum + razn + proizv + chastn;

if (sumall > 1) {
    let kvadr = sumall * sumall;
    console.log(kvadr);
}

console.log('---------- ЗАДАНИЕ 6 ------------');

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('---------- ЗАДАНИЕ 7 ------------');

let n = +prompt('Введите число от 0 до 59');

if (n >= 0 && n <= 14) {
    console.log('Первая');
} else if (n >= 15 && n <= 30) {
    console.log('Вторая');
} else if (n >= 31 && n <= 45) {
    console.log('Третья');
} else if (n >= 46 && n <= 59) {
    console.log('Четвертая');
} else {
    console.log('Вы не попали в числа переменной');
}

console.log('---------- ЗАДАНИЕ 8 ------------');

let day = +prompt('Введите число от 1 до 31')

if (day >= 1 && day <= 10) {
    console.log('Первая');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая');
} else if (day >= 21 && day <= 30) {
    console.log('Третья');
} else if (day >= 31 && day <= 31) {
    console.log('Четвертая');
} else {
    console.log('Вы не попали в числа переменной');
}

console.log('---------- ЗАДАНИЕ 9 ------------');



console.log('---------- ЗАДАНИЕ 10 ------------');
