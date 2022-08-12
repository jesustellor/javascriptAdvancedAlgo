function pairElement(str) {
  // make const for DNA string
  const dnaRegEx = /[ATCG]+/
  // check str to match DNA string regex
  if(str.match(dnaRegEx) == str){
    // function matchedPair to take in a single character and an array.
     const matchedPair = function(char, pairdArray){
      // checking char to match A, T, C, or G
     switch(char) {
      case "A":
      pairdArray.push(["A", "T"])
      break;
      case "T":
      pairdArray.push(["T", "A"])
      break;
      case "C":
      pairdArray.push(["C", "G"])
      break;
      case "G":
      pairdArray.push(["G", "C"])
      break;
      default:
       }
     }
  }
  return 'DNA string is not valid';
}

console.log(pairElement("TAGCG"));
