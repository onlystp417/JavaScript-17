const sumOfTwoArray = require('../js/js09module');

describe('兩個陣列鏡向相加', () => {
  it('輸入陣列 [1, 2, 3, 4, 5] 與 [3, 4, 5, 6, 7] 會回 [4, 6, 8, 10, 12]', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(sumOfTwoArray(arr1, arr2)).toEqual([4, 6, 8, 10, 12]);
  })
  it('輸入陣列 [2, 3, 1, 7, 9] 與 [8, 7, 9, 3, 1] 會回 [10, 10, 10, 10, 10]', () => {
    const arr1 = [2, 3, 1, 7, 9];
    const arr2 = [8, 7, 9, 3, 1];
    expect(sumOfTwoArray(arr1, arr2)).toEqual([10, 10, 10, 10, 10]);
  })
})