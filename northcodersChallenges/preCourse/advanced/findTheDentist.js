function findFirstDentist(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].isDentist) {
      return people[i];
    }
  }

  return null;
}

const people = [
  { name: "John", isDentist: false },
  { name: "Alice", isDentist: false },
  { name: "Bob", isDentist: true },
];

const people2 = [
  { name: "John", isDentist: true },
  { name: "Alice", isDentist: true },
  { name: "Bob", isDentist: true },
];

console.log(findFirstDentist(people));
console.log(findFirstDentist(people2));
