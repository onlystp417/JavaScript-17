// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

// 引入 js module
const {
  confirmInput,
  secondInputInterface
} = require("./js02modules");

// 引入寫在外層的 readline createInterface module，
const rl = require("../../readline");

// 輸入介面
function inputInterface() {
  rl.question('請輸入第一個整數：', (strFirstAanswer) => {
    try {
      confirmInput(strFirstAanswer);
    } catch (error) {
      console.log(error.message);
      inputInterface();
    }
    secondInputInterface(strFirstAanswer);
  })
}

// inputInterface();
module.exports = inputInterface;