// // task 1
// const arr1 = [1,2,3,4,5,];
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// task 2
// const arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] > -10 && arr2[i] < -3) {
//         console.log(arr2[i])
//     }

// }
// task 3
// const arr3 = [23,...Array.from(Array(34).keys(),x=>x+24)];
// for (let i = 0; i < arr3.length; i++) {            
//             console.log(arr3[i])
//  }
// let result3 = 0;
// for(let i = 0; i < arr3.length; i++) {
//     result3+= arr3[i];
// }
// console.log('summa is: ',result3);
// task 4
// const arr4 = ['10', '20', '30', '50', '235', '4005'];
// for (i = 0; i <= arr4.length; i++) {
//   let num4 = (arr4[i]);
//   let sym4 = num4[0];
//   if (sym4 == 1 || sym4 == 2 || sym4 == 5) {
//     console.log(num4);
//   }
// }
// task 5
// let arr5 = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс']; 
// for (let i = 0; i < arr5.length; i++) {
//     if (arr5[i] === 'сб') {
//         document.write(arr5[i], '<b>',' ');
//     } else if(arr5[i] === 'вс') {
//         document.write(arr5[i], '<b>',' ');
//     } else {  document.write(arr5[i],' ')}
 
// }
// task 6
// const arr6 = ['5','6','7','8','5','6','7'];
//     let value = arr6.slice(-1);
//     console.log (value);
// task 7 
    // let arr7 = [];  
    // while (true){  
    //   let number7 = prompt('Введите число');      
    //   if (!number7)) break;  
    //   arr7.push(+number7);
    // }  
    // let a7 = arr7.sort();
    // console.log(a7);
    // task 8
    // const arr8 = [12, false, 'Текст', 4, 2, -5, 0];
    // console.log(arr8.reverse());
    // task 9
    // const arr9 = [5, 9, 21, , , 9, 78, , , , 6];
    // let sum = 0;
    // for(let i=0; i<arr9.length; i++){
    //     if (arr9[i] == null){
    //         sum++
    //             }
    // }     
    // console.log(sum)
    // task 10
    // let arr10 = [48,9,0,21,2,4,0,84,76,8,4,13,2];
    // let arrZero = [];
    // let result10 = 0;
    // for (let i = 0; i<arr10.length; i++){
    //     if(arr10[i] == 0 ) {
    //     arrZero.push(i);
    //     } 
        
    // }
    // console.log(arrZero)
    // let arr10Fix = arr10.slice(arrZero[0],arrZero.at(-1));
    
    // for(let i = 0; i < arr10Fix.length; i++) {
    //         result10 += arr10Fix[i];}
    // if(arrZero.length < 1) {
    //             result10 = 0
    //         }
    //         console.log(result10, 'summa');
    // task 11
let i = 1;
let j = 0;
let max = prompt ('enter string numbers');
while (i <= max) {
 let space = "";
 let symbol = "^";
  for (j = 0; j < max - i; j++) {
    space += " ";
}
  
  for (j = 0; j < 2 * i - 2; j++) {
    symbol += "^";
}
  console.log(space + symbol);
  i++;
}
    

    



    
 