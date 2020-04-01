// 輸出成 module
module.exports = {
  confirmInput,
  computeIntagers,
  printEquation
}

// 檔掉不合法的值
function confirmInput(strAnswer) {
  let positiveIntager = +strAnswer;
  if (Number.isNaN(positiveIntager)) {
    throw new Error('你所輸入的值不是數字，請重新輸入。');
  } else if (strAnswer === '') {
    throw new Error('你沒有輸入值，請重新輸入。');
  } else if (positiveIntager < 1 && positiveIntager % 1 == 0) {
    throw new Error('必須要輸入「正」整數，請重新輸入。');
  } else if (positiveIntager % 1 !== 0) {
    throw new Error('不可以輸入浮點數，請重新輸入。');
  }
}

// 計算
function computeIntagers(strAnswer) {
  let positiveInputIntager = +strAnswer;
  // let startedIntager = 1;
  let result;
  for (i = 1; i <= positiveInputIntager; i++) {
    if (i === 1) {
      result = 1;
    }
    if (i > 1 && i % 2 === 0) {
      result = result + i;
    }
    if (i > 1 && i % 2 !== 0) {
      result = result - i;
    }
  }
  return `${result}`;
}

function printEquation(strAnswer) {
  let positiveInputIntager = +strAnswer;
  let equation;
  for (i = 1; i <= positiveInputIntager; i++) {
    if (i === 1) {
      equation = `${i}`;
    }
    if (i > 1 && i % 2 === 0) {
      equation = `${equation} + ${i}`;
    }
    if (i > 1 && i % 2 !== 0) {
      equation = `${equation} - ${i}`
    }
  }
  return `${equation}`;
}