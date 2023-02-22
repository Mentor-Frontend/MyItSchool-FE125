// task 1
let nam = prompt ('Ваше Имя', 'Имя');
let age = prompt ('Введи возраст' , 'Возраст');
let city = prompt ('Введи город проживания', 'Город');
let company = prompt ('Введи место работы','Место работы');
let phone = prompt ('Введи свой номер телефона','Телефон');
let email = prompt ('Введи электронную почту','Электронная почта');
document.write (`Меня зовут ${nam} . МНе ${age} лет . Я проживаю в городе ${city} и работаю в компании ${company} . Мои контактные данные: телефон ${phone} Эмейл ${email}.`);
// task 2
let born = 2022 - age;
document.write (` Родился в ${born} году`);
// task 3
let str = prompt('Введи 6 цифр', 'Цифры');
let num = Number(str);
let begin = (parseInt(num/1000)) ;
let end = num % 1000;
let begin1 = (parseInt(begin/100));
let begin21 = begin % 100;
let begin2 = (parseInt(begin21/10));
let begin3 = begin % 10;
let end1 = (parseInt(end/100));
let end21 = end % 100;
let end2 = (parseInt(end21/10));
let end3 = end % 10;
let sumbeg = begin1 + begin2 + begin3;
let sumend = end1 + end2 + end3;
let result = sumbeg == sumend;
if (result) {
    console.log ("Да")
}
else {
    console.log ("Нет")
};
// Task 4
let a = 0;
if (a > 0) {
    console.log("Верно")
}
else {
    console.log ("Неверно")
}
// task 5
let c = 10;
let b = 2;
let sum = c + b;
let razn = c - b;
let proizv = c * b;
let chasn = (c / b);
if (sum > 1 ) {
    console.log ("Квадрат суммы: ", sum**2)
}
else {
    console.log("Сумма: ", sum);
}
console.log("разность: ", razn);
console.log("ПРоизведение: ", proizv);
console.log("Частное: ", chasn);
// task 6
if(c > 2 && c < 11 || b >= 6 && b < 14) {
    console.log ("Verno");
}
else {
    console.log ("Neverno");
}
// Task 7
let n = prompt ('Введи число от 0 до 60', "0");
if (n > 0 && n <= 15){
    console.log ("1st quater");
}
else if (n > 15 && n <= 30) {
    console.log ("2nd quater");
}
else if (n > 30 && n <= 45) {
    console.log ("3rd quater");
}
else if (n > 45 && n <= 60) {
    console.log ("4th quater");
}
else {
    console.log ("Wrong value")
}
// task 8 
let day = prompt ('Enter a day number', "1");
if (day > 1 && day <= 10){
    console.log ("1st decade");
}
else if (day > 10 && day<= 20) {
    console.log ("2nd decade");
}
else if (day > 20 && day <= 31) {
    console.log ("3rd decade");
}
else {
    console.log ("Wrong value")
}
// task 9 
let days = prompt ("Enter days amount", "1");
let years = days / 365;
if (years < 1) {
    console.log ("less when 1 year")
}
else {
    console.log("Years amount is ", years);
}
let month = days / 31;
if (month < 1) {
    console.log ("less when 1 month");
}
else {
    console.log("Month amount is ", month);
}
let weeks = days / 7;
if (weeks < 1) {
    console.log ("less when 1 week");
}
else {
    console.log("Weeks amount is ", weeks);
}
let hours = days * 24;
console.log ("Hours amount is ", hours);
let minutes = hours * 60;
console.log ("Minutes amount is ", minutes);
let seconds = minutes * 60;
console.log ("Seconds amount is ", seconds);
// task 10
let toty = NaN;
if (day >= 1 && day<= 31) {
    console.log ('January');
    toty = 'Winter';
}
else if (day >= 32 && day< 60) {
    console.log ('February');
    toty = 'Winter';
}
else if (day >= 60 && day<= 90) {
    console.log ('March');
    toty = 'Spring';
}
else if (day >= 91 && day<= 120) {
    console.log ('April');
    toty = 'Spring';
}
else if (day >= 121 && day<= 151) {
    console.log ('May');
    toty = 'Spring';
}
else if (day >= 152 && day<= 181) {
    console.log ('June');
    toty = 'Summer';
}
else if (day >= 182 && day<= 212) {
    console.log ('July');
    toty = 'Summer';
}
else if (day >= 213 && day<= 243) {
    console.log ('August');
    toty = 'Summer';
}
else if (day >= 244 && day<= 273) {
    console.log ('September');
    toty = 'Autumn';
}
else if (day >= 274 && day<= 304) {
    console.log ('October');
    toty = 'Autumn';
}
else if (day >= 305 && day<= 335) {
    console.log ('November');
    toty = 'Autumn';
}
else if (day >= 336 && day<= 365) {
    console.log ('December');
    toty = 'Winter';
}
switch(toty){
case 'Winter' :
    console.log ('Time of the year is : ', toty);
    break;
case 'Spring' :
    console.log ('Time of the year is : ', toty);
    break;
case 'Summer' :
    console.log ('Time of the year is : ', toty);
    break;
case 'Autumn' :
    console.log ('Time of the year is : ', toty);
    break;
}



