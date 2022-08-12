// function to find missing letter in a string
function fearNotLetter(str) {
  // loop the size of string
  for (let i = 0; i < str.length; ++i) {
    // if str charCode - str charCode - 1 is more than 1
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
                                  //last index - 1 + 1 charCodeAt
      // return the letter from charcode at (i - 1)
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

console.log(fearNotLetter("abcde"));