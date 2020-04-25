const {
  confirmInput,
  pickCharCode,
  charCodePlusThree,
  caesarCipherChar
} = require('../js/js16module');

describe('運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果', () => {
  describe('過濾非法值', () => {
    it('輸入 "asd" 會回傳錯誤輸入', () => {
      expect(() => confirmInput('asd')).toThrow('只能輸入英文字母，且至少 5 個字元，請重新輸入：');
    })
    it('輸入 "123" 會回傳錯誤輸入', () => {
      expect(() => confirmInput('123')).toThrow('只能輸入英文字母，且至少 5 個字元，請重新輸入：');
    })
    it('輸入 "asds904lks" 會回傳錯誤輸入', () => {
      expect(() => confirmInput('asds904lks')).toThrow('只能輸入英文字母，且至少 5 個字元，請重新輸入：');
    })
  })
  describe('得到輸入值的 UTF-16 code', () => {
    it('輸入 "Jinwen" 會回傳 UTF-16 code', () => {
      expect(pickCharCode('Jinwen')).toEqual([74, 105, 110, 119, 101, 110]);
    })
  })
  describe('將輸入值的 UTF-16 code 往後移 3 個順序', () => {
    it('輸入 [74, 105, 110, 119, 101, 110] 會回傳 UTF-16 code', () => {
      expect(charCodePlusThree([74, 105, 110, 119, 101, 110])).toEqual([77, 108, 113, 122, 104, 113]);
    })
  })
  describe('將 UTF-16 code 轉為字母', () => {
    it('輸入 [ 77, 108, 113, 122, 104, 113 ] 會回傳 "Mlqzhq" ', () => {
      expect(caesarCipherChar([77, 108, 113, 122, 104, 113])).toMatch('Mlqzhq');
    })
  })
})