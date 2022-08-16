function convertHTML(str) {
    // make object with HTML Entities
  const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
  // make const of regEx with html entities.
  const regEx = /[&<>\"']/g
  // item is equal to the object htmlEntities key pair value.
  const item = match => htmlEntities[match];
  //return the string with the html entities replaced with the html entities key pair value.
  return str.replace(regEx, item);
  }
  
  console.log(convertHTML("Dolce & Gabbana"));