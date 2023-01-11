let Group = prompt('Напишите название группы');
let name = prompt('Ваше имя');
let patronymic = prompt('Ваше отчество');
let surname = prompt('Ваша фамилия');
let firstStr = "Домашняя работа: «Функции»";
let twoStr = 'Выполнил: студент гр.' + ' ' + Group;
let threeStr = name + ' ' + patronymic+ ' ' + surname  ;
function card(firstStr, twoStr, threeStr) {
    let maxLength = Math.max(firstStr.length, twoStr.length, threeStr.length);
    function printSpace(str) {
        let space = "";
        for (k = str.length; k < maxLength; k++) {
            space = space + " ";
        }
        return space;
    }

    for (i = 0; i < 5; i++) {
        if (i == 0) {
            let strStars = '';
            for (j = 0; j <= maxLength + 1; j++) {
                strStars += '*';
            }
            console.log(strStars);
        } else if (i == 1) {
            printSpace(firstStr);
            console.log('*' + firstStr + printSpace(firstStr) + '*');
        } else if (i == 2) {
            printSpace(twoStr);
            console.log('*' + twoStr + printSpace(twoStr) + '*');
        } else if (i == 3) {
            printSpace(threeStr);
            console.log('*' + threeStr + printSpace(threeStr) + '*');
        } else if (i == 4) {
            strStars = '';
            for (j = 0; j <= maxLength + 1; j++) {
                strStars += '*';
            }
            console.log(strStars);
        }

        document.write('<br>');
    }
}
card(firstStr, twoStr, threeStr);