const {
  confirmInput,
  compareTwoNumDivideThree
} = require("../js/js02modules");

describe('檢查兩個整數除以三於數是否相等', () => {
  describe('confirmInput', () => {
    it('輸入 "abc" 要回 NaN 錯誤', () => {
      expect(() => confirmInput('abc')).toThrow('你所輸入的值含有非數字，請重新輸入：');
    })
    it('輸入 "" 要回空字串錯誤', () => {
      expect(() => confirmInput('')).toThrow('你漏輸入值了，請重新輸入：')
    })
    it('輸入 0.2 要回浮點數錯誤', () => {
      expect(() => confirmInput(0.2)).toThrow('你輸入的值含有浮點數，請重新輸入：')
    })
  })
  describe('compareTwoNumDivideThree', () => {
    it('輸入 4 跟 7 要回餘數相同', () => {
      expect(compareTwoNumDivideThree(4, 7)).toMatch('餘數相同。');
    })
    it('輸入 10 跟 3 要回餘數不相同', () => {
      expect(compareTwoNumDivideThree(10, 3)).toMatch('餘數不相同。');
    })
  })
})