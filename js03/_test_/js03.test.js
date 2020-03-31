// 引入要測試的 module 
const {
  confirmInput,
  ticketPriceCaculater
} = require('../js/js03module.js')

describe('判斷消費者年齡並計算票價', () => {
  describe('confirmInput', () => {
    it('輸入 "abc" 要回 NaN 錯誤', () => {
      expect(() => confirmInput('abc')).toThrow('你所輸入的值不是歲數，請重新輸入。');
    })
    it('輸入 "" 要回空字串錯誤', () => {
      expect(() => confirmInput('')).toThrow('你沒有輸入值，請重新輸入。')
    })
    it('輸入 -1 要回負值錯誤', () => {
      expect(() => confirmInput(-1)).toThrow('負值不符合歲數該有的值，請重新輸入。')
    })
  })
  describe('ticketPriceCaculater', () => {
    it('輸入 4 要回兒童票價', () => {
      expect(ticketPriceCaculater(4)).toMatch('你可以買兒童票，票價為 200 元。');
    })
    it('輸入 75 要回敬老票價', () => {
      expect(ticketPriceCaculater(75)).toMatch('你可以買敬老票，票價為 200 元。');
    })
    it('輸入 27 要回原票價', () => {
      expect(ticketPriceCaculater(27)).toMatch('你的票價是 400 元。');
    })
  })
})