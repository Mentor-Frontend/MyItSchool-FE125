"use sctrict"

// one 

function getResult (a, b, c) {
    return (a - b) / c;
};

console.log(getResult(25, 5, 4));

//two

function getTwoSquare(a) {
    return a*a;
}

function getTwoСube(a) {
    return getTwoSquare(a)*a;
}

console.log(getTwoSquare(6));
console.log(getTwoСube(8));

//three

function getMin (a, b) {
    if (a > b) return b
        else return a;
}

function getMaxn (a, b) {
    if (a > b) return a
        else return b;
}

console.log(getMin (5, 6));
console.log(getMaxn (5, 6));

// four
// function getArrNumbers() {
//     let number1 = +prompt ('введите 1 чисел');
//     let number2 = +prompt ('введите 2 чисел');
//     return [number1, number2];
// }
// getArrNumbers();

// function outputArray() {
//     const diapasonArr = getArrNumbers();
//     const arr4 = [];
//     for (let i = diapasonArr[0]; i <= diapasonArr[1]; i++) {
//         arr4.push(i);
//         }
//     return array
// }
// console.log(outputArray());


//five

function isEven(number) {
    let x;
    if( number % 2 == 0) {
        x = true;
    } else { 
        x == false;
    }
    return x;
}

console.log(isEven(12));

// six

function arrayArr() {
    const getEven = array => {
        return array.filter(number => isEven(number));
    }
    console.log(getEven([2, 5, 0, -5, 20, 17, -12, 4, 6, 8]))
}
arrayArr()

//seven

let symbol = prompt('символ');
function makeFigure (amointRows) {
    for(let i = 0; i <= amointRows; i++) {
        let m = '';
        for(let j = 0; j < i; j++) {
            m += symbol === undefined || symbol.length-1 || symbol === ' ' ? i : symbol;
        }
    console.log(m+`\n`)
    }
}
makeFigure(prompt('количество рядов'))


//eight разобрать!!!

function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if(isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}

const n =  +prompt('введите число строк');
writeTriangle(n);
if (confirm('ввести перевернутый')) writeTriangle(n, true);

//nine

function getArrFibonacci() {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
        if (i === 0 || i === 1) {
            arr.push(i);  
        }
        if (i === arr.at(-1) + arr.at(-2))
            arr.push(i);
    }
    return arr;
}
console.log(getArrFibonacci());

//ten

const sumNumeral = (n) => {
    while (n > 9) {
        const str = String(n)
        n = 0
        for (let i = 0; i < str.length; i++) {
            n += +str[i]
        }
    }
    return n
}
console.log(sumNumeral(856))


//eleven

function outputNumber(arrNumber) {
    console.log(arrNumber[0])
    arrNumber.splice(0,1)
    if (arrNumber.length) {
        outputNumber(arrNumber)
    }
}

console.log(outputNumber([1,5,9]))


// 12 не делать 
// 13 сделать ч\з регулярные выражения 

