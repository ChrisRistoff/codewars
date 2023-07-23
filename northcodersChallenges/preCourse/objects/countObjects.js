function countTheObjects(arr) {
  let count = 0

  for(let i=0;i<arr.length;i++) {
    if(typeof arr[i] === "object" && !Array.isArray(arr[i]) && arr[i] !== null){
      count++
    }
  }
  return count
}

console.log(countTheObjects([1,2,3,{},5,6,7,{},9,10,{},12,13,{},15,16,17,{},19,20,{}])) // 7
console.log(countTheObjects([{}, {}, {}, []])) // 4
