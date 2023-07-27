"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => {
    const isPunctuation = (word) => {
        const punctuationMarks = ['.', ',', '?', '!'];
        return punctuationMarks.includes(word) || punctuationMarks.includes(word.slice(-1));
    };
    const words = a.split(' ');
    const pigLatin = [];
    for (const word of words) {
        if (word.trim() === '') { // Handle empty words
            pigLatin.push(word);
        }
        else if (!isPunctuation(word)) {
            const firstLetter = word[0];
            const restOfWord = word.slice(1);
            const pigWord = `${restOfWord}${firstLetter}ay`;
            pigLatin.push(pigWord);
        }
        else {
            pigLatin.push(word);
        }
    }
    return pigLatin.join(' ');
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('Pig latin is cool !')); // igPay atinlay siay oolcay
