function passwordValidation(password) {
  const lCP = password.toLowerCase();

  return lCP.includes("n") && lCP.includes("c") && lCP[lCP.length-1] === "1";
}

console.log(passwordValidation("Nc1"));
console.log(passwordValidation("NORTHCODERS1"));
console.log(passwordValidation("NOR1HcodERS"));
