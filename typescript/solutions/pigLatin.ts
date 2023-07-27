export const pigIt = (a: string): string => {
  const isPunctuation = (word: string) => {
    const punctuationMarks = ['.', ',', '?', '!'];
    return punctuationMarks.includes(word) || punctuationMarks.includes(word.slice(-1));
  };

  const words = a.split(' ');
  const pigLatin = [];

  for (const word of words) {
    if (word.trim() === '') { // Handle empty words
      pigLatin.push(word);
    } else if (!isPunctuation(word)) {
      const firstLetter = word[0];
      const restOfWord = word.slice(1);
      const pigWord = `${restOfWord}${firstLetter}ay`;

      pigLatin.push(pigWord);
    } else {
      pigLatin.push(word);
    }
  }

  return pigLatin.join(' ');
};

console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay
