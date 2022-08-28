const sumFibs = n => {
    //declaring variables & place holders
    const fibArray = [0, 1];
    let prev = fibArray.length -2
    let current = prev + 1
    let sum = 0;
    // Creating Fibonacci sequence as big as fibArray gets.
    for(let i = 0; i < fibArray.length; i++){
      if(current <= n){
      const nextNum = prev + current;
      fibArray.push(nextNum);
      prev = current;
      current = nextNum; 
    } else if(current > n){
      fibArray.pop()
    }
      if (fibArray[i] % 2 === 1) {
      sum = sum + fibArray[i];
      }
  }
  return sum;
  };
  console.log(sumFibs(4));