function diffArray(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x))
      .concat(arr2.filter(x => !arr1.includes(x)));
  }
  
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  
  // [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
  // [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].