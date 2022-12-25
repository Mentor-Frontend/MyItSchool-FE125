"use strict";
//Task #1
function minusAndDivision(a, b, c) {
    return (a - b) / c;
}
console.log('Task #1: ', minusAndDivision(8, 2, 2));
//Task #2
function getCubeAndSqrt(a) {
    const result = [];
    result[0] = a ** 3;
    result[1] = a ** 2;
    return result;
}
const arr2 = getCubeAndSqrt(5);
console.log('Task #2: cube =', arr2[0], '; squart =', arr2[1], '.');
//Task #3
function getMinAndMax(a, b) {
    let min = a > b ? b : a;
    let max = a < b ? b : a;
    const result = [min, max];
    return result;
}
const arr3 = getMinAndMax(8, 8);
console.log('Task #3: min =', arr3[0], '; max =', arr3[1], '.');
//Task #4
function setArray() {
    const arr4 = [];
    let start = +prompt('Input beginning of the range, please!');
    let end = +prompt('Input end of the range, please!');
    if (end >= start) {
        for (let i = 0; i <= (end - start); i++) {
            arr4[i] = +start + i;
        }
    }
    else {
        for (let i = 0; i <= (start - end); i++) {
            arr4[i] = start - i;
        }
    }
    return arr4;
}
function getArray(array) {
    console.log(array);
}
console.log('Task #4: ');
getArray(setArray());
//Task #5
function isEven(a) {
    if (a == 0) {
        console.log('Zero is not an odd or even number!');
        return false;
    }
    else if (a % 2 != 0) {
        return false;
    }

    else return true;
}
console.log('Task #5: ', isEven(8));
//Task #6
function getEvenArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (!isEven(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
const arr6 = [7, 0, -6, 4, 85, 90, 10, -71, 12, 5, 0, 3, 43, 2];
console.log('Task #6: ', getEvenArray(arr6));
//Task #7
console.log('Task #7: ');
function drawTriangle(par) {
    for (let i = 1; i <= par; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += String(i);
        }
        console.log(str);
    }
}
drawTriangle(9);
//не совсем понятно второе условие задания 
//Task #8
console.log('Task #8: ');
let height = prompt('Введите высоту пирамиды');
function drawPyramid(height) {
    let space, star;
    for (let i = 0; i < height; i++) {
        space = star = "";
        for (let j = 0; j < height - i; j++) space += " ";
        for (let j = 0; j < 2 * i + 1; j++) star += "*";
        console.log(space + star);
    }
}
drawPyramid(height);
function drawInvertedPyramid(height) {
    let space, star;
    for (let i = height - 1; i >= 0; i--) {
        space = star = "";
        for (let j = 0; j < height - i; j++) space += " ";
        for (let j = 0; j < 2 * i + 1; j++) star += "*";
        console.log(space + star);
    }
}
drawInvertedPyramid(height);
//Task #9
function getFibonacciArray() {
    const array = [0, 1];
    for (let i = 1; array[i] < 900; i++) {
        array.push(array[i - 1] + array[i]);
    }
    return array;
}
console.log('Task #9: ', getFibonacciArray());
//Task #10
function getSumNumerals(n) {
    let n_str = String(n);
    let sum = 0;
    for (let i = 0; i < n_str.length; i++) {
        sum += +n_str[i];
    }
    if (sum > 9) return getSumNumerals(sum);
    else return sum;
}
console.log('Task #10: ', getSumNumerals(177));
//Task #11
console.log('Task #11: ');
function getArray11(array, index) {
    if (index == array.length) return;
    console.log(array[index]);
    index++;
    return getArray11(array, index);
}
const arr11 = [1, 8, 5, 0.23, -7, 39, -76, 102, -201, -1, 1, 0, 6];
getArray11(arr11, 0);
//Task #12
console.log('Task #12: ');
function getInfo() {
    let space = ' ',
        star = '*',
        name = prompt('Введите Ваше имя'),
        surname = prompt('Введите Вашу фамилию'),
        patronymic = prompt('Введите Ваше отчвество'),
        group = prompt('Введите номер Вашей группы');
    const str = [];
    str[0] = 'Домашняя работа: «Функции»';
    str[1] = 'Выполнил: студент гр. ' + group;
    str[2] = surname + ' ' + name + ' ' + patronymic;
    let max = str.reduce((max, n) => max.length > n.length ? max : n, '').length;
    console.log(star.repeat(max + 5));
    console.log(`* ${str[0]} ${space.repeat(max - str[0].length)} *`);
    console.log(`* ${str[1]} ${space.repeat(max - str[1].length)} *`);
    console.log(`* ${str[2]} ${space.repeat(max - str[2].length)} *`);
    console.log(star.repeat(max + 5));
}
getInfo();