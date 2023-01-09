'use strict'

// Выведите числа от 1 до 50 и от 35 до 8.
console.log('%cЗадание 1.1', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
for (let i=1; i<=50; i++){
    console.log(i)
}
console.log('%cЗадание 1.2', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
for (let i=35; i>=8; i--){
    console.log(i)
}
// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.
document.write('Задание 2 <br />')
let i = 89
while (i>=11){
    document.write(`${i} <br/>`)
    i--
}
// С помощью цикла найдите сумму чисел от 0 до 100.
console.log('%cЗадание 3', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
let sum = 0
i = 0
while (i<=100){
    sum +=i++
}
console.log('Сумма = ', sum)
// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).
console.log('%cЗадание 4', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
sum = 0
for (let i=1; i<=5; i++){
        sum +=i       
        console.log(`Сумма чисел числа ${i}`, sum)
}
// Выведите чётные числа от 8 до 56. Решить задание через while и for.
console.log('%cЗадание 5 (через while)', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
i = 8
while (i<=56){
    if (i%2==0) { 
        console.log(i) 
    } 
    i++
}
console.log('%cЗадание 5 (через for)', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
for (let i=8; i<=56; i++){
    if (i%2==0) {
        console.log(i);
    }
}
// Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10
// ...
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// ...
console.log('%cЗадание 6', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
let proizv = 0
for (let i=2; i<=10; i++){
    for (let a=2; a<=9; a++){
        proizv = a * i
        console.log(`${i} * ${a} = ${proizv}`)
    }        
}
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.
console.log('%cЗадание 7', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
let num = 0;
for (let n=1000; n>50; n/=2) {
    num++;
}
console.log('Количество итераций = ', num)
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.
console.log('%cЗадание 8', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
sum = 0
let n = 0
let average = 0
while (true) {
    let number = +prompt('Введите число')
    if (number == 0 || number == ''){
        break
    }
    sum+=number
    n++
}
average = sum / n
console.log(`Сумма чисел = ${sum}, Количество введенных чисел = ${n} Среднее арифметическое чисел = ${average}`)
// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
// 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
console.log('%cЗадание 9', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'
let space = ' ', min, max
// let int = parseInt(str)
console.log(str);
for (let i=0; i<str.length; i++){
    space += str[i];
    if (+str[i] && !+str[i+1]) {
        if (typeof min !== 'number' || space < +min) min = +space;
        if (typeof max !== 'number' || space > +max) max = +space;
        space = '';
    }
}
console.log('Min = ', min, 'Max = ', max)
// Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран;
// b. подсчитывает сколько цифр в числе n;
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
console.log('%cЗадание 10', 'padding: 20px 0; font-size: 18px; font-weight: bold;')
let p = +prompt('Введите произвольное целое число ')
let s = String(p)
let k =0
sum = 0
for (let i=0; i<s.length; i++){
    console.log(s[i])
    k++
    sum +=Number(s[i])
}
console.log('Количество всех цифр числа = ', k)
console.log('Сумма всех цифр числа = ', sum)
console.log(('' + p).split('').reverse().join(''));
