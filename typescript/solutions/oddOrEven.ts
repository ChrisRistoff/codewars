function oddOrEven(array: number[]) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  if (sum % 2 === 0) {
    return "even";
  }

  return "odd";
}

console.log(oddOrEven([0, 1, 2])); // even
console.log(oddOrEven([0, 1, 3])); // odd
console.log(oddOrEven([1023, 1, 2])); // even
