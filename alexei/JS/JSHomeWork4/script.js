"use strict"

// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

let arr = [1, 2, 3, 4, 5]
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.
let arrSecond = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i=0; i<=arrSecond.length; i++){
    if ((arrSecond[i] > -10) && (arrSecond[i] < -3) ){
        console.log(arrSecond[i])  
    }
}
// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.
let arrFor = []
let arrWhile = []
let sum = 0
let n = +prompt('Введите первое число массива', 23)
let m = +prompt('Введита последнее число массива', 57)
for (let i=n; i<=m; i++){
    arrFor.push(i)  
    sum += i
} 

console.log(arrFor)
console.log(sum)
let i = n
while (i<=m){
    arrWhile.push(i)
    i++
}
console.log(arrWhile)
// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arrFour = ['10', '20', '3000', '50', '235', '536', '125', '230', '130', '312', '352']
for (let i = 0; i <= arrFour.length; i++) {
    if (String(arrFour[i])[0] == '1' || String(arrFour[i])[0] == '2' || String(arrFour[i])[0] == '5') {  
    console.log(arrFour[i]);
    }
}

// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.
let arrFife = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < arrFife.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b><span>' + arrFife[i] + '&#32;<span></b>');
    }
    else {
        document.write('<span>' + arrFife[i] + '</span>' + '  ');
    }
}

// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
// и получите последний элемент массива, используя свойство length.
let arrSix = [1, 5, 9, '15', 'element', 32]
arrSix.push('last element')
let lastElement = arrSix[arrSix.length-1]
console.log(lastElement);

// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.
let arrSeven = []
let q = 0
while (true){
    q = +prompt('Введите число для задания 7')  
    if (q == '' || q == null || q == ' '){
        break
    }
    arrSeven.push(q)
}
console.log(arrSeven)
arrSeven.sort(function(a, b){
    return a - b
})
console.log(arrSeven)

// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.
let arrEight = [12, false, 'Текст', 4, 2, -5, 0]
let arrReverse
arrReverse = [...arrEight].reverse()
console.log(arrReverse);

// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
let arrNine = [5, 9, 21, , , 9, 78, , , , , , 6]
let sumNine = 0
let b = arrNine.length-1;
for (let i = 0; i < b; i++) {
    if (arr[i] === undefined) {
        sumNine += 1;
    }
}
console.log(sumNine);

// 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].


// 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране:

let triangle =  []
let height = +prompt('Введите высоту реугольника')
triangle.length = height
for (let i=1; i<height; i++){
    triangle[i] = new Array()
    triangle[i].length = i
}
for (let i = 1; i <= triangle.length; i++) {
        for (let j = 1; j <= triangle.length-i; j++) {
            document.write("\xa0");
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            document.write("^");
        }
        document.write("<br/>");
}

