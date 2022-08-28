const sumFibs = n => {
    const fibArray = [0, 1];
    let prev = fibArray.length -2
    let current = prev + 1
    const sum = 0;
    for(let i = 0; i < n; i++){
      const nextNum = prev + current;
      fibArray.push(nextNum);
      prev = current;
      current = nextNum;    
    }
    return fibArray;
  };
  
  console.log(sumFibs(10))