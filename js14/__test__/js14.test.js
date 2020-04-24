const {
  confirmgermQuantity,
  confirmMinutes,
  germCultivation
} = require('../js/js14module');

describe('細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數function twofold(b, m)。讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。', () => {
  describe('過濾細菌數量非法值', () => {
    it('輸入 "-5" 會回傳非正整數錯誤', () => {
      expect(() => confirmgermQuantity("-5")).toThrow('只可輸入正整數，請重新輸入。');
    })
    it('輸入 "3.2" 會回傳非正整數錯誤', () => {
      expect(() => confirmgermQuantity("3.2")).toThrow('只可輸入正整數，請重新輸入。');
    })
    it('輸入 "sdf&*4" 會回傳非正整數錯誤', () => {
      expect(() => confirmgermQuantity("sdf&*4")).toThrow('只可輸入正整數，請重新輸入。');
    })
  })
  describe('過濾分鐘數非法值', () => {
    it('輸入 "-34" 會回傳非正數錯誤', () => {
      expect(() => confirmMinutes("-34")).toThrow('只可輸入正整數，或是正浮點數，請重新輸入。');
    })
    it('輸入 "ljkh|}2" 會回傳非正數錯誤', () => {
      expect(() => confirmMinutes("ljkh|}2")).toThrow('只可輸入正整數，或是正浮點數，請重新輸入。');
    })
  })
  describe('計算細菌培養數量', () => {
    it('輸入 "10" 隻細菌與 "4" 分鐘，會回最後培養成 10 隻細菌', () => {
      expect(germCultivation("10", "4")).toBe(10);
    })
    it('輸入 "5" 隻細菌與 "56" 分鐘，會回最後培養成 20 隻細菌', () => {
      expect(germCultivation("5", "56")).toBe(20);
    })
  })
})