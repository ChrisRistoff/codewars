function getLastWord(string) {

  if(string.length <= 1) {
    return string
  }
  
  const strList = string.split(" ")

  return strList[strList.length-1]
}

console.log(getLastWord("Hello World")) // "World"
console.log(getLastWord("Hello")) // "Hello"
