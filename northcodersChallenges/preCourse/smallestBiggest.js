function findSmallestAndBiggest(arr) {
  let smallest = arr[0];
  let biggest = smallest;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    } else if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }

  return [smallest, biggest];
}

console.log(findSmallestAndBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9]));
