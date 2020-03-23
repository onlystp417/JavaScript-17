// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require('readline');

const {
  confirmInput,
  getPlayableMessage
} = require("./js01modules");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('歡迎光臨好想電影院，請問今天有幾人要進場觀影？', keyboardInput);

// always const -> let -> var （最小權限原則）

function keyboardInput(strTotalPurchaser) {
  // interface
  try {
    const numTotalPurchaser = confirmInput(strTotalPurchaser);
    const message = getPlayableMessage(numTotalPurchaser);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
};

// pure function 


