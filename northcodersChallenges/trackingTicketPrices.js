function trackAttendees(person, ticketCost) {
  ticketCost = Number(ticketCost);

  person.ticketCost = ticketCost;

  return person;
}

console.log(trackAttendees({ name: "John", age: 25 }, 10));
