function replaceLettersWithXs(string) {
  return string.replace(/[A-Za-z]/g, "X");

/* 
  let result = "";
  
  for (let i = 0; i<string.length; i++) {
    let word = string[i]
    if(word !== /[!?\~\\]/g && word !== " ") {
      result += "X"
    } else {
      result += word
    }
  }

  return result */
}

console.log(replaceLettersWithXs("Hello World!")) // XXXXX XXXXX!
console.log(replaceLettersWithXs("Welcome to the world of tomorrow.")) // XXXXXXX XX XXX XXXXX XX XXXXXXXXX.
