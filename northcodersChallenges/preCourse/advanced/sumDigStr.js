function sumDigitsFromString(string) {
  let sum = 0;
  const strList = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(strList[i])) {
      sum += Number(strList[i])
    }
  }

  return sum
}

console.log(sumDigitsFromString("2s5dg5")); // 12
