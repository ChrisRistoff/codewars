function findEvenLengthStrings(items) {
  let temp = [];

  for(let i=0; i < items.length; i++){
    if (typeof items[i] === "string") {
      if (items[i].length % 2 ===0) {
        temp.push(items[i])
      }
  }
}

  return temp
}
