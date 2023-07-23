function removeItem(array, n) {
  const result = []

  if(array.length===0 || n===0) {
    return []
  }

  for(let i=0;i<array.length;i++){
    if(i !== n) {
      result.push(array[i])
    }
  }

  return result
}
