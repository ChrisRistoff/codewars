"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => {
    const words = a.split(' ');
    const pigLatin = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '!' && words[i] !== '?') {
            const word = words[i];
            const firstLetter = word[0];
            const restOfWord = word.slice(1, word.length);
            const pigWord = `${restOfWord}${firstLetter}ay`;
            pigLatin.push(pigWord);
        }
        else {
            pigLatin.push(words[i]);
        }
    }
    return pigLatin.join(' ');
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('Pig latin is cool !')); // igPay atinlay siay oolcay
