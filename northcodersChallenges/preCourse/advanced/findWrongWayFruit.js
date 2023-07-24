const findWrongWayFruit = (orchard) => {
  if (orchard.length < 3) {
    return 0
  }
  if (orchard[0] !== orchard[2]) {
    return 0
  }

  let wrongWayFruit = orchard[0]
  for (let i = 1; i < orchard.length; i++) {
    if (orchard[i] !== wrongWayFruit) {
      return i
    }
  }
}

const orchard = ["apple", "apple", "aple", "apple", "apple", "apple", "apple", "banan"]

console.log(findWrongWayFruit(orchard))
