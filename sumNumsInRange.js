function sumAll(arr) {
  // sort the array!!
  let sortArray = arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1
  })
  // create variables with low and high numbers.
  const lowValue = sortArray.shift();
  const highValue = sortArray.pop();

let newArray = Array.from({length: highValue}, (_, i) => i + 1);
// check if you need to remove numbers.
  if (lowValue == 1) {
   return newArray.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
})
  } else if (lowValue > 1){
    return newArray.splice(lowValue - 1).reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
})

  }

}

console.log(sumAll([1, 4]));