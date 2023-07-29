export const isPangram = (phrase: string): boolean => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = phrase.toLowerCase();

  for (let letter of alphabet) {
    if (!lowerCaseSentence.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('The quick brown fox jumps over the lazy cat')); // false
