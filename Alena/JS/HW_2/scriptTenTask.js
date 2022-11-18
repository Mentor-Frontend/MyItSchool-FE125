document.writeln('Task #10', '<br/>');
let dayTenTask = 236;
document.writeln('Порядковый номер дня: ', dayTenTask, '<br/>');
if (days <= 0){
    document.writeln('Такого не бывает, извините!', '<br/>');
}
let month;
if (dayTenTask >= 1 && dayTenTask < 32) {
    document.writeln('Это январь.', '<br/>');
    month = 1;
}
else if (dayTenTask >= 32 && dayTenTask < 60) {
    document.writeln('Это февраль.', '<br/>');
    month = 2;
}
else if (dayTenTask >= 60 && dayTenTask < 91) {
    document.writeln('Это март.', '<br/>');
    month = 3;
}
else if (dayTenTask >= 91 && dayTenTask < 121) {
    document.writeln('Это апрель.', '<br/>');
    month = 4;
}
else if (dayTenTask >= 121 && dayTenTask < 152) {
    document.writeln('Это май.', '<br/>');
    month = 5;
}
else if (dayTenTask >= 152 && dayTenTask < 182) {
    document.writeln('Это июнь.', '<br/>');
    month = 6;
}
else if (dayTenTask >= 182 && dayTenTask < 213) {
    document.writeln('Это июль.', '<br/>');
    month = 7;
}
else if (dayTenTask >= 213 && dayTenTask < 244) {
    document.writeln('Это август.', '<br/>');
    month = 8;
}
else if (dayTenTask >= 244 && dayTenTask < 274) {
    document.writeln('Это сентябрь.', '<br/>');
    month = 9;
}
else if (dayTenTask >= 274 && dayTenTask < 305) {
    document.writeln('Это октябрь.', '<br/>');
    month = 10;
}
else if (dayTenTask >= 305 && dayTenTask < 335) {
    document.writeln('Это ноябрь.', '<br/>');
    month = 11;
}
else if (dayTenTask >= 335 && dayTenTask < 365) {
    document.writeln('Это декабрь.', '<br/>');
    month = 12;
}
switch (month) {
    case 1:
    case 2:
    case 12:
        document.writeln('Это зима.', '<br/>');
        break;
    case 3:
    case 4:
    case 5:
        document.writeln('Это весна.', '<br/>');
        break;
    case 6:
    case 7:
    case 8:
        document.writeln('Это лето.', '<br/>');
        break;
    case 9:
    case 10:
    case 11:
        document.writeln('Это осень.', '<br/>');
        break;
} 