function confirmInput(strAnswer) {
  const reg = /^[0-9]*$/;
  if (!(reg.test(strAnswer))) {
    throw new Error('你輸入的值不合規定，請重新輸入');
  }
}

function feeComputer(strAnswer) {
  let feeTotal = 0;
  let periods = +strAnswer;
  let counter = 0;
  const perPrice = 500;
  const discount = .79;
  const redution = 200;
  if (+strAnswer === 0) {
    return 0;
  } else {
  }
  do {
    if (counter) {
      feeTotal += perPrice;
      periods--;
      counter++;
    }
    if (!feeTotal) {
      feeTotal = perPrice * discount;
      periods--;
      counter++;
    }
    if (!(counter % 5)) {
      feeTotal -= redution;
    }
  } while (periods > 0);
  return feeTotal;
}

module.exports = {
  confirmInput,
  feeComputer
}