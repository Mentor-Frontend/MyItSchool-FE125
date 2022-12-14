"use strict"

// console.log('------Привет, object')

// const user = {};
// user.name = "John";
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// console.log('------Сумма свойств объекта')

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0;
//   for(let key in salaries) {
//     sum += salaries[key];
//     if(salaries == undefined) console.log('0');
//   }
//   console.log(sum);

//   console.log('------умножаем все числовые свойства на 2')

//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//   };

//   function multiplyNumeric(obj) {
//     for ( let key in obj) {
//         if (typeof obj[key] == "number") 
//             obj[key] *= 2;
//         }
//     }

//   multiplyNumeric(menu);
//   console.log(menu);

//   console.log('------Создайте калькулятор')

//   let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// // функцию-конструктор Accumulator(startingValue)

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// alert(accumulator.value);

// функция - конструктор подсчета нормы выработки 

let Worker = function(name) {
  this.todayDate = new Date().toLocaleDateString();
  this.name = name;
  this.personalNumber = + prompt('введите личный номер, 0000');
  this.workerOurPersonal = +prompt('количество отработанного времени');
  this.workerNormPersonal = +prompt('введите количество выполненных заказов за день');
  this.workerNormOur = 90;
  this.workerNorm = function() {
    this.workerNorm = this.workerNormPersonal - (this.workerNormOur * this.workerOurPersonal);
    if(this.workerNorm > 0) {
      this.workerNorm = 'норма выполнена';
    } else {
      this.workerNorm = 'норма не выполнена';
    }
}
}

let workerAlex = new Worker("Alex");
console.log(workerAlex);
workerAlex.workerNorm();

let workerSanta = new Worker("Santa");
console.log(workerSanta);
workerSanta.workerNorm();