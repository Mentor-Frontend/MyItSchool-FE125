"use scrict";
//Task #1
document.write("<span style='font-size:20px; font-weight:700'>Task #1</span>", '<br/>');
const a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
    document.write(a[i], ' ');
}
document.write('<br/>');
//Task #2
document.write("<span style='font-size:20px; font-weight:700'>Task #2</span>", '<br/>');
const arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if (-10 < arr2[i] && -3 > arr2[i]) {
        document.write(arr2[i], ' ');
    }
}
document.write('<br/>');
//Task #3
document.write("<span style='font-size:20px; font-weight:700'>Task #3</span>", '<br/>');
const arr3 = [];
let result = 0;
for (let i = 0, num = 23; num <= 57; i++, num++) {
    arr3[i] = num;
    result += arr3[i];
    document.write(arr3[i], ' ');
}
document.write('<br/>');
document.write(result, '<br/>');
let numForWhile = 23;
let iForWhile = 0;
while (numForWhile <= 57) {
    arr3[iForWhile] = numForWhile;
    document.write(arr3[iForWhile], ' ');
    iForWhile++;
    numForWhile++;
}
document.write('<br/>');
//Task #4
document.write("<span style='font-size:20px; font-weight:700'>Task #4</span>", '<br/>');
const arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5) {
        document.write(arr4[i], ' ');
    }
}
document.write('<br/>');
//Task #5
document.write("<span style='font-size:20px; font-weight:700'>Task #5</span>", '<br/>');
const arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == 'СБ' || arr5[i] == 'ВС') {
        document.write('<b>' + arr5[i] + '</b>' + ' ');
    }
    else document.write(arr5[i], ' ');
}
document.write('<br/>');
//Task #6
document.write("<span style='font-size:20px; font-weight:700'>Task #6</span>", '<br/>');
const arr6 = [1, 5, 'rr', 'null', 7, 238, 7.05, -999, 'array', -0.1];
arr6.push(88);
document.write(arr6[arr6.length - 1], '<br/>');
//Task #7
document.write("<span style='font-size:20px; font-weight:700'>Task #7</span>", '<br/>');
const arr7 = [];
let number;
while (true) {
    number = prompt('Input a number, please!');
    if (number === '') break;
    if (number === null || isNaN(number)) continue;
    arr7.push(number);
}
document.write(arr7, '<br/>');
arr7.sort((a, b) => a - b);
document.write(arr7, '<br/>');
//Task #8
document.write("<span style='font-size:20px; font-weight:700'>Task #8</span>", '<br/>');
const arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let iForWhileInTask8 = arr8.length - 1;
while (iForWhileInTask8 >= 0) {
    document.write(arr8[iForWhileInTask8], ' ');
    iForWhileInTask8--;
}
document.write('<br/>');
document.write(arr8.reverse(), '<br/>');
//Task #9
document.write("<span style='font-size:20px; font-weight:700'>Task #9</span>", '<br/>');
const arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let counter = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === undefined) {
        counter++;
    }
}
document.write(counter, '<br/>');
//Task #10
document.write("<span style='font-size:20px; font-weight:700'>Task #10</span>", '<br/>');
const arr10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let startSum = 0;
let flag = false;
let sum = 0;
let count = 0;
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] == 0) count++;
}
if (count < 2) {
    document.write(0);
}
else {
    for (let i = 0; i < arr10.length; i++) {
        if (arr10[i] == 0 && !flag) {
            flag = true;
            continue;
        }
        if (arr10[i] == 0) {
            sum = startSum;
        }
        else if (flag) startSum += arr10[i];
    }
    document.write(sum);
}

const arr101 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
const firstIndex = arr10.indexOf(0);
const lastIndex = arr10.lastIndexOf(0)
let sum10 = 0;
if (firstIndex !== -1 || lastIndex !== -1) {
    for (let i = firstIndex; i < lastIndex; i++ ) {
        sum10 += arr10[i]
    }
} else {
    console.log(0)
}

document.write('<br/>');
//Task #11
document.write("<span style='font-size:20px; font-weight:700'>Task #11</span>", '<br/>');
let n = 12;
let width = 2 * n - 1;
for(let i = 0; i < n; i++) {
    let el = 2*i + 1;
    for(let j = 0; j < (width-el)/2; j++){
        document.write("<span style='color: white'> ^</span>");
    }
    for(let j = 0; j < el; j++){
        document.write(' ^');
    }
    for(let j = 0; j < (width-el)/2; j++){
        document.write("<span style='color: white'> ^</span>");
    } 
    document.write('<br/>');
}