// 10. 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，印出陣列中所包含的質數以及其索引值。
const arr = [3, 50, 0, 13, 2, 4, 11, 17, 51, 45, 97, 4];

const {
  pickPrimeNumber,
  pickIndex,
  outputResponse
} = require('./js10.module');

const primeNumber = pickPrimeNumber(arr);
const primeNumberIndex = pickIndex(arr, primeNumber);

outputResponse(primeNumber, primeNumberIndex, arr);