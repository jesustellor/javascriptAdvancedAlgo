function myReplace(str, before, after) {
  const newCapSentence = str.replace(before, after[0].toUpperCase() + after.substring(1));
  const newSentence = str.replace(before, after[0].toLowerCase() + after.substring(1));
  const checkBefore = before[0].toUpperCase() == before[0]
  if(checkBefore){
    return newCapSentence;
  } else {
    return newSentence;
  }
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));