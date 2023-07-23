function validMobileNumber(mobileNumber) {
  return /^(07|\+447|00447)\d{9}$/.test(mobileNumber);

/*   if (mobileNumber.startsWith("07") && mobileNumber.length === 11 && !Number(mobileNumber).isNaN) {
    return true;
  }

  if (mobileNumber.startsWith("+447") && mobileNumber.length === 13 && !Number(mobileNumber).isNaN) {
    return true;
  }

  if (mobileNumber.startsWith("00447") && mobileNumber.length === 14 && !Number(mobileNumber).isNaN) {
    return true;
  }

  return false; */
}

console.log(validMobileNumber("07123452789")); // true
console.log(validMobileNumber("+447123456789")); // true
console.log(validMobileNumber("00447123456789")); // true
console.log(validMobileNumber("447123456789")); // false
console.log(validMobileNumber("0712345678")); // false
console.log(validMobileNumber("071234567891")); // false
console.log(validMobileNumber("0712345678910")); // false
console.log(validMobileNumber("07123456789101")); // false
