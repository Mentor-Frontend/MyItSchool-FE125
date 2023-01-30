"use strict";
//Task 1
document.write("<span style='font-size:20px; font-weight:700'>Task #1</span>", '<br/>');
for (let i = 1; i < 51; i++) {
    if (i == 50) {
        document.write(i, '.');
        break;
    }
    document.write(i, ', ');
}
document.write('<br/>');
for (let i = 35; i > 7; i--) {
    if (i == 8) {
        document.write(i, '.');
        break;
    }
    document.write(i, ', ');
}
//Task 2
document.write('<br/>', "<span style='font-size:20px; font-weight:700'>Task #2</span>", '<br/>');
let i2 = 89;
while (i2 > 10) {
    document.write(i2, '<br/>');
    i2--;
}
//Task 3
document.write("<span style='font-size:20px; font-weight:700'>Task #3</span>", '<br/>');
let sum3 = 0;
for (let i = 0; i <= 100; i++) {
    sum3 += i;
}
document.write(sum3, '<br/>');
//Task 4
document.write("<span style='font-size:20px; font-weight:700'>Task #4</span>", '<br/>');
for (let i = 1; i < 6; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    document.write('For ', i, ': ', sum, '<br/>');
}
//Task 5
document.write("<span style='font-size:20px; font-weight:700'>Task #5</span>", '<br/>');
for (let i = 8; i <= 56; i += 2) {
    document.write(i, ' ');
}
document.write('<br/>');
let i5 = 8;
while (i5 <= 56) {
    document.write(i5, ' ');
    i5 += 2;
}
document.write('<br/>');
//Task 6
document.write("<span style='font-size:20px; font-weight:700'>Task #6</span>", '<br/>');
for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i, ' * ', j, ' = ', i * j, '<br/>');
    }
    document.write('<br/>');
}
//Task 7
document.write("<span style='font-size:20px; font-weight:700'>Task #7</span>", '<br/>');
let n = 1000;
let num = 0;
for (let i = n; i > 50; i /= 2) {
    num++;
}
document.write(num, '<br/>');
//Task 8
document.write("<span style='font-size:20px; font-weight:700'>Task #8</span>", '<br/>');
let str;
let counter = 0;
let sum8 = 0;
let save = 1;
while (save != 0 || save == '') {
    str = prompt('Enter a number, please!');
    save = str;
    str = Number(str);
    if (Number.isFinite(str) == false) {
        alert('It is not a number!');
    }
    else if (str != 0) {
        counter++;
        sum8 += str;
    }
}
document.write('sum = ', sum8, '; arithmetic mean = ', sum8 / counter, '<br/>');
//Task 9
document.write("<span style='font-size:20px; font-weight:700'>Task #9</span>", '<br/>');
let numbers = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min = Number(numbers[0]);
let max = Number(numbers[0]);
let number;
for (let i = 2; i < numbers.length; i++) {
    if (numbers[i + 1] == ' ' || i == length.numbers - 1) {
        number = Number(number);
        min = (min > number) ? number : min;
        max = (max < number) ? number : max;
        number = undefined;
    }
    else {
        number = numbers[i] + numbers[i + 1];
    }
}
document.write('min = ', min, '; max = ', max, '<br/>');
//Task 10
document.write("<span style='font-size:20px; font-weight:700'>Task #10</span>", '<br/>');
let n10 = 982;
document.write('number = ', n10, '<br>');
let str_num = String(n10);
document.write('digits in the number: ');
for (let i = 0; i < str_num.length; i++) {
    document.write(str_num[i], ' ');
}
document.write('<br/>','number of digits in the number: ', str_num.length, '<br/>');
let sum = 0;
for (let i = 0; i < str_num.length; i++) {
    sum += Number(str_num[i]);
}
document.write('the sum of digits in the number: ', sum, '<br/>');
let str_rev = '';
for (let i = str_num.length - 1; i >= 0; i--) {
    str_rev += str_num[i];
}
let num_rev = Number(str_rev);
document.write('the number with the reverse order of digits: ',str_rev);