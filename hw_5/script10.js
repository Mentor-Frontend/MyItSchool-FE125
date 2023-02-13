let n = prompt("enter the value");
let summ = 0;
let i = 0;
function getNumber(n) {
  a = n.split("");
  for (i = 0; i < a.length; i++) {
    summ = +summ + Number(a[i]);
  }
  if (summ > 9) {
    n = summ.toString();
    summ = 0;
    getNumber(n);
  } else console.log(summ);
}
getNumber(n);
