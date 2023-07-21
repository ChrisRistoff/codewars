function splitTheBeans(totalCost, numOfPeople) {
  const costPerPerson = totalCost / numOfPeople;

  return Math.ceil(costPerPerson);
}

console.log(splitTheBeans(100, 3)); // 34
