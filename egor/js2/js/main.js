"use strict";
// let my_name= prompt("Меня зовут", "Yagor");
// let age = prompt("Мне лет", "20 лет/год" );
// let city = prompt("Живу в городе ", "Гомель" );
// let phone = prompt("Мой номер телефона ", "+375251435231" );
// let email = prompt("Мой email ", "seksi_pupok@mail.ru" );
// let company = prompt("Компания в которой я работаю  ", "OOO_ArProfStroi" );
// alert(`Тебя зовут ${my_name} тебе ${age} живешь в городе ${city} твой номер телефона ${phone} твоя электронная почта ${email} компания в которой ты работаешь ${company}`);
// alert(2022-`${age}`)
// let a = prompt('Правильно-ли данное выражение?', {b=c});
// let b = "1+1+1";
// let c = "1+1+1";
// if (a == (b==c)) {
//         alert( "true" )
//     } else if (a !== b) {
//         alert( "false" )
//     }




// let a = prompt('Верно-ли данное выражение: 1+1+1=1+1+1? ', '');

// if (a == 'da') {
//    alert('Верно!');
// } else {
//     alert('Неправильно');
// }


// let a = prompt(`Верно-ли данное выражение: b>c? `, '');
// let b = 1
// let c = 0
// if (b > c) {
//    alert('Верно!');
// } else {
//     alert('Неправильно');
// }
	

// for ( let i = 5; i < 21; i++ ) {
//     if (i%2==0) { 
//         console.log(i) ;
//     }continue
// }


// let i=9;
// do {
//     if (i===9) {
//         console.log("девять");
//     }
//     if (i===8) {
//         console.log("восемь");

//     }
//     if (i===7) {
//         console.log("семь");
//     }
//     i--
//  } while (i >= 7 && i <= 9)


// let a=10,
//     b=2.
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// if ((a+b)> 1) {
//     console.log((a+b)**2)
// }


// if (a > 2 && a < 11 || b >=6 && b<14) {
//     console.log("верно")
// }


// var n = 14;
// if (n >= 0 && n >= 14) {
// 	console.log('В первую четверть.');
// }
// if (n >= 15 && n <= 30) {
// 	console.log('Во вторую четверть.');
// }
// if (n >= 31 && n <= 45) {
// 	console.log('В третью четверть.');
// }
// if (n >= 46 && n <= 59) {
// 	console.log('В четвертую четверть.');
// }


// let l = 31;
// if ( l >=0 && l < 11) {
//     console.log("первая декада");
// } else if ( l >= 11 && l < 21) {
//     console.log("вторая декада");
// } else if ( l >= 21 && l <= 31) {
//     console.log("третья декада");
// }


// let days = +prompt(`Введите колличство дней: `),
//     years = days/365,
//     months = days/31,
//     weeks = days/7, 
//     hours = days/0.041,
//     minutes = days/0.00069,
//     seconds = days/0.000012;
// if (years >= 1){
//     console.log ('Года: '+ years + '. ')
// } else if (years < 1 ) {
//     console.log('Меньше года. ')
// };
// if (months >= 1) {
//     console.log('Месяца: ' + months + '. ');
// } else if ( months < 1 ) {
//     console.log('Меньше месяца. ');
// }
// if (weeks >= 1) {
//     console.log('Неделя: ' + weeks + '. ');
// } else if ( weeks< 1 ) {
//     console.log('Меньше недели. ');
// }
// if (hours >= 1) {
//     console.log('Часы: ' + hours + '. ');
// } else if ( hours < 1 ) {
//     console.log('Меньше часа. ');
// }
// if (minutes >= 1) {
//     console.log('Минуты: ' + minutes + '. ');
// } else if ( minutes < 1 ) {
//     console.log('Меньше минуты. ');
// }
// if (seconds >= 1) {
//     console.log('Секунды: ' + seconds + '. ');
// } else if ( minutes < 1 ) {
//     console.log('Меньше секунды. ');
// }

// ТРЕТЬЕ ЗАДАНИЕ

// 3.1
// let a = 1,
//     b = 8. 
// while (a < 51 && 36 > b) {
//     console.log( a,b )
//     a++
//     b++
// }

// 3.2 
// let a = 11;

// while (a < 89) {
//     console.log( a )
//     a-- 
// }

// 3.3
// var sum = 0;

// for (var i = 1; i <= 100; i++) {
// sum += i;
// }
// console.log(sum)

// 3.4
// let sum1 = 1,
//     sum2 = 2+2,
//     sum3 = 3+3,
//     sum4 = 5+5.


// for (let a = 1, b = 2, c = 3 ; a <= 5; a++) {
//     sum1 = a;
//     sum2 += b;
//     sum3 += c;
//     sum4 += a;
// }
// console.log(sum1)
// console.log(sum2)
// console.log(sum3)
// console.log(sum4)

// 3.5 
// for (let i=8; i<=56; i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }


// 3.6
//  document.write("<h1>Таблица умножения</h1>");
 
// for (let j = 1; j <= 10; j++) {
//   document.write("<div style='float: left; width: 80px; margin-right: 1px;'>");

//   for (let i = 1; i <= 10; i++) {
//     document.write('<div style="border: 1px solid black; margin: 1px;">' +i + "*" + j + "=" + (i * j) + "</div>");
//   }

//   document.write ("</div>");
// }

// 3.7
// let n = 1000;
// for (let num=0; 50 < n; num++) {
//   console.log(n/=2);console.log( num );
// }

// 3.8 
// let a = 0, 
//     b = 0,
//     c = 0;
// c = prompt( "Введите число", 0 );
 
// while ((c != 0) && (c != null)) {
// a = a + 1;
// b = b + c;
// c = prompt( "Введите ещё число" );
// }
 
// alert( "Чисел введено: " + a ); 
// alert( "Сумма чисел: " + b );         // s после цикла присваивается тип данных string!!!
// alert( "Среднее арифметическое: " + (b/a) );
// let sum = 0;
// String(123).split(' ').forEach((element, index, array)=> {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     sum += sum + +element
// })
// console.log(sum);
// String(123).length
// const arrReverse = String(123)
// console.log(arrReverse);
// console.log(arrReverse.join(' '));
// Number(['1','2','3'].reverse().join(' '))

// 4.1
// let num = [1, 2, 3, 4, 5];
// for (let i = 0; i<num.length; i++){
//         document.write(num[i])
// }

// 4.2
// let num = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// let result =num.filter(item => item  < -2)
//     .sort((a,b)=> a-b)
//     document.write(result + '<br />')


// const arr = [1,2,3,4,-6,10,-5,78];
// const result = arr.filter(item => item < 0)
// 				  .sort((a, b) => a - b);

// console.log(result);

// 4.3
// let num = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
// let sum = 0;
// for (let i=0; i<num.length; i++) {
//     if ( num[i] > 0){
//         sum += num[i]
//     }
// }
// console.log(sum);
// 4.4
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }
// 4.5
// let days = ['пн','вт','ср','чт','пт','сб','вс'];
// for (let i = 0; i < days.length; i++){
//     if (i<4) {
//         document.write( days[i] + '<br>')
//     }
//     if (i > 4) {
//         document.write('<b>' + days[i] + '<br> ');
//     } 
// }

// 4.6
// let num = [1,2,3];
// let lastItem = num.length -1;
// for (let i = 0; i<num.length;i++){
//     console.log(num[lastItem]);
// }

// 4.7
// let arr = [];

// let check = true;
// let sum = 0;
// while(check){
//     let digit = prompt('Введите число', 0);
//     if(digit === '') {
//         check = false;
//     } else if(digit === null || isNaN(digit)){
//         check = false;
//     } else {
//         arr.push(Number(digit));
//     }

// }

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

// alert(sum);
// 4.8
// let arr = [12 , false, 'Текст', 4, 2, -5, 0]
// while(arr.length>0) {
//     document.write(arr.reverse() + '<br />');
//     arr--;
// }
// 4.9
// let probel = [5, 9, 21, , , 9, 78, , , , 6];
// alert(probel.length-1)

