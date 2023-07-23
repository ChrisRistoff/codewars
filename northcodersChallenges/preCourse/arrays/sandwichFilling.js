function getSandwichFilling(sandwich) {
  const result = []

  for (let i=1;i<sandwich.length-1;i++){
          result.push(sandwich[i])
  }

  return result
}

console.log(getSandwichFilling(["bread", "ham", "cheese", "ham", "bread"])) // ["ham", "cheese", "ham"]
