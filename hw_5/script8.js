let height = prompt ('enter string numbers');
function getPyramide (height){
    let i = 1;
    let j = 0;
    while (i <= height) {
     let space = "";
     let symbol = "*";
      for (j = 0; j < height - i; j++) {
        space += " ";
    }
      
      for (j = 0; j < 2 * i - 2; j++) {
        symbol += "*";
    }
      console.log(space + symbol);
      i++;
    }
    for (symbol = "*";j < height - i; j++ )
    space += " ";
}
getPyramide(height)