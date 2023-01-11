let array = [];
let b = 1;
let a = 0;
let fibo;
let end = prompt("enter a number");
function getFibo(end) {
    array.push(a);
  for (let i = 0; a + b < end; ) {
    fibo = a + b;
    b = fibo;
    a = i;
    i = b;
    array.push(fibo);
  }
  console.log(array);
}
getFibo(end);
