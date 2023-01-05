"use strict"

console.log('------задача 1 ------');
let name = prompt('ваше имя'),
    age = prompt('ваш возраст');
    city = prompt('ваш город проживания'),
    phone = prompt('ваш телефон'),
    email = prompt('ваш е-маил'),
    company = prompt('ваша компания');

console.log(`меня зовут ` + name);
console.log(`мне_ ` + age + `_года`);
console.log(`я живу в городе` + city);
console.log(`мой номер телефона` + email);
console.log(`мой е-меил` + email);
console.log(`я работаю в компании` + company);

console.log('------задача 2 ------');

let year;
age = +prompt('ваш возраст');

if (age) {
    year = 2022 - age;
    console.log(year);
}

console.log('------задача 3 ------');

let str = '1, 2, 3, 4, 5, 6';

if( (1 + 2 + 3) == (4 + 5 + 6)) {
    console.log('да');
} else {
    console.log('нет');
};

console.log('------задача 4 ------');

let a = 5;

if( a > 0) {
    console.log('верно');
} else {
    console.log('не верно');
}

console.log('------задача 5 ------');

let b = 10;
let c = 2;
let sum = b + c;
let sum2;

console.log(b - c);
console.log(b + c);
console.log(b * c);
console.log(b / c);

if ( sum > 1) {
    sum2 = sum*sum;
    console.log(sum2);
}

console.log('------задача 6 ------');

console.log('------задача 7 ------');

console.log('------задача 8 ------');

console.log('------задача 9 ------');

console.log('------задача 10 ------');