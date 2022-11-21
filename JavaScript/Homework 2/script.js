// Задание №1.
// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
// городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».

let user_name = prompt('Как вас зовут?');
age = prompt('Сколько вам лет?');
city = prompt('В каком городе вы живёте?');
phone = prompt('Укажите ваш номер телефона:');
email = prompt('Укажите ваш E-mail:');
company = prompt('Где вы работаете?');

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №1.</span>");
document.write('Меня зовут ' + user_name + '. Мне ' + age + 'лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.<br />');

// Задание №2.
// Определите по введенному возрасту (исп. значение из задания 1) год рождения.
// Выведите на экран «%Имя% родился в %Год% году.».

let year = 2022 - age;

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №2.</span>");
document.write(' ' + user_name + ' родился(родилась) в ' + year + ' году.<br />');

// Задание №3.
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let line = '613579';

first_amount = line[0] + line[1] + line[2];
second_amount = line[3] + line[4] + line[5];


document.write("<span style='font-size:25px; color: #c41e3a'>Задание №3.</span>");
document.write('Дана строка: ' + line + '. ');
if (first_amount == second_amount){
    document.write('Сумма первых трёх и последних трёх цифр равна <br />');
}else{
    document.write('Сумма первых трёх и последних трёх цифр не равна <br />');
}

// Задание №4.
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

let a1 = 1;
a2 = 0;
a3 = -3;

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №4.</span>");

if (a1 > 0){
    document.write('Верно. ');
}else{
    document.write('Неверно.');
}

if (a2 > 0){
    document.write('Верно. ');
}else{
    document.write('Неверно.');
}

if (a3 > 0){
    document.write('Верно.<br />');
}else{
    document.write('Неверно.<br />');
}

// Задание №5.
// Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.

let a_5 = 10;
b_5 = 2;

sum = a_5 + b_5;
dif = a_5 - b_5;
pr = a_5 * b_5;
quo = a_5/b_5;

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №5.</span>");
document.write('Сумма: ' + sum + '. Разность: ' + dif + '. Произведение: ' + pr + '. Частное: ' + quo + '. ');
if(sum > 1){
    document.write('Возводим в квадрат: ' + (sum**2) + '<br />');
}else{
    document.write('Сумма меньше 1. <br />');
}


// Задание №6.
// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
// 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №6.</span>");

if ((a_5 > 2 && a_5 < 11) || (b_5 >= 6 && b_5 < 14)){
    document.write('Верно. <br />');
}else{
    document.write('Неверно. <br />');
}

// Задание №7.
// В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).

let n = prompt('Введите значение n от 0 до 59: ');

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №7.</span>");
if (n >= 0 && n <= 15) document.write('Первая половина часа.<br />');
if (n > 15 && n <= 30) document.write('Вторая половина часа.<br />');
if (n > 30 && n <= 45) document.write('Третья половина часа.<br />');
if (n > 45 && n <= 60) document.write('Четвёртая половина часа.<br />');

// Задание №8.
// В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
// месяца попадает это число (в первую, вторую или третью).

let day = prompt('Какое сегодня число? (1-31)');

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №8.</span>");
if (day >= 1 && day <= 10) document.write('Первая декада меясца.<br />');
if (day > 10 && day <= 20) document.write('Вторая декада меясца.<br />');
if (day > 20 && day <= 31) document.write('Третья декада меясца.<br />');

// Задание №9.
// Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
// (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
// вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
// недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно.

let days = prompt('Введите количество дней: ');
years = days/365;
months = days/31;
weeks = days/7;
hours = days/0.041
minutes = days/0.00069;
seconds = days/0.00001157;

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №9.</span>");

if (years >= 1) {
    document.write('Года: ' + years +  '. ');
} else if (years < 1) {
    document.write('Меньше года. ');
}
if (months >= 1) {
    document.write('Месяца: ' + months +  '. ');
} else if (months < 1) { 
    document.write('Меньше месяца. ');
}
if (weeks >=1) {
    document.write('Недели: ' + weeks +  '. ');
} else if (weeks < 1) {
    document.write('Меньше недели. <br />');
}

document.write('Года: ' + years +  '. ');
document.write('Месяца: ' + months +  '. ');
document.write('Недели: ' + weeks +  '. ');
document.write('Часы: ' + hours +  '. ');
document.write('Минуты: ' + minutes +  '. ');
document.write('Секунды: ' + seconds +  '. <br />');

// Задание №10.
// Напишите скрипт, который по введенному дню (исп. значение переменной из 8
// задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
// т.д.). Скрипт определение поры года написать через switch.

let day_10 = prompt('Введите день года (1-365): ');

document.write("<span style='font-size:25px; color: #c41e3a'>Задание №10.</span>");
if (day_10 <= 31) console.log(m =1);
if (day_10 > 31 && day_10 <= 59) console.log(m =2);
if (day_10 > 59 && day_10 <= 90) console.log(m =3);
if (day_10 > 90 && day_10 <= 120) console.log(m =4);
if (day_10 > 120 && day_10 <= 151) console.log(m =5);
if (day_10 > 151 && day_10 <= 181) console.log(m =6);
if (day_10 > 181 && day_10 <= 212) console.log(m =7);
if (day_10 > 212 && day_10 <= 243) console.log(m =8);
if (day_10 > 243 && day_10 <= 273) console.log(m =9);
if (day_10 > 273 && day_10 <= 304) console.log(m =10);
if (day_10 > 304 && day_10 <= 334) console.log(m =11);
if (day_10 > 334 && day_10 <= 365) console.log(m =12);

switch (m) {
    case 1:
        document.write('Зима, январь');
    break;
    case 2:
        document.write('Зима, февраль');
    break;
    case 3:
        document.write('Весна, март');
    break;
    case 4:
        document.write('Весна, апрель');
    break;
    case 5:
        document.write('Весна, май');
    break;
    case 6:
        document.write('Лето, июнь');
    break;
    case 7:
        document.write('Лето, июль');
    break;
    case 8:
        document.write('Лето, август');
    break;
    case 9:
        document.write('Осень, сентябрь');
    break;
    case 10:
        document.write('Осень, октябрь');
    break;
    case 11:
        document.write('Осень, ноябрь');
    break;
    case 12:
        document.write('Зима, декабрь');
    break;
}

