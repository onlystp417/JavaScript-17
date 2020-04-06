// 引入要測試的 module 
const {
  confirmInput,
  computeIntagers,
  printEquation
} = require('../js/js04module.js')

describe('輸入正整數並印出 印出 1+2-3+4-5+6...n 算式與總和', () => {
  describe('confirmInput', () => {
    it('輸入 "abc" 要回 NaN 錯誤', () => {
      expect(() => confirmInput('abc')).toThrow('你所輸入的值不是數字，請重新輸入。');
    })
    it('輸入 "" 要回空字串錯誤', () => {
      expect(() => confirmInput('')).toThrow('你沒有輸入值，請重新輸入。')
    })
    it('輸入 -1 要回非正整數錯誤', () => {
      expect(() => confirmInput(-1)).toThrow('不可以輸入零或負值，請重新輸入。')
    })
    it('輸入 0.3 要回浮點數錯誤', () => {
      expect(() => confirmInput(0.3)).toThrow('不可以輸入浮點數，請重新輸入。')
    })
  })
  describe('印出算式並計算結果', () => {
    it('printEquation', () => {
      expect(printEquation(5)).toMatch('1 + 2 - 3 + 4 - 5');
    })
    it('printEquation', () => {
      expect(printEquation(8)).toMatch('1 + 2 - 3 + 4 - 5 + 6 - 7 + 8');
    })
    it('printEquation', () => {
      expect(printEquation(12)).toMatch('1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9 + 10 - 11 + 12');
    })
    it('computeIntagers', () => {
      expect(computeIntagers(9)).toBe('-3');
    })
    it('computeIntagers', () => {
      expect(computeIntagers(17)).toBe('-7');
    })
    it('computeIntagers', () => {
      expect(computeIntagers(34)).toBe('19');
    })
  })
})