"use strict"
//  Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
// расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.
let Calc = function() {
    this.get = function() {
      this.a = +prompt('Введите первое число')
      this.b = +prompt('Введите второе число')
      this.oper = prompt('Введите операцию +, -, *, /');
      this.operation()
    }
    this.operation = function() {
      switch (this.oper) {
        case '/':
         this.rez = this.a / this.b
          break
        case '*':
          this.rez = this.a * this.b
          break
        case '+':
          this.rez = this.a + this.b
          break
        case '-':
          this.rez = this.a - this.b
          break
        default:
          this.rez = 0
      }
      this.result()
    }
    this.result = function() {
      alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.rez);
    }
}
let calc = new Calc()
calc.get()
