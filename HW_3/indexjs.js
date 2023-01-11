// // task1
// let it1_1 = 1;
// while (it1_1 <= 50) {
//     console.log (it1_1);
//     it1_1++;
// }
// let it1_2 = 35;
// while (it1_2 >= 8) {
//     console.log (it1_2);
//     it1_2--;
// }
// // task 2
// let it2 = 89;
// while (it2 >= 11) {
//     document.write ('</br>', it2);
//     it2--;
// }
// // task 3
// let sum3 = 0
// for (let i3 = 0; i3<=100;i3++) {
//     sum3 = sum3 + i3;    
// }
// console.log(sum3)
// // task 4
// let sum4 = 0;
// for (let i4 = 1; i4<=5;i4++) {
//     sum4 = sum4 + i4; 
//     console.log(sum4)   
// }
// // task5
// let num5 = 0;
// for (let i5 = 8; i5<=56;i5++) {
//     while(i5 % 2 != 1){
//         console.log (i5);
//         break;
//     }    
     
// }
// // task6
// let i6_2 = 2;
// let sum6 = 0;
// for(let i6_1 = 2; i6_1 <= 10; i6_1++ ) {
//     for(let i6_2 = 2; i6_2 <= 10; i6_2++ ) {
//         sum6 = i6_1 * i6_2;
//         document.write(i6_1, '*' , i6_2, '=' , sum6, '</br>' );
//         continue;
//     } 
// }
// task 7
// let n7 = 1000;
// let num7;
// for(num7 = 0; n7>50;){
//     num7++;
//     n7 = n7/2;
// };
// console.log (n7,num7);
// // task 8
n8 = prompt('enter value');
let num8 = 0;
let sum8 = 0;
let med = 0;
let n8_1 = 0;
if (isNaN(+n8)) {
    alert('wrong value');
}
while(n8 != null && n8 != 0){     
   num8 = ++num8;
   sum8 = sum8 + n8/1;
   med = sum8 / num8;
   n8 = prompt('enter value');   
}
console.log(sum8,med);
alert('wrong value');
// // task 9
// const string = (`4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57`);
//     const arr9 = string.split(' ');
//    function getMaxOfArray (...arr9){
//     return Math.max(...arr9)
//    }
//    let min = Math.min (...arr9)
//    console.log ('Max: ', Math.max(null, ...arr9), 'Min: ', min);
// //    task 10 
// let n10 = prompt('enter a number');
// let arr10 = n10.split('');
// let sum = 0;
// for(i=0; i < arr10.length; i++) {
    
//     sum += +arr10[i];
// }
// console.log(arr10,'Lenght is ',arr10.length,'reverse; ', arr10.reverse(),'sum= ',sum );




   









