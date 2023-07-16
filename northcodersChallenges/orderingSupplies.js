function orderSupplies(supplies, guests) {
  let totalSupplies = 0;

  for(let key of Object.keys(supplies)) {
    totalSupplies += supplies[key]
  }

  return totalSupplies * guests
}

const supplies = {
  cake: 1,
  chickenWings: 5,
  drinks: 3,
}

console.log(orderSupplies(supplies, 10))
