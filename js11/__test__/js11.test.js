const {
  confirmInput,
  feeComputer
} = require('../js/js11module');

describe('好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。', () => {
  describe('過濾非法值', () => {
    it('輸入 "three" 會回傳不合規定值', () => {
      expect(() => confirmInput('three')).toThrow('你輸入的值不合規定，請重新輸入');
    })
    it('輸入 "-2" 會回傳不合規定值', () => {
      expect(() => confirmInput('-2')).toThrow('你輸入的值不合規定，請重新輸入');
    })
  })
  describe('判斷合法值', () => {
    it('輸入 "0" 會回傳 0', () => {
      expect(feeComputer('0')).toBe(0);
    })
    it('輸入 "1" 會回傳 0', () => {
      expect(feeComputer('1')).toBe(395);
    })
    it('輸入 "6" 會回傳 0', () => {
      expect(feeComputer('6')).toBe(2695);
    })
  })
})