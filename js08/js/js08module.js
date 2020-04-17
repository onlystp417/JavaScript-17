
// // 乘以 100 作法
// function divideThree(answer) {
//   let divideFrequency = 0;
//   do {
//     answer = answer / 3;
//     var formatStrFloat = parseInt(answer * 100).toString();
//     divideFrequency += 1;
//   } while (formatStrFloat.charAt(formatStrFloat.length - 1) !== '0') {
//     console.log('yes');
//   }
//   return divideFrequency;
// }

// indexOf 作法
function divideThree(answer) {
  let divideFrequency = 0;
  do {
    answer = answer / 3;
    const formatStrFloat = answer.toString();
    var hundredth = formatStrFloat[formatStrFloat.indexOf('.') + 2];
    divideFrequency += 1;
  } while (hundredth !== '0') {
    console.log('yes');
  }
  return divideFrequency;
}

function confirmInput(answer) {
  const isPositiveNumber = /^[0-9]*$/;
  if (isPositiveNumber.test(answer)) {
  } else {
    throw new Error('輸入值不合法，請重新輸入一個「正整數」：');
  }
}

module.exports = {
  divideThree,
  confirmInput
}