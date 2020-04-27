// 17. 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
/*
    #  | 51票 | 5票 | 23票 | 21票
----------------------------------
第一順位 |  1  |  3  |  2   | 4
----------------------------------
第二順位 |  3  |  2  |  3   | 3
----------------------------------
第三順位 |  2  |  4  |  4   | 2
----------------------------------
第四順位 |  4  |  1  |  1   | 1
*/

const caculatesScoreCaculator = require('./js17module');

function responseInterface() {
  const candidatesPointSequence = [
    [4, 1, 1, 1],
    [2, 3, 4, 2],
    [3, 4, 3, 3],
    [1, 2, 2, 4]
  ];
  const votes = [51, 5, 23, 21];
  const condidateScoreArr = caculatesScoreCaculator(candidatesPointSequence, votes);
  console.log(`
  1 號參選人的票數得分為 ${condidateScoreArr[0]} 分
  2 號參選人的票數得分為 ${condidateScoreArr[1]} 分
  3 號參選人的票數得分為 ${condidateScoreArr[2]} 分
  4 號參選人的票數得分為 ${condidateScoreArr[3]} 分
  `);
}

responseInterface();

// 模仿 Chris 寫法

// dataTable2CandidatesPoint();

// function dataTable2CandidatesPoint() {
//   const candidatesPoint = [null, 0, 0, 0, 0];
//   const votes = [51, 5, 23, 21];
//   const dataTable = [
//     [1, 3, 2, 4],
//     [3, 2, 4, 1],
//     [2, 3, 4, 1],
//     [4, 3, 2, 1]
//   ]
//   const candidatesScore = dataTable.map((currentVoteSort, votesIndex) => {
//     return currentVoteSort.forEach((candidateNumber, candidateSequence) => {
//       const aaa = candidatesPoint[candidateNumber] += (4 - candidateSequence) * votes[votesIndex];
//       return aaa;
//     })
//   })
//   console.log(candidatesScore);
// }


// Chris 寫法

// const totalTicket = [51, 5, 23, 21]

// var data = [
//   [1, 3, 2, 4],
//   [3, 2, 3, 3],
//   [2, 4, 4, 2],
//   [4, 1, 1, 1]
// ]

// var totalPointCandidates = [null, 0, 0, 0, 0]; // index 0 not use
// const pointSequence = [4, 3, 2, 1];


// data.map((sequence, seqIndex) => sequence.forEach(calcCandidatesPoint(seqIndex)))

// function calcCandidatesPoint(seqIndex) {
//   return (indexCandidate, index) => totalPointCandidates[indexCandidate] += totalTicket[index] * pointSequence[seqIndex];
// }

// console.log("totalPointCandidates", totalPointCandidates);