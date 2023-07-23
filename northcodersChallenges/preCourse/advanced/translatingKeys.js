function translateKey(student, keyToChange, translation) {
  const newObject = {};

  for (let i = 0; i < Object.keys(student).length; i++) {
    const key = Object.keys(student)[i];

    if (key === keyToChange) {
      newObject[translation] = student[key];
    } else {
      newObject[key] = student[key];
    }
  }
  return newObject;
}

const student = {
  prenom: 'Jean',
  surname: 'Dupont',
  job: 'dev',
};

console.log(translateKey(student, 'prenom', 'name'));
