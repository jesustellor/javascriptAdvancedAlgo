function pairElement(str) {
    const dnaRegEx = /[ATCG]/;
    const atPair = ['A', 'T'];
    const taPair = ['T', 'A'];
    const cgPair = ['C', 'G'];
    const gcPair = ['G', 'C'];
    // let matchBasePair = function(char, ){
    //   switch(char){
    //     case 'A': ['A', 'T']
    //   }
    // }
    const splitArray = str.match(dnaRegEx).input.split('')
      if(splitArray.shift() == str.match(dnaRegEx)){
        return "Hello"
      }
    return;
  }
  
  console.log(pairElement("AGCG"));