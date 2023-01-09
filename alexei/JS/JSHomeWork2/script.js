'use strict'
let myname = prompt('Укажите ваше имя: ')
let age = prompt('Укажите ваш возраст: ')
let city = prompt('Укажите ваш город: ')
let phone = prompt('Укажите ваш телефон: ')
let email = prompt('Укажите ваш email: ')
let company = prompt('Укажите вашу компанию: ')
document.write(`Меня зовут ${myname}. \nМне ${age} лет. \nЯ проживаю в городе ${city} и работаю в компании ${company}. \nМои контактные данные: ${phone}, ${email}.\n`)

let year = new Date()
let birthYear = year.getFullYear() - age
document.write(`${myname} родился в ${birthYear} году.\n`)

let numbers = prompt('Введите 6 цифр: ')
let sumNumbers = numbers[0]+numbers[1]+numbers[2] == numbers[3]+numbers[4]+numbers[5] ? 'да' : 'нет'
document.write(sumNumbers)

let a = 1
if (a > 0)
console.log('\nВерно')
else
console.log('\nНе верно');

a = 10
let b = 2
let summa = a+b
let raznost = a-b
let proizvedenie = a*b
let chastnoe = a/b
let stepen = summa > 1 ? console.log(Math.pow(summa, 2)) : console.log('Сумма меньше 1')

if ((a >= 2 && a<=11) || (b >= 6 && b <= 14))
console.log('Верно')
else
console.log('Не верно');

let min = 37
console.log(min)
if (min >= 0 && min <= 14) 
console.log('Первая четверть часа')
else if (min >= 15 && min <= 29) 
console.log('Вторая четверть часа')
else if (min >= 30 && min <= 44) 
console.log('Третья четверть часа')
else if (min >= 45 && min <= 60)
console.log('Четвертая четверть часа')

let day = 17
console.log(day)
let decada = (day <= 10) ? 'Первая декада месяца' : ((day > 10) && (day <=20)) ? 'Вторая декада месяца' : 'Третья декада месяца'
console.log(decada)


let days = +prompt('Введите количество дней')
let resultYears = days / 365
let resultMonth = days / 31
let resultWeeks = days / 7
let resultHours = days * 24
let resultMinutes = resultHours * 60
let resultSeconds = resultMinutes * 60
if (days < 365){
    console.log('Меньше года')}
else {
    console.log('Года :', resultYears)}

if (days < 31){
    console.log('Меньше месяца')}
else {
    console.log('Месяцы :', resultMonth)}
    
if (days < 7){
    console.log('Меньше недели')}
else {
    console.log('Недель :', resultWeeks)}

console.log('Часов', resultHours)
console.log('Минут', resultMinutes)
console.log('Секунд', resultSeconds)


let month
if (days >= 1 && days <= 31){
    console.log('Январь')
    month = 1}
if (days > 31 && days <=59 ){
    console.log('Февраль')
    month = 2}
if (days > 59 && days <= 90){
    console.log('Март')
    month = 3}
if (days > 90 && days <= 120){
    console.log('Апрель')
    month = 4}
if (days > 120 && days <= 151){
    console.log('Май')
    month = 5}
if (days > 151 && days <= 181){
    console.log('Июнь')
    month = 6}
if (days > 181 && days <= 212){
    console.log('Июль')
    month = 7}
if (days > 212 && days <= 243){
    console.log('Август')
    month = 8}
if (days > 243 && days <= 273){
    console.log('Cентябрь')
    month = 9}
if (days > 273 && days <= 304){
    console.log('Октябрь')
    month = 10}
if (days > 304 && days <= 334){
    console.log('Ноябрь')
    month = 11}
if (days > 334 && days <= 365){
    console.log('Декабрь')
    month = 12}

switch (month){
    case 1:
    case 2:
    case 12:
        console.log('Зима')
        break
    case 3:
    case 4:
    case 5:
        console.log('Весна')
        break
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break
    case 9:
    case 10:
    case 11:
        console.log('Осень')
        break
    default:
        console.log("Нет такого месяца")
}
    
    


    
    


