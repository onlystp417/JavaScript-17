function caculateScore(candidatesPointSequence, votes) {
  let condidateScoreArr = candidatesPointSequence.map(currentArray => {
    let votesIndex = 0;
    let condidateScore = currentArray.reduce((accumulator, currentValue) => {
      accumulator += currentValue * votes[votesIndex];
      votesIndex++;
      return accumulator;
    }, 0);
    return condidateScore;
  })
  return condidateScoreArr;
}

module.exports = caculateScore;