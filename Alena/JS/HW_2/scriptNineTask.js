document.writeln ('Task #9', '<br/>');
let days = 128;
document.writeln('Количество дней: ', days, '<br/>');
if (days <= 0){
    document.writeln('Такого не бывает, извините!', '<br/>');
}
let daysToYears = days / 356;
document.writeln('В года: ', daysToYears, '. ');
if (daysToYears < 1){
    document.writeln('Меньше года.');
}
document.writeln ('<br/>');
let daysToMonth = days / 31;
document.writeln('В месяцы: ', daysToMonth, '. ');
if (daysToMonth  < 1){
    document.writeln('Меньше месяца.');
}
document.writeln ('<br/>');
let daysToWeek = days / 7;
document.writeln('В недели: ', daysToWeek, '. ');
if (daysToWeek  < 1){
    document.writeln('Меньше недели.');
}
document.writeln ('<br/>');
let daysToHours = days * 24;
document.writeln('В часы: ', daysToHours, '.', '<br/>');
let daysToMinutes = days * 24 * 60;
document.writeln('В минуты: ', daysToMinutes, '.', '<br/>');
let daysToSeconds = days * 24 * 60 * 60;
document.writeln('В минуты: ', daysToSeconds, '.','<br/>');
