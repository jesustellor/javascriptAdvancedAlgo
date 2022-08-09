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
     // create empty array to push paired DNA to
 const paired = []
  // loop through str and call matchedPair function on each 
  //character and pass in empty array as second argument
 for(let i = 0; i < str.length; i++){
   matchedPair(str[i], paired)
 }
 // return paired array with paired DNA
 return paired
 // if str does not match DNA string regex return error message
 } else {
   return 'DNA Sequence Incorrect'
 }
 }
 
 
 
 
 // Test Cases
 console.log(pairElement("ACLGA"));