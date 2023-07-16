function findTicketPrices(emailString) {
  let emailArray = emailString.split(' ');
  let temp = null;

  for (let i=0; i<emailArray.length;i++) {
    temp = Number(emailArray[i]);
      if(!isNaN(temp)){
        return true;
      }
  }

  return false
}
