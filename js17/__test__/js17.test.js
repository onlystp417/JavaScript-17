const caculateScore = require('../js/js17module');

describe('運用 Borda Count。算出候選人的分數', () => {
  it('輸入：候選人每張的得票順序分數 [[4, 2, 1, 4],[2, 3, 4, 1],[3, 1, 2, 2],[1, 4, 3, 3]]\n票數：[24, 65, 46, 51] 會得到各個候選人的總計分。', () => {
    const candidatesPointSequence = [
      [4, 2, 1, 4],
      [2, 3, 4, 1],
      [3, 1, 2, 2],
      [1, 4, 3, 3]
    ]
    const votes = [51, 5, 23, 21];
    expect(caculateScore(candidatesPointSequence, votes)).toEqual([321, 230, 246, 203]);
  })
  it('輸入：候選人每張的得票順序分數 [[4, 1, 1, 1],[3, 4, 3, 3],[2, 3, 4, 2],[1, 2, 2, 4]];\n票數：[51, 5, 23, 21] 會得到各個候選人的總計分。', () => {
    const candidatesPointSequence = [
      [4, 1, 1, 1],
      [2, 3, 4, 2],
      [3, 4, 3, 3],
      [1, 2, 2, 4]
    ];
    const votes = [51, 5, 23, 21];
    expect(caculateScore(candidatesPointSequence, votes)).toEqual([253, 251, 305, 191]);
  })
})