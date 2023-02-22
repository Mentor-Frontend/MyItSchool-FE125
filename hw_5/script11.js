let a = [1, 2, 3, 4, 5];
let i = 0;
function printArray(a) {
  console.log(a[i]);
  i++;
  if (i < a.length) {
    printArray(a);
  }
}
printArray(a);
