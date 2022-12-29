// console.log('------------ 1 задание -----------');

// function sum_del(a,b) {
//   return (a-b)/2
// }
// let result = sum_del(10,6);
// alert(result)


// console.log('------------ 2 задание -----------');

// let kvadrat = kvadro(10);

// function kvadro(a) {
//     return a ** 2
// }

// let cubik = cub(10);

// function cub(b) {
//     return b ** 3
// }

// console.log(kvadrat)
// console.log(cubik)

// console.log('------------ 3 задание -----------');

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
// }
// let min_max = min(10,15)
// alert(min_max)

// function max(a, b) {
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
// let max_max = min(20,15)
// alert(max_max)

// console.log('------------ 4 задание -----------');

// function getArrNumbers() {
//   const number1 = +prompt('Дай первое число')
//   const number2 = +prompt('Дай второе число')
//   if (number1 < number2) {
//     return [number1, number2]
//   } else {
//     return [number2, number1]
//   }
// }

// function outputArr() {
//     const diapozonArr = getArrNumbers()

//     const array = [];

//     for(let i = diapozonArr[0]; i <= diapozonArr[1]; i++) {
//         array.push(i);
//     }
    
//     return array
// }

// console.log(outputArr())

// console.log('------------ 5 задание -----------');

// function isEven(number) {
//     var x
//     if (number % 2 == 0) {
//         x = true;
//     } else {
//         x = false;
//     }
//     return x;
// }

// alert(isEven(12));

// console.log('------------ 6 задание -----------');

// function arrayarr() {
//     const getEven = array => {
//         return array.filter(number => isEven(number));
//     };
//     console.log(getEven([2, 5, 0, -5, 20, 80, 17, -32, 4, 6, 8]));
// }
// arrayarr();

// function clearNotEven(arr) {
//   const indexArr = [];
//   arr.forEach((el,i) => {
//     if (!isEven(el)) {
//       indexArr.push(i)
//     }
//   });
//   indexArr.forEach(indexMainArr => {
//     arr.splice(indexMainArr,1)
//     indexArr = indexArr.map(indexMainArr => indexMainArr - 1)
//   })
// }

// console.log('------------ 7 задание -----------');

// let symbol = prompt('символ');
// function hefren(n){//amountRows
//   for(let i = 1; i <= n; i++){
//     let m = '';
//     for(let j = 0; j < i; j++){
//       m+= symbol === undefined || symbol.length-1 || symbol === ' ' ? i : symbol;
//     };
//     console.log(m+'\n')
//   }
// };
// hefren(prompt('КОЛИЧЕСТВО РЯДОВ'))

// console.log('------------ 8 задание -----------');

// function writeTriangle(rows, isReverse) {
//     const indexes = new Array(rows).fill(0).map((_, i) => i);
//     if (isReverse) indexes.reverse();
//     for (let i of indexes) {
//         const spaces = ' '.repeat(rows - 1 - i);
//         console.log(spaces + '*'.repeat(1 + i*2) + spaces);
//     }
// }
 
// const n = +prompt('Введите число строк:');
// writeTriangle(n);
// if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

// console.log('------------ 9 задание -----------');

// function getArrFibonacci() {
  // const arr = [];
  // for (let i = 0; i < 1000; i++) {
  //   if (i === 0 || i === 1) {
  //     arr.push(i)
  //   }
  //   if (i === arr.at(-1) + arr.at(-2)) {
  //     arr.push(i)
  //   }
  // }
  // return arr
// }

// console.log(getArrFibonacci());

// console.log('------------ 10 задание -----------');

// const sumNumeral = (n) => {
//   while (n > 9) {
//     const str = String(n)
//     n = 0
//     for (let i = 0; i < str.length; i++) {
//       n += +str[i]
//     }
//   }
//   return n
// }

// console.log(sumNumeral(123599))

// console.log('------------ 11 задание -----------');

// function outputNumber(arrNumbers) {//[9]
//   console.log(arrNumbers[0])// 9
//   arrNumbers.splice(0,1)// []
//   if (arrNumbers.length) {
//     outputNumber(arrNumbers)
//   }
// }

// outputNumber([1,5,9])

console.log('------------ 12 задание -----------');
