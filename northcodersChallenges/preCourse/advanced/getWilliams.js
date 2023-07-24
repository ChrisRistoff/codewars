const getWilliams = (names) => {
  const williams = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const splitName = name.split(' ');
    const lastName = splitName[1];

    if (lastName === 'Williams') {
      williams.push(name);
    }
  }

  return williams;
}

const names = ['Sally Williams', 'Sam Smith', 'Bob Williams', 'Sue William', 'Tom Williams', 'Williams Williams'];

console.log(getWilliams(names));
