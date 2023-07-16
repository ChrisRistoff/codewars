function calculateTables(guests, seats) {
  let tables = Math.floor(guests / seats);
  let remainingGuests = guests % seats;

  return {
    tables: tables,
    remainingGuests: remainingGuests
  };
}

console.log(calculateTables(10, 3));
console.log(calculateTables(15, 4));
console.log(calculateTables(4, 4));
