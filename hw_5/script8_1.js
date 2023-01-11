let height = prompt ('enter string numbers');
function getPyramide (height){
    let i = 1;
    let j = 0;
    while (i <= height) {
     let space = "";
     let symbol = "*";
      for (j = 0; j < i; j++) {
        space += " ";
    }
      
      for (j = 0; j < height - i; j++) {
        symbol += "*";
    }
    }
    for (symbol = !undefined; j < height; j++ ){
    space1 += " "
    }
      console.log(space + symbol + space1);
      i++;
    
}
getPyramide(height)