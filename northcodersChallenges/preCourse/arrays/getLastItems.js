function getLastItems(array, n) {
  const result =[];
  for(let i=n; i>0;i--) {
      result.push(array[array.length-i])
  }

  return result
}

console.log(getLastItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [7, 8, 9]
console.log(getLastItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // [8, 9]
console.log(getLastItems([true, false, false, true], 3)); // [false, false, true]
console.log(getLastItems(['a', true, false, 'a'], 2)); // [true, false]
