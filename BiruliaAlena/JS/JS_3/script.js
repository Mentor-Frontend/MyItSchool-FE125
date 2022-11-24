'use strict'

// задача 1 

let i = 1;
while (i <= 50) {
    console.log( i );
    i++;
}

let a = 35;
while (a >= 8) {
    console.log( a );
    a--;
}

// задача 2
// где тут нужно применять <br/>
let b = 89;
while (b >= 11) {
    console.log( b );
    b--;
}

//задача 3
let sumThree = 0;
let c = 1;
    for (let c = 1; c <= 100; c++) {
        sumThree += c;
        }   
console.log ( sumThree );

//задача 4 
let  sumFour=0;
let d=5;

for (let f=1; f <= d; f++) {
    sumFour=0;
    for (let g=1; g <= f; g++) {
        sumFour += g;
    }
    console.log(`sumFour ` + f + ` = ` + sumFour);
}

//задача 5
let r = 8;
while (r <= 56) {
    if (r % 2 == 0) {
        console.log(r);
    }
    r++;
}

for (let s=8; s <= 56; s++) {
    if (s % 2 == 0) console.log(s);
}

//задача 6 
let sumSix = 0;

for(let k=2; k <= 10; k++) {
    for (let m=2; m <=10; m++) {
        sumSix= k * m;
        console.log(k+`*`+m+`=`+sumSix);
    }
    console.log(``)
}

//задача 7 

let n = 1000;
let num = 0;

while(n > 50) {
    n = n/2;
    console.log(n);
    num++; 
    console.log(num);
}
console.log(`количество итераций ` + num);

// задача 8 ....как учесть отрицательные значения??? 

let num8 = 98760;

do {
    // num8 = prompt("введите число?");
}
while ( num8 >= 1) {
    if(num8 === '' || null || String || 0) alert(`недопустимое значение`);
}

//задача 9 

let q = `4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36`;
console.log(q, typeof q);

//задача 10 ... 











