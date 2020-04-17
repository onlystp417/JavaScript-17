const {
  divideThree,
  confirmInput
} = require('../js/js08module');

describe('重複除以 3 小數點第二位得 0 的次數', () => {
  describe('擋掉非法值', () => {
    it('輸入特殊符號 "~!%" 回輸入錯誤', () => {
      expect(() => confirmInput('~!%')).toThrow('輸入值不合法，請重新輸入一個「正整數」：')
    })
    it('輸入負數 -42 回輸入錯誤', () => {
      expect(() => confirmInput(-42)).toThrow('輸入值不合法，請重新輸入一個「正整數」：')
    })
    it('輸入字串 "three" 回輸入錯誤', () => {
      expect(() => confirmInput('three')).toThrow('輸入值不合法，請重新輸入一個「正整數」：')
    })
    it('輸入浮點數 99.99 回輸入錯誤', () => {
      expect(() => confirmInput(99.99)).toThrow('輸入值不合法，請重新輸入一個「正整數」：')
    })
  })
  describe('重複除以 3 小數點第二位得 0 的次數', () => {
    it('輸入 44 回計算 8 次', () => {
      expect(divideThree(44)).toMatch('44 要除以 8 次，小數點後二位才是 0。');
    })
    it('輸入 71 回計算 9 次', () => {
      expect(divideThree(71)).toMatch('71 要除以 9 次，小數點後二位才是 0。');
    })
    it('輸入 36 回計算 1 次', () => {
      expect(divideThree(36)).toMatch('36 要除以 1 次，小數點後二位才是 0。');
    })
  })
})