// 'use strict'

// // задача 1 

// let i = 1;
// while (i <= 50) {
//     console.log( i );
//     i++;
// }

// let a = 35;
// while (a >= 8) {
//     console.log( a );
//     a--;
// }

// // задача 2
// // где тут нужно применять <br/>
// let b = 89;
// while (b >= 11) {
//     console.log( b );
//     b--;
// }

// //задача 3
// let sumThree = 0;
// let c = 1;
//     for (let c = 1; c <= 100; c++) {
//         sumThree += c;
//         }   
// console.log ( sumThree );

// //задача 4 
// let  sumFour=0;
// let d=5;

// for (let f=1; f <= d; f++) {
//     sumFour=0;
//     for (let g=1; g <= f; g++) {
//         sumFour += g;
//     }
//     console.log(`sumFour ` + f + ` = ` + sumFour);
// }

// //задача 5
// let r = 8;
// while (r <= 56) {
//     if (r % 2 == 0) {
//         console.log(r);
//     }
//     r++;
// }

// for (let s=8; s <= 56; s++) {
//     if (s % 2 == 0) console.log(s);
// }

// //задача 6 
// let sumSix = 0;

// for(let k=2; k <= 10; k++) {
//     for (let m=2; m <=10; m++) {
//         sumSix= k * m;
//         console.log(k+`*`+m+`=`+sumSix);
//     }
//     console.log(``)
// }

// //задача 7 

// let n = 1000;
// let num = 0;

// while(n > 50) {
//     n = n/2;
//     console.log(n);
//     num++; 
//     console.log(num);
// }
// console.log(`количество итераций ` + num);

// // задача 8 ....как учесть отрицательные значения??? 

// let num8;
// let sum = 0;
// let i8 = 0;

// do {
//     num8 = prompt("введите число");
//     if (isNaN(+num8)) {
//         alert(`недопустимое значение`);
//     } else {
//         sum =+ +num8
//         i8++;
//     }
// } while ( num8 === '' || num8 === 0)

// console.log(sum / i8)

//задача 9 

let q = `4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36`;

// console.log(q);
// console.log(q, typeof q);

// for (let i = 0; i < q.length; i++) {
//     console.log(q[i])
// }

const arr = [];

//arr = []; - net

const arrTypes = [1,'sd', null, undefined, true, [1,2,3]];

for (let i = 0; i < arrTypes.length; i++) {
    console.log(arrTypes.at(i))
}

const arrSplit = q.split(' ');
[4,98,4,6,1,32,4,65,4,3,5,7,89,7,10,1,36];
let sum = 0;
String(123).split('').forEach((el, i, array) => {
    // console.log(i);// 16
    // console.log(el);// 36
    // console.log(array);// arrSplit
    sum = sum + +el
})
console.log(sum)

String(123).length

const arrReverse = arrSplit.reverse();

console.log(arrReverse);
console.log(arrReverse.join(''));

Number(['1','2','3'].reverse().join(''))

console.log(new Date())

new RegExp('a');
const regexp = /[A-ZА-Я]/;
console.log('12345f'.search(regexp));
//задача 10 ... 

console.log('1');













