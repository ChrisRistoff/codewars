function getWordLengths(string) {
  let arr = string.split(" ");
  let arr2 = [];

  if (string.length === 0) {
    return []
  }

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].length);
  }

  return arr2;
}

console.log(getWordLengths("Hello world"));
console.log(getWordLengths("Create a function"));
