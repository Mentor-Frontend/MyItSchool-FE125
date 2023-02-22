
"use strict"
//Task #1
let str1 = 'aaa@bbb@ccc';
console.log('Task #1: ', str1.replace(/@/g, '!'));
//Task #2
let date = '2025-12-31';
console.log('Task #2: ', date.split('-').reverse().join('/'));
//Task #3
console.log('Task #3: ');
let str3 = 'Я учу javascript!';
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));
//Task #4
const arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += Math.pow(arr4[i], 3);
}
console.log('Task #4: ', Math.pow(sum, 0.5));
//Task #5
let a = 3, b = 5;
let c = Math.abs(a - b);
console.log('Task #5: ', c);
//Task #6
const date6 = new Date();
function getZero(num) {
    if (num < 10) return '0' + num;
    else return num;
}
console.log('Task #6: ',date6.getHours() + ':' + date6.getMinutes() + ':' + date6.getSeconds() + ' '
    + getZero(date6.getDate()) + '.' + getZero(date6.getMonth() + 1) + '.' + date6.getFullYear());
//Task #7
let str7 = 'aa aba abba abbba abca abea';
console.log('Task #7: ', str7.match(/ab+a/g));

