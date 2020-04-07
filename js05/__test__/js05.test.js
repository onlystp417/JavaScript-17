const {
  confirmInput,
  printEquation,
  computeEvenNumber
} = require('../js/js05module');

describe('', () => {
  describe('confirmInput', () => {
    it('輸入 -1 要回不可以小於 4 的錯誤', () => {
      expect(confirmInput(-1)).toMatch('你輸入的值不可以小於 4，請重新輸入。');
    })
    it('輸入 3.14 要回浮點數錯誤', () => {
      expect(confirmInput(3.14)).toMatch('你輸入的值不可以含小數點，請重新輸入。');
    })
    it('輸入 ""  要回漏輸入錯誤', () => {
      expect(confirmInput('')).toMatch('你沒輸入值，請重新輸入。');
    })
    it('輸入 "hello" 要回字串錯誤', () => {
      expect(confirmInput('hello')).toMatch('不可以輸入非數字的值，請重新輸入。');
    })
  });
  describe('printEquation', () => {
    it('輸入 5 要回相應算式', () => {
      expect(printEquation(5)).toMatch('2*4');
    })
    it('輸入 10 要回相應算式', () => {
      expect(printEquation(10)).toMatch('2*4 + 4*6 + 6*8 + 8*10');
    })
    it('輸入 15 要回相應算式', () => {
      expect(printEquation(15)).toMatch('2*4 + 4*6 + 6*8 + 8*10 + 10*12 + 12*14');
    })
  })
  describe('computeEvenNumber', () => {
    it('輸入 5 要回計算後的值', () => {
      expect(computeEvenNumber(5)).toBe(8);
    })
    it('輸入 10 要回計算後的值', () => {
      expect(computeEvenNumber(10)).toBe(160);
    })
    it('輸入 15 要回計算後的值', () => {
      expect(computeEvenNumber(15)).toBe(448);
    })
  })
})