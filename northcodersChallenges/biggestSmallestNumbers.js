function findBiggestAndSmallest(numbers) {
  let small = numbers[0];
  let big = numbers[0];

  if (numbers.length === 0) {
    return {}
  }

  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < small) {
      small = numbers[i];
    }

    if (numbers[i] > big) {
      big = numbers[i];
    }
  }
  return {biggest: big, smallest: small}
}
