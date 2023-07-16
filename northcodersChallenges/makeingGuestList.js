function makeGuestList(person) {
  let splitNames = person.name.split(" ");
  //let firstName = splitNames[0];
  //let lastName = splitNames[1];

  delete person.name;

  person.firstName = splitNames[0];
  person.lastName = splitNames[1];

  return person;
}

console.log(makeGuestList({ name: "John Doe", age: 30 }));

