// 4. 輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

// 引入 node.js 的 readline module
const readline = require('readline');

// 引入 js module 
const {
  confirmInput,
  computeIntagers,
  printEquation
} = require('../js/js04module.js')

// 透過 createInterface [class] 製造 readline 的問答介面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 輸入介面
function inputInterface() {
  rl.question('請輸入一個正整數：', (strAnswer) => {
    try {
      confirmInput(strAnswer);
      const message = `${printEquation(strAnswer)} = ${computeIntagers(strAnswer)}`;
      console.log(message);
      rl.close();
    } catch (error) {
      console.log(error.message);
      inputInterface();
    }
  })
}

inputInterface();