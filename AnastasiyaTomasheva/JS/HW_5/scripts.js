'use strict';

// Задание 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

function calc (a = 32, b = 2, c = 3) {
    return (a - b) / c;
}

console.log(calc());

// Задание 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

function numExtent (num = 3) {
    return [num ** 3, num ** 2];
}

console.log (numExtent());

// Задание 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

function min (a, b) {
    if (a < b) return a;
}

function max (a, b) {
    if (a < b) return b;
}

console.log(min(5, 87));
console.log(max(5, 87));

// Задание 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

function numRead () {

    let num,
        arr = [];

function numWrite () {

    do {
        num = +prompt ('Укажите число');
        arr.push(num);
    } while (Number.isInteger(num))
    
    return arr;
}

    numWrite();
    arr.pop();
    console.log(arr);
}

numRead();

// Задание 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(3));

// Задание 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

let arr2 = [];

function arr (arr) {
    for (let num of arr) {

        if (isEven(num) == true) {
            arr2.push(num);
        }
    }
    document.write(arr2 + '<br>');
}

arr([4, 7, 56, 78, 34, 67, 34]);

// Задание 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:
    
//     '*
//     '**
//     '***
//     '****
//     '*****
//     '******
//     '*******
//     '********
//     '*********

let arrPyramid = [];

function pyramid (heigth, simb) {
    simb = typeof simb !== 'undefined' ? simb : 1;

    for (let i = 0; i < heigth; i++) {
        if (!Number.isInteger(simb)) {
            document.write((simb.repeat(i + 1)) + '<br>')}
        else if (Number.isInteger(simb)) {
            arrPyramid.length = 0
            for (let j = 0; j <= i; j++) {
            arrPyramid.push(simb);
            }
            simb++

            document.write(arrPyramid.join('') + '<br>');
        }
    }
}       

pyramid(9, '$')

// Задание 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

// '    *
// ' . ***
// '  *****
// ' *******
// '*********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

function triangle (height) {
    let empty,
        star,
        d = height;

    for (let i = 0; i < height; i++) {
        star = '*'.repeat(i * 2 + 1);
    for (let j = 0; j < height; j++) {
        empty = ' '.repeat(d)};
        console.log(empty + star);
        d--;
    }	    
}

    triangle(5);

function triangleRev (height) {
    let empty,
        star,
        d = height;
    
    for (let i = height - 1; i >= 0; i--) {
        star = '*'.repeat(i * 2 + 1);
    for (let j = 0; j < height; j++) {
        empty = ' '.repeat(d)}
        console.log(empty + star);
        d++;
    }
    }

    triangleRev(5);

    // Задание 9. Напишите ф-цию, которая возвращает массив заполненный числами
    // Фибоначи от 0 до 1000.

    function fib () {

    let arr = [0, 1];   

    for (let i = 1; i <= 1000; i++) {

            for (let j = i - 1; j < i; j++) {
            arr.push(arr[i] + arr[j])} 
            if(arr.at(-1) >= 1000) break;
        }
        arr.pop();
    
    console.log(arr);
    
    }

    fib();

    // Задание 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
    // опять сложите его цифры. И так, пока сумма не станет однозначным числом
    // (9 и менее). Исп. Рекурсию.

    function recurs (n) {

        let arr = ('' + n).split('');
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }

        if (sum > 9) recurs(sum);

        console.log(sum);
        
        }

        recurs(5487328);

        // Задание 11. Дан массив с числами (передается параметром). Выведите
        // последовательно его элементы, используя рекурсию и не используя цикл.

        let i = 0;
        
        function arrs (arr) {
            
            document.write('<br>' + arr[i]);
            i++;
            if (i == arr.length) {
                return arr;
            }
            arrs(arr);
            }

        arrs ([3, 5, 8]);

        // Задание 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
        // группы студента и выводящую введённые данные в следующем виде:
        
        // '*****************************
        // '* Домашняя работа: «Функции» *
        // '* Выполнил: студент гр. W4017 *
        // '* Иванов Иван Иванович *
        // '*****************************
        
        // Размер рамки должен определятся автоматически по самой длинной строке.
        // Рамку вывести в консоль.

        function frame () {

            let init = prompt ('Укажите Фамилию, Имя и Отчество'),
                initGroup = prompt ('Укажите номер вашей группы'),
                str1 = `* Домашняя работа: «Функции» *`,
                str2 = `* Выполнил: студент гр. ${initGroup} *`,
                str3 = `* ${init} *`,
                size = Math.max (str1.length, str2.length, str3.length),
                strOfFrame = '*'.repeat(size);

                console.log (strOfFrame + '\n' + str1 + '\n' + str2 + '\n' + str3 + '\n' + strOfFrame);
        }

        frame();

        // Задание 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
        // эл. почты, не используя регулярные выражения. Почта верна при условии:
        
        // a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
        // одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
        // быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
        // «.@» или «@@», «_@», «@-», «--» и т.п.
        
        // b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
        // имя может содержать только буквы, цифры, но не быть первыми и
        // единственными в имени, и точку;
        
        // c. после последней точки и после @, домен верхнего уровня (ru, by, com и
        // т.п.) не может быть длиной менее 2 и более 11 символов.

        function check (adressCheck) {

            let adress = adressCheck.split('');
            let arrSimb = ['@', '_', '-', '.'];

            let name = adress.indexOf('@'),
                dot = adress.lastIndexOf(String.fromCharCode(46)),
                domenLength = adress.slice(dot);
            let nameLength = adress.slice(0, name);

            let arrNum = [],
                arrStr = [];

        for (let j = 0; j < nameLength.length; j++) {
            if (parseInt (+nameLength[j]) >= 0) {
                arrNum.push(nameLength[j])} 
            else if (isNaN (+nameLength[j])) {
                arrStr.push(nameLength[j]);}
            }

            for (let i = 0; i < adress.length; i++) {

                arrStr.forEach ((element) => {

                    if (adress[i] == element) {
                    console.log(true)}
                })


                arrNum.forEach ((element) => {                            
                    if (adress[i] == element) {
                        console.log(true)}
            })}
    
            
            for (let i = 0; i < adress.length; i++) {                   
                if (adress[i] < 'z') {
                    console.log(true)} 
                        else console.log('Ошибка ввода адреса');
                if (adress[i] == '_' || adress[i] == '-' || adress[i] == '.') {
                    console.log(true);}                
            
            for (let n = i - 1; n < i; n++){
            
            for (let k = 0; k < arrSimb.length; k++) {
            
                if (adress[i] == arrSimb[k] && adress[n] == arrSimb [k]) console.log('Ошибка ввода адреса');
            }      
            } 
            }

            if (~adress.indexOf('@')) console.log(true);

            if (adress[0] == '_' || adress[0] == '-' || adress[0] == '.') console.log('Ошибка ввода адреса');

            if (adress[adress.length - 1] == '_' || adress[adress.length - 1] == '-' || adress[adress.length - 1] == '.') console.log('Ошибка ввода адреса');

            if (nameLength.length < 2) console.log('Ошибка ввода адреса');

            if (arrNum.length < 2) console.log('Ошибка ввода адреса');

            if (arrStr.length < 2) console.log('Ошибка ввода адреса');

            if (domenLength.length > 2 && domenLength.length < 11) console.log(true);

        }   

check('Smile2shine22@gmail.com');