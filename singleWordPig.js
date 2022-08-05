function translatePigLatin(str) {
    const vowls = /^[^aeiou]+/
    const cons = str.match(vowls)
    return cons ? str.replace(vowls, '').concat(cons + 'ay') : str.concat('way')
  
  }
  
  console.log(translatePigLatin("onsonant"));