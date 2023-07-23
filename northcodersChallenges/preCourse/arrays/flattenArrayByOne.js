function flattenArrayByOne(arrayOfArrays) {

  return arrayOfArrays.flat();
}

console.log(flattenArrayByOne([[1], [2], [3]])); // [1, 2, 3]
console.log(flattenArrayByOne([[1], [2], [[3,4]]])); // [1, 2, [3, 4]]
