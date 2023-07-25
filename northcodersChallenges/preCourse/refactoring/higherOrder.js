/* function isSweetEnough(foods) {
  for(let i = 0; i < foods.length; i++){
    if (foods[i].flavour !== 'sweet') {
  return false;
    }
  }
  return true;
} */

const isSweetEnough = (foods) => foods.every((food) => food.flavour === "sweet");

const foods = [
  { name: "cake", flavour: "sweet" },
  { name: "carrot", flavour: "sweet" },
  { name: "chocolate", flavour: "sweet" },
];

console.log(isSweetEnough(foods));

const foods1 = [
  { name: "cake", flavour: "sweet" },
  { name: "carrot", flavour: "sweet" },
  { name: "dark chocolate", flavour: "sour" },
];

console.log(isSweetEnough(foods1));
