// 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

const {
  confirmInput,
  feeComputer
} = require('./js11module');

const rl = require('../../readline');

function saleInterface() {
  rl.question('歡迎光臨好想健身房，每期會費500元，第一期79折，每滿五期再折200元，請問您要買幾期？', strAnswer => {
    try {
      confirmInput(strAnswer);
      const response = feeComputer(strAnswer);
      if (!response) {
        console.log(`你沒有購買，總價為 ${response} 元，歡迎下次再光臨。`)
      } else {
        console.log(`你購買 ${strAnswer} 期，總價為 ${response} 元。`)
      }
      rl.close();
    } catch (error) {
      console.log(error.message);
      saleInterface();
    }
  })
}

saleInterface();
