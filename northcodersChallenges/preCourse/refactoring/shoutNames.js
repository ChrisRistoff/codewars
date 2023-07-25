/* function shoutNames(names) {
  const shoutyArray = [];
  for(let i = 0; i < names.length; i++){
    const upperCaseName = names[i].toUpperCase();
    shoutyArray.push(upperCaseName);
  }
  return shoutyArray;
} */

const shoutNames = (names) => {
  return names.map((name) => name.toUpperCase());
};
