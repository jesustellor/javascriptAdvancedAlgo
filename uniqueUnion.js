//function to combine array and return a new array with original values in order of the original array.
//using the spread operator to pass multiple arugments to the function.
function uniteUnique(...arr) {
    // combine array with flat()
    const combined = arr.flat();
    // create empty array to store the unique values
    const newArr = [];
    // loop through combined array
     for(let i = 0; i < combined.length; i++){
    // if empty array indexOf combined array is not there
      if(newArr.indexOf(combined[i]) == -1){
        // push combined array value to new array
        newArr.push(combined[i])
      }
    }
    // return new array
    return newArr
  }
  // we could also just return [...new Set(arr.flat())]
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));