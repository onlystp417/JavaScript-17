
function pickPrimeNum() {
  let primeNumArr = [];
  for (let i = 10; i < 21; i++) {
    let isPrimeNum = true;
    for (let n = 2; n <= Math.sqrt(i); n++) {
      if (i % n === 0) {
        isPrimeNum = false;
      }
    }
    if (isPrimeNum) {
      primeNumArr.push(i);
    }
  }
  return primeNumArr;
}

function pickMultipleNumOfPrimeNum() {
  const primeNumArr = pickPrimeNum();
  let multipleNumOfPrimeNum = [];
  primeNumArr.forEach(primeNum => {
    for (let i = primeNum; i < 101; i++) {
      if (!(i % primeNum)) {
        multipleNumOfPrimeNum.push(i);
      }
    }
  })
  return multipleNumOfPrimeNum;
}

module.exports = {
  pickPrimeNum,
  pickMultipleNumOfPrimeNum
}