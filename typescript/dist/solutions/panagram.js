"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
const isPangram = (phrase) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = phrase.toLowerCase();
    for (let letter of alphabet) {
        if (!lowerCaseSentence.includes(letter)) {
            return false;
        }
    }
    return true;
};
exports.isPangram = isPangram;
console.log((0, exports.isPangram)('The quick brown fox jumps over the lazy dog')); // true
console.log((0, exports.isPangram)('The quick brown fox jumps over the lazy cat')); // false
