function tallyPeopleInManchester(people) {
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].lives.city === "Manchester") {
      count++;
    }
  }

  return count;
}

const people = [
  {
    name: "Alice",
    lives: {
      city: "Manchester",
      country: "UK",
    },
  },
  {
    name: "Bob",
    lives: {
      city: "London",
      country: "UK",
    },
  },
  {
    name: "Charlie",
    lives: {
      city: "Manchester",
      country: "UK",
    },
  },
];
console.log(tallyPeopleInManchester(people));
