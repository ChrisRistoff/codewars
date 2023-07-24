const largestNumber = (number) => {
  const numArr = number.toString().split('');
  const sortedArr = numArr.sort((a, b) => b - a);

  return Number(sortedArr.join(''));
}

console.log(largestNumber(12345)); // 54321
