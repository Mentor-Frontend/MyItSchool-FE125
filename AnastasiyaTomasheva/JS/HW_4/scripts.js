'use strict';

// Задание 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    document.write(arr[i] + ' ');
}

// Задание 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

let arrNegative = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrNegative.length; i++) {

if (arrNegative[i] > -10 && arrNegative[i] < -3) {
    document.write(arrNegative[i] + '; ');
}

}

// Задание 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

let arrFor = [],
    arrWhile = [],
    result = 0,
    numOfArrWhile = 23;

for (let i = 23; i <= 57; i++) {
    arrFor.push(i);
    }

    for (let j = 0; j < arrFor.length; j++) {
        result += arrFor[j];

}

console.log(arrFor, result);

while (numOfArrWhile >= 23 && numOfArrWhile <= 57) {
    arrWhile.push(numOfArrWhile);
    numOfArrWhile++
    
}

console.log(arrWhile);

// Задание 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

let arrString = ['10', '20', '30', '50', '235', '3000'];

for (let num of arrString) {
    if (num[0] == 1 || num[0] == 2 || num[0] == 3) {

        document.write(num + ', ');
    }
}

document.write('<br>');

// Задание 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

let arrWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < arrWeek.length; i++) {
    
    if (arrWeek[i] == 'Суббота' || arrWeek[i] == 'Воскресенье') {
        document.write(arrWeek[i].bold() + '<br>');
    } else {
        document.write(arrWeek[i] + '<br>')
    }
}

// Задание 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

let someArr = [4, 6, 69, 9, 'XMAS!'];

console.log(someArr.at(-1));

// Задание 7. Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

let usersArr = [];

let numFromUsers;

do {
    numFromUsers = prompt('Укажите число');
    usersArr.push(numFromUsers);
} while (Number.isInteger(+numFromUsers) && numFromUsers !== '');

usersArr.pop();

console.log(usersArr);

usersArr.sort((a,b) => a - b);
console.log(usersArr);

// Задание 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

let arrRev = [12, false, 'Текст', 4, 2, -5, 0],
    i = 0;

arrRev.reverse();

while (i < arrRev.length) {

    document.write(arrRev[i] + ' ');
    i++;
}

document.write('<br>');

// Задание 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

let arrEmpty = [5, 9, 21, , , 9, 78, , , , 6],
    sumOfEmpty = 0;

for (let mean of arrEmpty) {

    if (mean == undefined) {
        sumOfEmpty++;
    }
}

console.log(sumOfEmpty);

// Задание 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

let arrSumNull = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    arrZero = [];

arrSumNull.forEach ( (item, index) => {
    if (item === 0) {
        arrZero.push(index);
    }
})

if (arrZero.length > 1) {
    let iFirst = arrZero[0],
        iLast = arrZero.at(-1),
        sumOfArr = arrSumNull.slice (iFirst, iLast);
        console.log(sumOfArr.reduce((sum, current) => sum + current, 0));

    
}

// Задание 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5.

let triangle,
    heigh = 9,
    j = heigh,
    symbol = '^';

for (let i = 0; i < heigh; i++) {

        let empty = ' '.repeat(j);
        triangle = empty + symbol.repeat(i * 2 + 1);
    
        j--;
        console.log(triangle)
}