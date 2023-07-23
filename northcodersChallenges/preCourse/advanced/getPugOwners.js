function getPugOwners(dogs) {
  const result = [];

  for (let i = 0; i < dogs.length; i++) {

    if (dogs[i].breed === 'pug') {
      result.push(dogs[i].owner);
    }
  }

  return result;
}

const dogs = [
  { name: 'max', breed: 'husky', owner: 'Igor' },
  { name: 'buddy', breed: 'pug', owner: 'Igor' },
  { name: 'charlie', breed: 'pug', owner: 'Olga' },
  { name: 'rocky', breed: 'boxer', owner: 'Igor' },
];

console.log(getPugOwners(dogs)); // ['Igor', 'Olga']
