function pairElement(str) {
  const dnaRegEx = /[ATCG]+/
  if(str.match(dnaRegEx) == str){
     const matchedPair = function(char, pairdArray){
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
 const paired = []
 for(let i = 0; i < str.length; i++){
   matchedPair(str[i], paired)
 }
 return paired
 } else {
   return 'DNA Sequence Incorrect'
 }
 }
 
 
 
 
 
 console.log(pairElement("ACLGA"));