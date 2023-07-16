function calculateTaxiFare(seconds) {
  let baseRate = 500;

  if (seconds < 180) {
    return baseRate;
  }

  let fare = Math.ceil((seconds - 180) / 60) * 70;

  return baseRate + fare;
}

console.log(calculateTaxiFare(240));
console.log(calculateTaxiFare(180));
console.log(calculateTaxiFare(300));
console.log(calculateTaxiFare(600));
