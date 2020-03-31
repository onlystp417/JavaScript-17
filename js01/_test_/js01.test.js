const {
  confirmInput,
  getPlayableMessage
} = require("../js/js01modules");

describe('Question Interface', () => {
  describe('過濾不合法的值', () => {
    it('輸入 hello 要回 NaN 錯誤', () => {
      expect(() => confirmInput('hello')).toThrow('呃...是要輸入人數哦！(╬☉д⊙)');
    })
    it('沒輸入值要回 " " 錯誤', () => {
      //此處要用 callback 才可以，可是 call function 才能放進引數，所以用匿名 funtion 去包裹，讓它不要在外部執行，而是透過匿名 function 執行。
      expect(() => confirmInput('')).toThrow('要輸入人數!!!!!!');
      // try {
      //   confirmInput('')
      // } catch (error) {
      //   expect(error.message).toMatch('要輸入人數!!!!!!');
      // }
    })
    it('輸入 -1 要回 <0 錯誤', () => {
      expect(() => confirmInput(-1)).toThrow('呃...人數不會小於零！(╬☉д⊙)');
    })
  })
  describe('分辨要播放或不播放', () => {
    it('輸入 0 要回取消播放訊息', () => {
      expect(getPlayableMessage(0)).toMatch('本場次沒有觀眾，取消播放。(◞‸◟)');
    })
    it('輸入 12 要回如期播放訊息', () => {
      expect(getPlayableMessage(12)).toMatch(`進場人數為 12 人，祝觀影愉快。(灬ºωº灬)`);
    })
  })
})