// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

// 引入 node.js 的 readline module
const readline = require('readline');

// 引入 js module
const {
  confirmInput,
  compareTwoNumDivideThree
} = require("./js02modules");

// 透過 createInterface [class] 製造 readline 的問答介面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 輸入介面
function inputInterface() {
  rl.question('請輸入第一個整數', (strAanswer1) => {
    rl.question('請輸入第二個整數', (strAnswer2) => {
      try {
        confirmInput(strAanswer1, strAnswer2);
        const message = compareTwoNumDivideThree(strAanswer1, strAnswer2);
        console.log(message);
        rl.close();
      } catch (error) {
        console.log(error.message);
        inputInterface();
      }
    })
  })
}

inputInterface();