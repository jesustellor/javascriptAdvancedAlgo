function pairElement(str) {
  const dnaRegEx = /[ATCG]/;
  const atPair = ['A', 'T'];
  const taPair = ['T', 'A'];
  const cgPair = ['C', 'G'];
  const gcPair = ['G', 'C'];

  const splitArray = str.match(dnaRegEx).input.split('')
  for(let i = 0; i < str.length; i++){
     if(splitArray[i] == 'A'){
       splitArray.replace();
     }
  }
  return 'Hello';
}

console.log(pairElement("TAGCG"));