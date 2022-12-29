console.log('---------- ЗАДАНИЕ 1 ------------');

let i = 1;

while(i <= 50) {
    console.log(i)
    i++;
    
}

console.log('---------- ЗАДАНИЕ 1.2 ------------');

let a = 35;

while(a >= 8) {
    console.log(a);
    a--;
}

console.log('---------- ЗАДАНИЕ 2 ------------');

let e = 89;

while(e >= 11) {
    console.log(e);
    e--;
}

console.log('---------- ЗАДАНИЕ 3 ------------');

let b = 100;
let sum = 0;

for(let c = 1; c <= b; c++) {
    sum += c;
}
console.log(sum);

console.log('---------- ЗАДАНИЕ 4 ------------');

let z = 5;

for(let n = 1; n <= z; n++) {
    sum = 0;
    for(let l = 1; l <= n; l++) {
        sum += l;
    }
    console.log('Sum ' + n + ' = ' + sum);
}


console.log('---------- ЗАДАНИЕ 5 ------------');

for(let q = 8; q <= 56; q++) {
    if(q % 2 == 1) continue;
    console.log(q)
}


console.log('---------- ЗАДАНИЕ 6 ------------');