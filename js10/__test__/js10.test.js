const {
  pickPrimeNumber,
  pickIndex,
} = require('../js/js10.module');

describe('印出陣列中所包含的質數以及其索引值', () => {
  describe('找出質數', () => {
    it('輸入 [1,2,3,4,5,6,7,8,9,10,11] 會回傳只包含質數的陣列', () => {
      expect(pickPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual([2, 3, 5, 7, 11]);
    })
  })
  describe('找出索引值', () => {
    it('輸入 [1,2,3,4,5,6,7,8,9,10,11] 與 [2, 3, 5, 7, 11] 會回傳質數的索引值', () => {
      expect(pickIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2, 3, 5, 7, 11])).toEqual([1, 2, 4, 6, 10]);
    })
  })
})