// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('歡迎光臨好想電影院，請問今天有幾人要進場觀影？', (purchaser) => {
  switch (+purchaser + '') {
    case ('0'):
      console.log('本場次沒有觀眾，取消播放。(◞‸◟)');
      break;
    case ('NaN'):
      console.log('呃...是要輸入人數哦！(╬☉д⊙)');
      break;
    default:
      console.log(`進場人數為 ${purchaser} 人，祝觀影愉快。(灬ºωº灬)`);
      break;
  }
  rl.close();
});