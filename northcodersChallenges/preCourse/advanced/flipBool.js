function flipBooleans(bools) {
  const result = [];

  for (let i = 0; i < bools.length; i++) {
    result.push(!bools[i]);
  }

  return result;
}

console.log(flipBooleans([true, false, true, false])); // [false, true, false, true]
