module.exports = {
  confirmInput,
  compareTwoNumDivideThree,
  secondInputInterface
}

// 第二次提問
const rl = require("../../readline");
function secondInputInterface(strFirstAanswer) {
  rl.question('請輸入第二個整數：', function (strSecondAnswer) {
    try {
      confirmInput(strSecondAnswer);
      const message = compareTwoNumDivideThree(strFirstAanswer, strSecondAnswer);
      console.log(message);
      rl.close();
    } catch (error) {
      console.log(error.message);
      secondInputInterface(strFirstAanswer);
    }
  })
}

// 過濾不合規定的值
function confirmInput(strAnswer) {
  let numAnswer = +strAnswer;
  if (Number.isNaN(numAnswer)) {
    throw new Error('你所輸入的值含有非數字，請重新輸入：');
  } else if (!(strAnswer)) {
    throw new Error('你漏輸入值了，請重新輸入：');
  } else if (numAnswer % 1) {
    throw new Error('你輸入的值含有浮點數，請重新輸入：');
  }
}

// 分辨兩個整數除以三，於數是否相同
function compareTwoNumDivideThree(strFirstAanswer, strSecondAnswer) {
  let firstIntager = +strFirstAanswer;
  let secondIntager = +strSecondAnswer;
  if (firstIntager % 3 === secondIntager % 3) {
    return '餘數相同。';
  } else {
    return '餘數不相同。';
  }
}
