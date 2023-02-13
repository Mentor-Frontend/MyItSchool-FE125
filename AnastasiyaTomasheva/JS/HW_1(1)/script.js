'use strict'

/* Задание 1. Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
true, «true», соответственно. При помощи оператора определения типа (typeof)
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
консоль (console.log()) типы операторов.

В HTML */

/* Задание 2. Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений:
5 % 3;
3 % 5;
5 + '3';
'5' – 3;
75 + 'кг';
785 * 653;
100 / 25;
0 * 0;
0 / 2;
89 / 0;
98 + 2;
5 – 98;
(8 + 56 * 4) / 5;
(9 - 12) * 7 / (5 + 2);
+"123";
1 || 0;
false || true;
true > 0.
Проверьте (выведите в консоль) каким типам принадлежат переменные. */

let a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    a17,
    a18;

a1 = 5 % 3;
console.log(a1, typeof a1); // 2, number

a2 = 3 % 5;
console.log(a2, typeof a2); // 3, number

a3 = 5 + '3';
console.log(a3, typeof a3); // 53, string

a4 = '5' - 3;
console.log(a4, typeof a4); // 2, number

a5 = 75 + 'кг';
console.log(a5, typeof a5); // 75 кг, string

a6 = 785 * 653;
console.log(a6, typeof a6); // 512605, number

a7 = 100 / 25;
console.log(a7, typeof a7); // 4, number

a8 = 0 * 0;
console.log(a8, typeof a8); // 0, number

a9 = 0 / 2;
console.log(a9, typeof a9); // 0, number

a10 = 89 / 0;
console.log(a10, typeof a10); // Infinity, number

a11 = 98 + 2;
console.log(a11, typeof a11); // 100, number

a12 = 5 - 98;
console.log(a12, typeof a12); // -93, number

a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13); // 46.4, number

a14 = (9 - 12) / 7 * (5 + 2);
console.log(a14, typeof a14); // -3, number

a15 = +'123';
console.log(a15, typeof a15); // 123, number

a16 = 1 || 0;
console.log(a16, typeof a16); // 1, number

a17 = false || true;
console.log(a17, typeof a17); // true, boolean

a18 = true > 0;
console.log(a18, typeof a18); // true, boolean

/* Задание 3. Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam. */

let width = 10,
    height = 23,
    SPryam = (width * height) + 'см';

console.log(SPryam);

/* Задание 4. Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra. */

const numberPi = 3.14; 
let heightOfCyl = 10, 
    VCilindra = (numberPi * ((a7 / 2) ** 2) * heightOfCyl) + ' ' + 'м';

console.log(VCilindra);

/* Задание 5. Найдите площадь круга (SKruga) с радиусом 5см (r). 

S = pr2
*/

let r = 5,
    SKruga = (numberPi * r ** 2) + ' ' + 'см';
console.log(SKruga);

/* Задание 6. Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h). */

let a = 5,
    b = 7,
    h = 10,
    STrap = (1/2 * (a + b) * h) + 'см';

/* Задание 7. Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata. */

let s = 2000000,
    p = 10 / 100 / 12,
    years = 5 * 12,
    payEveryMonth = s * ((p * (1 + p) ** years) / ((1 + p) ** years - 1)),
    Pereplata = years * payEveryMonth - s;
console.log(Pereplata);

/* Задание 8. Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780. */

a = 8,
b = 3;

let x = (16 - a) / 2 + b;
console.log(x);
console.log(x = (a - 15 * b) / (b - 6));
console.log(23780 / (1 + 2 + a + b));


