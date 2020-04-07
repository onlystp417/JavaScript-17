// 5. 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)

const {
  confirmInput,
  printEquation,
  computeEvenNumber
} = require('../js/js05module')

const rl = require('../../readline');

function inputInterface() {
  rl.question('輸入一個不小於 4 的數字', (strAnswer) => {
    let numAnswer = +strAnswer;
    if (numAnswer >= 4 && !(numAnswer % 1)) {
      let message = `${printEquation(strAnswer)} = ${computeEvenNumber(strAnswer)}`;
      console.log(message);
      rl.close();
    } else {
      confirmInput(strAnswer);
      inputInterface();
    }
  })
}

inputInterface();