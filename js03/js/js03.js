// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

// 引入 node.js 的 readline module
const readline = require('readline');

// 引入 js module 
const {
  confirmInput,
  ticketPriceCaculater
} = require('../js/js03module.js')

// 透過 createInterface [class] 製造 readline 的問答介面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 輸入介面
function inputInterface() {
  rl.question('請輸入購票者的年齡：', (strAnswer) => {
    try {
      confirmInput(strAnswer);
      const message = ticketPriceCaculater(strAnswer);
      console.log(message);
      rl.close();
    } catch (error) {
      console.log(error.message);
      inputInterface();
    }
  })
}

inputInterface();