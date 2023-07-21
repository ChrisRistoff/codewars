function convertToCamelCase(string) {
  const words = string.split(" ")

  if (words.length === 1) {
    return string.toLowerCase()
  }

  words[0] = words[0].toLowerCase()

  for (let i=1; i<words.length; i++) {
    let newWord = words[i].toLowerCase().split("")
    newWord[0] = newWord[0].toUpperCase()

    words[i] = newWord.join("")
  }

  return words.join("")
}

console.log(convertToCamelCase("th stealt warrior"))
console.log(convertToCamelCase("I love JavaScript"))
