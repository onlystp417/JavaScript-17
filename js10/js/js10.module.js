function pickPrimeNumber(arr) {
  const primeNumber = arr.filter(function (value) {
    let isPrimeNumber = true;
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (value === 1) {
      isPrimeNumber = false;
    }
    if (isPrimeNumber) {
      return value;
    }
  })
  return primeNumber;
}

function pickIndex(arr, resultValue) {
  const primeNumberIndex = [];
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < resultValue.length; n++) {
      if (resultValue[n] === arr[i]) {
        primeNumberIndex.push(i);
      }
    }
  }
  return primeNumberIndex;
}

function outputResponse(primeNumber, primeNumberIndex) {
  for (let i = 0; i < primeNumber.length; i++) {
    console.log(`質數為： ${primeNumber[i]}，索引值是： ${primeNumberIndex[i]}`);
  }
}

module.exports = {
  pickPrimeNumber,
  pickIndex,
  outputResponse
}