"use strict"

//one
let str1 = 'aaa@bbb@ccc';

console.log('aaa@bbb@ccc'.replace (/@/g, '!'));


//two

let date = '2025-12-31'

let newDate = date.replace(/(2025)(-)(12)(-)(31)/,"$5$4$3$2$1");
console.log(newDate.replace(/-/g,"/"));

//#3

let str3 = 'Я учу javascript!';

console.log(str3.substring(2))
console.log(str3.substr(2));
console.log(str3.slice(2));

//#4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr4 = [4, 2, 5, 19, 13, 0, 10];

let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i] ** 3;
}
console.log(sum);
console.log(Math.sqrt(sum))

//#5 Сделайте так, чтобы в любом случае в переменную

let a;
let b;
let c;

function getDifference(a, b) {
    c = a-b;
    return c
}
console.log(Math.abs(getDifference(2, 5)))

//#6 

let dateNow = new Date();
console.log(dateNow);

let dateLocal = dateNow.toLocaleString('ru');
console.log(dateLocal);

function addNumber(num) {
    if (num < 10) return '0' + num;
    else return num;
}
addNumber(dateLocal)

//#7 

let str7 = 'aa aba abba abbba abca abea';

console.log(str7.match(/ab+a/g));


//#8 

function isPhone(strPhone) {
    const regExp = new RegExp(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/);
    return regExp.test(strPhone);
}
console.log(isPhone('+375336682696'));
//#9 

//#10
let str10 ='https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
// console.log(str10.match(/'https://tech.onliner.by'/))
