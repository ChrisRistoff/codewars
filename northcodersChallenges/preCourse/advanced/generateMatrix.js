const generateMatrix = (number) => {
  const matrix = [];

  for (let i = 0; i < number; i++) {
    const innerMatrix = [];
    for (let j = 0; j < number; j++) {
      innerMatrix.push(null);
    }
    matrix.push(innerMatrix);
  }

  return matrix;
};

console.log(generateMatrix(3));
