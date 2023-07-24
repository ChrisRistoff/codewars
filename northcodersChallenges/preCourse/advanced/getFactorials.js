const getFactorials = (nums) => {
  const result = [];
    for (let i = 0; i < nums.length; i++) {
      let number = 1;

      for (let j = 1; j<nums[i]+1; j++) {
        number *= j
      }

      result.push(number)
    }

  return result
}

console.log(getFactorials([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
