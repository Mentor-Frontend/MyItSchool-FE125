let a = prompt('1st value');
let b = prompt('Last value');
let array = [];
function getArray(a,b) {
    for(i = a; i <= b; i++) {
        array.push(i)
    }
}
getArray(a,b)
function printArray() {
    console.log('massive',array)
}
printArray();