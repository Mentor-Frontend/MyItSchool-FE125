function digitize(n) {
    return n.toString().split('').reverse().map((a,b)=>Number(a))
  }

  console.log(digitize(35231));

