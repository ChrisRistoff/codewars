function pluraliseKeys(obj) {
  const pluralisedObj = {};
  
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let key = Object.keys(obj)[i];

    if (Array.isArray(obj[key])) {
      pluralisedObj[`${key}s`] = obj[key];
    } else {
      pluralisedObj[key] = obj[key];
    }
  }

  return pluralisedObj;
}

const object = {
    name: 'Tom',
    job: ['writing katas', 'marking'],
    favouriteShop: [
    "Paul's Donkey University",
    "Shaq's Taxidermy Shack",
    "Sam's Pet Shop"
    ]
}

console.log(pluraliseKeys(object));
