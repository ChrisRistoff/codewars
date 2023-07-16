function checkIsPrime(num) {
  if(num === 1) {
    return false
  }
  for (let i = num -2; i > 1; i--) {
    if (num % i ===0) {
      return false
    }
  }

  return true
}
