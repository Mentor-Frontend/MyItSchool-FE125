let array = [6,18,23,75,36,47];
let arrayeven = [];
let i = 0;
function getEven () {
    for (i = 0; i<= array.length;i++)
    if (array[i] % 2 === 0){
        arrayeven.push(array[i])
    }
}
getEven()
console.log(arrayeven)
