// Task #1
document.writeln ('Task #1', '<br/>');
var name = prompt('Ваше имя?'),
    age = prompt('Сколько Вам лет?'),
    city = prompt('В каком городе Вы проживаете?'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваша электронная почта?'),
    company = prompt('В какой компании Вы работаете?');
document.writeln('Меня зовут ', name, '. Мне ', age, ' лет. ', 'Я проживаю в городе ', city, ' и работаю в компании ', company, '. Мои контактные данные: ', phone, ', ', email, '.', '<br/>');
// Task #2
document.writeln ('Task #2', '<br/>');
document.writeln('\n', name, ' родился/ась в ', 2022 - age, ' году.', '<br/>');
// Task #3
document.writeln ('Task #3', '<br/>');
let stringOfNumber = '123123';
if ((stringOfNumber[0] + stringOfNumber[1] + stringOfNumber[2]) == (stringOfNumber[3] + stringOfNumber[4] + stringOfNumber[5])) {
    document.writeln('YES', '<br/>');
}
else {
    document.writeln('NO', '<br/>');
}
// Task #4
document.writeln ('Task #4', '<br/>');
let a = -3;
if (a > 0) {
    document.writeln('Верно', '<br/>');
}
else document.writeln('Неверно', '<br/>');
// Task #5
document.writeln ('Task #5', '<br/>');
let aFifeTask = 10,
    b = 2;
document.writeln(aFifeTask + b, '<br/>');
document.writeln(aFifeTask - b, '<br/>');
document.writeln(aFifeTask * b, '<br/>');
document.writeln(aFifeTask / b, '<br/>');
if (aFifeTask + b > 1) {
    document.writeln((aFifeTask + b) ** 2, '<br/>');
}
// Task #6
document.writeln ('Task #6', '<br/>');
if (2 < aFifeTask && aFifeTask < 11 ||  6 <= b && b < 14) {
    document.writeln('Верно', '<br/>');
}
else document.writeln('Неверно', '<br/>');
// Task #7
document.writeln ('Task #7', '<br/>');
let n = 17;
if (n >= 0 && n < 15) {
    document.writeln('Первая четверть часа', '<br/>');
}
else if (n >= 15 && n < 30){
    document.writeln('Вторая четверть часа', '<br/>');
}
else if (n >= 30 && n < 45){
    document.writeln('Третья четверть часа', '<br/>');
}
else if (n >= 45 && n < 60){
    document.writeln('Четвёртая четверть часа', '<br/>');
}
else if (n >= 60){
    document.writeln('В часе только 60 минут!', '<br/>');
}
else if (n < 0){
    document.writeln('Минута не может быть отрицательной!', '<br/>');
}
// Task #8
document.writeln ('Task #8', '<br/>');
let day = 25;
if (day >= 1 && day < 10) {
    document.writeln('Первая декада месяца', '<br/>');
}
else if (day >= 10 && day < 20){
    document.writeln('Вторая декада месяца', '<br/>');
}
else if (day >= 20 && day < 32){
    document.writeln('Третья декада месяца', '<br/>');
}
else if (day >= 32){
    document.writeln('Упс! В месяце бывает максимум 31 день(', '<br/>');
}
else if (day <= 0){
    document.writeln('Такого не бывает, извините!', '<br/>');
}