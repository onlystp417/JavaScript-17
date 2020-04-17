function sumOfTwoArray(arr1, arr2) {
  let resultArray = [];
  let caculatedArray = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    caculatedArray.push(arr1[i] + arr2[i]);
    resultArray = caculatedArray.reverse();
  }
  console.log(resultArray);
}

module.exports = sumOfTwoArray;