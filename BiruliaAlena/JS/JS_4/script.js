"use sctrict"
// one 
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log (arr1[i]);
}

//two
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
let resultArr2 = arr2.filter (item => item < -3 && item > -10);
resultArr2 = resultArr2.join (",");
    console.log (resultArr2);

// three
let arr3 = [];
let sumArr3 = 0;

for (let c = 23; c <= 57; c++) {
    arr3.push(c);
    sumArr3 += c;
}
console.log (arr3);
console.log (sumArr3);

//four 
let arr4 = ['10', '20', '30', '50', '235', '3000'];
console.log (arr4.indexOf('1', '2', '5'));




//five 

let arr5 = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];











