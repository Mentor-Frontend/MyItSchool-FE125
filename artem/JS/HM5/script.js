console.log('------------ 1 задание -----------');

console.log('------------ 2 задание -----------');

function sum_del(a,b) {
    return (a-b)/2
}
let result = sum_del(10,6);
alert(result)

// 2.2
let kvadrat = kvadro(10);

function kvadro(a) {
    return a ** 2
}

let cubik = cub(10);

function cub(b) {
    return b ** 3
}

console.log(kvadrat)
console.log(cubik)

console.log('------------ 3 задание -----------');

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
let min_max = min(10,15)
alert(min_max)

function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
let max_max = min(20,15)
alert(max_max)

console.log('------------ 4 задание -----------');

function createArray(length) {
    length = prompt('Выберите диапазон чисел');

    var array = [];

    for(var i = 1; i <= length; i++) {
        array.push(i);
    }
    
    console.log(array);
}

createArray()

console.log('------------ 5 задание -----------');

function isEven(number) {
    var x
    if (number % 2 == 0) {
        x = true;
    } else {
        x = false;
    }
    return x;
}

alert(isEven(12));

console.log('------------ 6 задание -----------');

function arrayarr() {
    const getEven = array => {
        return array.filter(number => !(number % 2));
    };
    console.log(getEven([2, 5, 0, -5, 20, 80, 17, -32, 4, 6, 8]));
}
arrayarr();

console.log('------------ 7 задание -----------');

let symbol = prompt('символ');
function hefren(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    console.log(m+'\n')
  }
};
hefren(prompt('число'))

console.log('------------ 8 задание -----------');

function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if (isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}
 
const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

console.log('------------ 9 задание -----------');