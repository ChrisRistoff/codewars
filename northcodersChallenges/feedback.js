function gatherFeedback(feedbackArray) {
  let positive = 0;
  let negative = 0;
  let neutral = 0;
  for (let array of feedbackArray) {
    if (array[1] >= 7) {
      positive++
    }

    else if (array[1] < 7 && array[1] >= 4) {
      neutral++
    } 

    else if (array[1] <= 3) {
      negative++
    }
  }

    return {
      positive: positive,
      negative: negative,
      neutral: neutral
      }
    }

const feedbackArray = [
  ['question one', 5],
  ['question two', 8],
  ['question three', 2],
  ['question four', 4],
]

console.log(gatherFeedback(feedbackArray));
