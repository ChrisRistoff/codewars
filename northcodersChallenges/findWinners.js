function pickWinners(numbers) {
  let oddList=[];
  let seats = [];
  for (number of numbers) {
    let seat = numbers.indexOf(number)
    if(number % 2 !==0 && number !== 1 && seat % 2 !== 0) {
      oddList.push(number)
      seats.push(seat)
    }
  }

  let winners = [];
  let temp = {};
  for (let i = 0; i < oddList.length; i++){
    temp = {seat: seats[i], ticketCost: oddList[i]}
    winners.push(temp)
  }

  return winners
}

console.log(pickWinners([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
