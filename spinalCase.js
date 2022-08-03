function spinalCase(str) {
    // regEx looking for Capital letters
    const regEx = /([A-Z])/g
    // replacing str capitals and inserting matched substring
    const trim = str.replace(regEx, ' $&')
    // replacing _ with empty space.
    .replace(/_/g, "")
      // splitting by space in text
    .split(' ')
      // .filter every item that is not equal
    .filter((item) => {return item !== ''})
    // joining text with hyphen -
    .join('-')
    // after using join() we can then apply lower case.
    .toLowerCase()
  // return the trim const.
    return trim;
  }
  
  console.log(spinalCase('The_Andy_Griffith_Show'));
  
  
  // spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
  // spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
  // spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
  // spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
  // spinalCase("AllThe-small Things") should return the string all-the-small-things.