// 引入要測試的 module 
const {
  confirmInput,
  ticketPriceCaculater,
  ticketTypeClassify
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
    it('輸入 4 票價為 200 元', () => {
      expect(ticketPriceCaculater(4)).toMatch('你可以買兒童票，票價為 200 元。');
    })
    it('輸入 75 票價為 200 元', () => {
      expect(ticketPriceCaculater(75)).toMatch('你可以買敬老票，票價為 200 元。');
    })
    it('輸入 27 票價為 400 元', () => {
      expect(ticketPriceCaculater(27)).toMatch('你要買的是普通票，票價為 400 元。');
    })
  })
  describe('ticketTypeClassify', () => {
    it('輸入 2 票種為兒童票', () => {
      expect(ticketTypeClassify(2)).toMatch('兒童票');
    })
    it('輸入 87 票種為敬老票', () => {
      expect(ticketTypeClassify(87)).toMatch('敬老票');
    })
    it('輸入 48 票種為普通票', () => {
      expect(ticketTypeClassify(48)).toMatch('普通票');
    })
  })
})