const {
  pickPrimeNum,
  pickMultipleNumOfPrimeNum
} = require('../js/js12module');

describe('找出10~20的質數，並列出前述各質數在1~100的倍數', () => {
  it('找出10~20的質數', () => {
    expect(pickPrimeNum()).toEqual([11, 13, 17, 19]);
  })
  it('找出質數的倍數', () => {
    expect(pickMultipleNumOfPrimeNum()).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 13, 26, 39, 52, 65, 78, 91, 17, 34, 51, 68, 85, 19, 38, 57, 76, 95]);
  })
})