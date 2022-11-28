"use strict"
//Task #1
document.write("<span style='font-size:20px; font-weight:700'>Task #1</span>", '<br/>');
let str1 = 'aaa@bbb@ccc';
document.write(str1.replace(/@/g, '!'), '<br/>');
//Task #2
document.write("<span style='font-size:20px; font-weight:700'>Task #2</span>", '<br/>');
let date = '2025-12-31';
document.write(date.split('-').reverse().join('/'),'<br/>');
//Task #3
document.write("<span style='font-size:20px; font-weight:700'>Task #3</span>", '<br/>');
let str3 = 'Я учу javascript!';
document.write(str3.substr(2,3), '<br/>');
document.write(str3.substr(6,10), '<br/>');
document.write(str3.substring(2,5), '<br/>');
document.write(str3.substring(6,16), '<br/>');
document.write(str3.slice(2,5), '<br/>');
document.write(str3.slice(6,16), '<br/>');
//Task #4
document.write("<span style='font-size:20px; font-weight:700'>Task #4</span>", '<br/>');
const arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for(let i = 0; i < arr4.length; i++){
    sum += Math.pow(arr4[i], 3);
}
document.write(Math.pow(sum, 0.5), '<br/>');
//Task #5
document.write("<span style='font-size:20px; font-weight:700'>Task #5</span>", '<br/>');
let a = 3, b = 5;
let c = Math.abs(a-b);
document.write(c, '<br/>');
//Task #7
document.write("<span style='font-size:20px; font-weight:700'>Task #7</span>", '<br/>');
let str7 = 'aa aba abba abbba abca abea';
document.write(str7.match(/ab+a/g), '<br/>');