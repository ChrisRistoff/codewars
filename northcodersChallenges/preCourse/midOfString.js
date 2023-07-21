function getMiddle(string) {
  if(string.length%2===0){
    const index = string.length/2
    return `${string[index-1]}${string[index]}`
  }

  const index = Math.floor(string.length/2)

  return string[index]
}


console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
