function destroyer(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }  //filter the arr for every item....... thats not ...args include item
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3,));

// this function is to remove all the items in the array that are in the arguments

