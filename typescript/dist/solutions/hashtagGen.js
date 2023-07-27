function generateHashtag(str) {
    if (str.replace(/\s/g, "").length === 0 || str.replace(/\s/g, "").length > 140) {
        return false;
    }
    const words = str.split(' ');
    let hashtag = '#';
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].trim().slice(1);
        hashtag += words[i];
    }
    return hashtag;
}
console.log(generateHashtag('Hello there thanks for    trying my Kata'));
console.log(generateHashtag('Codewars'));
console.log(generateHashtag('Code' + ' '.repeat(140) + 'wars'));
console.log(generateHashtag('a'.repeat(140)));
