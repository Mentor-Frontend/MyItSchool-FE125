let i = 1;
let j = 0;
let n = prompt ('enter string numbers');
function printPiramide(n) {
    if (isNaN(n)) {
        for (i = 1;i <= 9; i++) {     
            for (j = 1; j <= i; j++) {
              document.write(n)
          }
          document.write('<br>')
          }
    }
    for (i = 1;i <=n; i++) {     
      for (j = 1; j <= i; j++) {
        document.write(i)
    }
    document.write('<br>')
    }
}
printPiramide(n)