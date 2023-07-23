function getPalindromes(words) {
  const palindromes = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
}


console.log(getPalindromes(['word', 'Ana', 'racecar', 'madam', 'civic']));
