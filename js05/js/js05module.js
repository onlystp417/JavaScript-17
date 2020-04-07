// 過濾不合法的值
function confirmInput(strAnswer) {
  let numAnswer = +strAnswer;
  const restrictNumber = 4;
  if (numAnswer < restrictNumber) {
    return '你輸入的值不可以小於 4，請重新輸入。';
  }
  if (numAnswer % 1) {
    return '你輸入的值不可以含小數點，請重新輸入。';
  }
  if (strAnswer === '') {
    return '你沒輸入值，請重新輸入。';
  }
  if (Number.isNaN(numAnswer)) {
    return '不可以輸入非數字的值，請重新輸入。';
  }
}

// 算式
function printEquation(strAnswer) {
  let numAnswer = +strAnswer;
  let result = new Array(numAnswer)
    .fill(null)
    .map((Value, index) => index + 1)
    .filter((element) => !(element % 2) && element >= 6)
    .reduce((equation, item) => {
      item = `${item - 2}*${item}`;
      equation += ` + ${item}`;
      return equation;
    }, '2*4');
  return result;
}

// 計算
function computeEvenNumber(strAnswer) {
  let numAnswer = +strAnswer;
  let result = new Array(numAnswer)
    .fill(null)
    .map((Value, index) => index + 1)
    .filter((element) => !(element % 2) && element >= 4)
    .reduce((computed, item) => {
      item *= (item - 2);
      computed += item;
      return computed;
    }, 0);
  return `${result}`;
}

module.exports = {
  confirmInput,
  printEquation,
  computeEvenNumber
}