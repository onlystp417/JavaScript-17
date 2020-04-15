const {
  confirmInput,
  storeNames,
  extractNameOddLetters,
  outputLetters
} = require('../js/js06module')

describe('讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母', () => {
  describe('過濾非法值', () => {
    it('輸入 123 會回非法值錯誤', () => {
      expect(() => confirmInput(123)).toThrow('不可包含數字或特殊字元，請重新輸入。');
    })
    it('輸入 "$#%" 會回非法值錯誤', () => {
      expect(() => confirmInput("$#%")).toThrow('不可包含數字或特殊字元，請重新輸入。');
    })
    it('輸入 "7{~8}|Jinwen" 會回非法值錯誤', () => {
      expect(() => confirmInput("7{~8}|Jinwen")).toThrow('不可包含數字或特殊字元，請重新輸入。');
    })
  })
  describe('把輸入值放入陣列中', () => {
    it('輸入 "Jinwen"、"Amber"、"Yachen"、"Larry" 會回陣列形式，並且將名字放入該陣列', () => {
      expect(storeNames("Jinwen", "Amber", "Yachen", "Larry")).toEqual(["Jinwen", "Amber", "Yachen", "Larry"]);
    })
  })
  describe('取出第 1、3 個名字的奇數字母', () => {
    it('輸入 [ "Jinwen", "Amber", "Yachen", "Larry" ] 會回陣列形式，並且將名字放入該陣列', () => {
      expect(extractNameOddLetters(["Jinwen", "Amber", "Yachen", "Larry"])).toEqual(['J', 'n', 'e', 'Y', 'c', 'e']);
    })
  })
  describe('將陣列中的字母逐行印出', () => {
    it('輸入 ["J", "n", "e", "Y", "c", "e"] 會將陣列中的字母逐個印出', () => {
      expect(outputLetters(["J", "n", "e", "Y", "c", "e"])).toMatch('J n e Y c e');
    })
  })
})