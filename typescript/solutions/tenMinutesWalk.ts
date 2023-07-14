export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  type Directions = {
    [key: string]: number;
  };

  const directions: Directions = {
    n: 1,
    s: -1,
    e: 100,
    w: -100,
  };

  let finalN = 0;

  for (let direction of walk) {
    finalN += directions[direction];
  }

  return finalN === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["s", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.
*/
