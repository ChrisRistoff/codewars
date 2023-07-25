const tallyHashtagsAndMentions = (str) => {
  const words = str.split(' ');
  let hashtags = 0;
  let mentions = 0;

  words.forEach((word) => {
    if (word.startsWith('#')) {
      hashtags += 1;
    } else if (word.startsWith('@')) {
      mentions += 1;
    }
  });

  return { hashtags: hashtags, mentions: mentions };
}

console.log(tallyHashtagsAndMentions('This is a #tweet with #hashtags and #mentions @johndoe @janedoe'));
