function findTicketPrices(emailString) {
  let emailArray = emailString.split(" ");
  let temp = null;
  for (let i = 0; i < emailArray.length; i++) {
    temp = Number(emailArray[i]);
    if (!isNaN(temp)) {
      return true;
    }
  }
  return false;
}

console.log(findTicketPrices("Hello I think I can pay 11"));
console.log(findTicketPrices("Your total cost is 12"));
console.log(findTicketPrices("I'm not paying anything"));
