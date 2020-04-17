function sumOfTwoArray(arr1, arr2) {
  let caculatedArray = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    caculatedArray.push(arr1[i] + arr2[i]);
  }
  console.log(`兩個陣列內的值相加後為： ${caculatedArray}`);
  return caculatedArray;
}

module.exports = sumOfTwoArray;