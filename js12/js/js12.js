// 12. 找出10~20的質數，並列出前述各質數在1~100的倍數

const {
  pickPrimeNum,
  pickMultipleNumOfPrimeNum
} = require('./js12module');

function printAnswer() {
  const primeNumArr = pickPrimeNum();
  const multipleNumOfPrimeNum = pickMultipleNumOfPrimeNum();
  console.log(`找出10~20的質數，並列出前述各質數在1~100的倍數。\n質數有：${primeNumArr}\n質數的倍數有：${multipleNumOfPrimeNum}`);
}

printAnswer();