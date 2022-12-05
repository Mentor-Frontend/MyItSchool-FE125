// Задание №1.
// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

document.write("<span style='font-size:20px; color: teal'>Задание №1. </span>");

let stroka = "aaa@bbb@ccc";

document.write("Строка до замены: " + stroka + ". ");
document.write(
  "Строка после замены: " + stroka.replace(/@/g, "!") + ". <br />"
);

// Задание №2.
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

document.write("<span style='font-size:20px; color: teal'>Задание №2. </span>");

let date = "2025-12-31";
/*
let razdel = date.split('-');
let date_secondVariant = razdel[2] + '/' + razdel[1] + '/' + razdel[0];

document.write(date_secondVariant);
*/

let preobraz = date.split("-").reverse().join("/");
document.write("Преобразованная дата: " + preobraz + ". <br />");

// Задание №3.
// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

document.write("<span style='font-size:20px; color: teal'>Задание №3. </span>");

let str = "Я учу javascript!";
document.write(
  "Первый способ <b>substring</b>: " +
    str.substring(2, 5) +
    " " +
    str.substring(6, 16) +
    ". <br />"
);
document.write(
  "Второй способ <b>substr</b>: " +
    str.substr(2, 3) +
    " " +
    str.substr(6, 10) +
    ". <br />"
);
document.write(
  "Третий способ <b>slice</b>: " +
    str.slice(2, 5) +
    " " +
    str.slice(6, 16) +
    ". <br />"
);

// Задание №4.
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

document.write("<span style='font-size:20px; color: teal'>Задание №4. </span>");

let arr = [4, 2, 5, 19, 13, 0, 10];
let resh = 0;

for (let i = 0; i < arr.length; i++) {
  koren = arr[i] ** 3;
  resh += koren;
}
document.write(Math.sqrt(resh) + "<br />");

// Задание №5.
// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

document.write("<span style='font-size:20px; color: teal'>Задание №5. </span>");

let a = prompt("Введите значение для a: "),
  b = prompt("Введите значение для b: "),
  c = a - b;

document.write(Math.abs(c));
document.write("<br />");
// Задание №6.
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

document.write("<span style='font-size:20px; color: teal'>Задание №6. </span>");

let date_time = new Date();

function zero(add) {
  if (add < 10) {
    return "0" + add;
  } else {
    return add;
  }
}

document.write(
  date_time.getHours() +
    ":" +
    date_time.getMinutes() +
    ":" +
    date_time.getSeconds() +
    " " +
    zero(date_time.getDate()) +
    "." +
    zero(date_time.getMonth() + 1) +
    "." +
    date_time.getFullYear() +
    "."
);

document.write("<br />");
// Задание №7.
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

document.write("<span style='font-size:20px; color: teal'>Задание №7. </span>");

let strokaSeventh = "aa aba abba abbba abca abea";

document.write(strokaSeventh.match(/ab+a/g) + ". <br />");
