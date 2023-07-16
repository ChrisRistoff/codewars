function isPartyViable(guests) {
  let total = 0;

  if (guests.length < 5) {
    return false
  }

  for (let i=0; i < guests.length; i++) {
    total += guests[i].paidForTicket
  }

  return total >= 100
}

const party = [
  { name: 'John', paidForTicket: 30 },
  { name: 'Mary', paidForTicket: 40 },
  { name: 'Mike', paidForTicket: 10},
  { name: 'Jane', paidForTicket: 10 },
  { name: 'Bob', paidForTicket: 0 },
]

console.log(isPartyViable(party)) // false

const party2 = [
  { name: 'John', paidForTicket: 30 },
  { name: 'Mary', paidForTicket: 40 },
  { name: 'Mike', paidForTicket: 20 },
  { name: 'Jane', paidForTicket: 40 }
]

console.log(isPartyViable(party2)) // false

const party3 = [
  { name: 'John', paidForTicket: 30 },
  { name: 'Mary', paidForTicket: 40 },
  { name: 'Mike', paidForTicket: 20 },
  { name: 'Jane', paidForTicket: 40 },
  { name: 'Bob', paidForTicket: 10 },
]

console.log(isPartyViable(party3)) // true
