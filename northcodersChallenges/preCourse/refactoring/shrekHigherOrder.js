/* function isShrekCharacter(characters) {
  const shrekCharacters = [];
  for(let i = 0; i < characters.length; i++){
    if (characters[i].movie.includes('Shrek')) {
      shrekCharacters.push(characters[i]);
    }
  }
  return shrekCharacters;
} */

const isShrekCharacter = (characters) => {
  return characters.filter(character => character.movie.includes('Shrek'));
}

const characters = [
  { name: 'Shrek', movie: 'Shrek' },
  { name: 'Donkey', movie: 'Shrek' },
  { name: 'Fiona', movie: 'Shrek' },
  { name: 'Lord Farquaad', movie: 'Shrak' },
]

console.log(isShrekCharacter(characters));
