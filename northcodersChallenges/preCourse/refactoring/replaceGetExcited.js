/* function getExcited(sentence) {
  const sentenceArray = sentence.split('');
  for(let i = 0; i < sentenceArray.length; i++){
    if (sentenceArray[i] === '.') {
      sentenceArray[i] = '!';
    }
  }
  return sentenceArray.join('');
} */


const getExcited = (sentence) => {
  return sentence.split('.').join('!');
}

const getExcited2 = (sentence) => {
  return sentence.replace(".", "!");
}

console.log(getExcited('I am so excited.'));
console.log(getExcited2('I am so excited.'));
