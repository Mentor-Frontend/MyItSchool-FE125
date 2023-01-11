function getMin(a, b) {
    if (a > b) return b;
    else if (a==b) console.log('a=b')
    else return a;
}
function getMax(a,b) {
    if (a > b) return a;
    else if (a==b) console.log('a=b') 
    else return b;   
}
console.log('max; ',getMax(1,2),'min; ' ,getMin(1,2))