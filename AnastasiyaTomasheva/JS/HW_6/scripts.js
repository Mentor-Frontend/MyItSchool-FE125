'use strict';

// Задание 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let str = 'aaa@bbb@ccc';

document.write(str.replace(/@/g, '!') + '<br>');

// Задание 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let date = '2025-12-31';

date.replace(/(2025)(12)(31)/, ('$3 $2 $1'));
document.write(date.replace(/-/g, '/') + '<br>');

// Задание 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let strDel = 'Я учу javascript!';

document.write(strDel.substr(1, 15) + '<br>');
document.write(strDel.substring(1, 16) + '<br>');
document.write(strDel.split('').slice(1, -1).join('') + '<br>');

// Задание 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let Arr = [4, 2, 5, 19, 13, 0, 10],
    sumArr = 0;
    
for (let num of Arr) {

    let cube = Math.pow(num, 3);
        sumArr += cube;
}

let Square = Math.sqrt(sumArr);

console.log(Square);

// Задание 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

function sum (a, b) {

    let c = a + b;

    if (c < 0) {

        c *= -1;
    }

    console.log(c);
}

sum (-10, -3);

// Задание 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

let dateNow = new Date();

console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds(), dateNow.getDay() + '.' + dateNow.getMonth() + '.' + dateNow.getFullYear());

function dates (year, month, day) {

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    let dateWithZero = new Date();

    dateWithZero.setFullYear(year, month, day);

    console.log(dateWithZero);

    let opt = {
        year: 'numeric',
        month: 'numeric',
        date: 'numeric'
    };

    console.log(dateWithZero.toLocaleDateString(opt));
}

dates(2014, 0, 9);

// Задание 7.Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

// let strSimb = 'aa aba abba abbba abca abea';

console.log('aa aba abba abbba abca abea'.match(/ab+a/g));

// Задание 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

function checkNumber () {

    let number = '375447202103',
        check = /375\d{2}[0-9]{7}/g;

    return check.test(number);
}

console.log(checkNumber());

// Задание 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.

// Функция должна возвращать true или false. Используйте регулярные
// выражения.

function checkEmail () {

    let email = 'Smileandshine@mail.ru',
        check = /^[^\d]{1}[0-9A-Za-z]*[\d]+[\d]*[0-9A-Za-z]*@[-.\w]+.[\w]{2,11}$/gm

    return check.test(email);
}

console.log(checkEmail());

// Задание 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?
// utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.

function splitUrl(url) {

let checkUrl1 = /([\S]+\/\/[\w.]+)(\/[\S.]+\/)([\S]+)(\#[\S]+)/,
    checkUrl2 = /([\S]+\/\/[\w.]+)(\/[\S.]+\/)([\S]+)/,
    checkUrl3 = /([\S]+\/\/[\w.]+)(\/[\S.]+\/)/,
    checkUrl4 = /([\S]+\/\/[\w.]+)/;  

let result1 = url.match(checkUrl1),
    result2 = url.match(checkUrl2),
    result3 = url.match(checkUrl3),
    result4 = url.match(checkUrl4),
    domen,
    noParam,
    param,
    hesh;

    if (result1 != null) {

        domen = result1[1],
        noParam = result1[2],
        param = result1[3],
        hesh = result1[4];

        document.write(domen + '<br>' + noParam + '<br>' + param + '<br>' + hesh);
    
    } else if (result2 != null) {

        domen = result2[1],
        noParam = result2[2],
        param = result2[3];
        
        document.write(domen + '<br>' + noParam + '<br>' + param);
    
    } else if (result3 != null) {

        domen = result3[1],
        noParam = result3[2];
        
        document.write(domen + '<br>' + noParam);

    } else if (result4 != null) {

        domen = result4[1];

        document.write(domen);
    }

}

splitUrl('https://www.kinopoisk.ru/film/62255/');