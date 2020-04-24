// 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 function  divi(n) 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

const {
  divideThree,
  confirmInput
} = require('./js08module');

const rl = require('../../readline');

function inputInterface() {
  rl.question('輸入一個正整數：', (answer) => {
    try {
      confirmInput(answer);
      const divideFrequency = divideThree(answer);
      console.log(divideFrequency);
    } catch (err) {
      console.log(err.message);
      inputInterface();
    } finally {
      rl.close();
    }
  })
}

// inputInterface();

module.exports = inputInterface;