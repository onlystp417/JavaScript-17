// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

// 解構賦值 Destructuring Assignment
const {
  confirmInput,
  getPlayableMessage
} = require("./js01modules");

var strTotalPurchaser = +process.argv[2];

console.log(`好想電影院本場次買票人數： ${strTotalPurchaser} 人。`);

try {
  const numTotalPurchaser = confirmInput(strTotalPurchaser);
  const message = getPlayableMessage(numTotalPurchaser);
  console.log(message);
} catch (error) {
  console.log(error.message);
}

// if (Number.isNaN(strTotalPurchaser) || strTotalPurchaser < 0) {
//   console.log('呃...是要輸入人數哦！(╬☉д⊙)');
// } else if (strTotalPurchaser === 0) {
//   console.log('本場次沒有觀眾，取消播放。(◞‸◟)');
// } else {
//   console.log(`進場人數為 ${strTotalPurchaser} 人，祝觀影愉快。(灬ºωº灬)`)
// }