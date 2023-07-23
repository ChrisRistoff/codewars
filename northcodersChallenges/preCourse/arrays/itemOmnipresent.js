function isItemOmnipresent(arrayOfArrays, item) {
  let omnipresent = 0
  
  for(let i=0; i<arrayOfArrays.length;i++) {

    for (let j=0; j<arrayOfArrays[i].length;j++) {

      if (arrayOfArrays[i][j] === item) {
        omnipresent++ 
        break
      }
    }
  }

  return omnipresent === arrayOfArrays.length
}

console.log(isItemOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) // true
console.log(isItemOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // false
console.log(isItemOmnipresent([[5], [5], [5], [6, 5]], 5)) // true
