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
  } else if (!strAnswer) {
    throw new Error('你沒有輸入值，請重新輸入。');
  } else if (positiveIntager < 1 && !(positiveIntager % 1)) {
    throw new Error('不可以輸入零或負值，請重新輸入。');
  } else if (positiveIntager % 1) {
    throw new Error('不可以輸入浮點數，請重新輸入。');
  }
}

// 計算
function computeIntagers(strAnswer) {
  let positiveInputIntager = +strAnswer;
  // 建立一個固定長度的 Array(lenth)
  let result = Array(positiveInputIntager)
    // 在每個 slot 中塞進 null 值
    .fill(null)
    // .map(function(a, b) => {})Null 接到的是當前的值，index 接到的是 index，並產生一個新陣列，依序塞進去 index + 1 值。
    .map((Null, index) => index + 1)
    // 過濾掉 1
    .filter(x => x !== 1)
    // 依序計算陣列內的值 reduce(function(累加器 , 當前值) => {}, 初始值)
    .reduce((sum, item) => {
      item *= (item % 2) ? -1 : 1;
      sum += item;
      return sum;
    }, 1);
  return `${result}`;
}

// for 迴圈做法，如果可以用 array 解決，就不要用 for 迴圈
// function computeIntagers(strAnswer) {
//   let positiveInputIntager = +strAnswer;
//   let result = 1;
//   for (i = 2; i <= positiveInputIntager; i++) {
//     if (!(i % 2)) {
//       result += i;
//     }
//     else {
//       result -= i;
//     }
//   }
//   return `${result}`;
// }


function printEquation(strAnswer) {
  let positiveInputIntager = +strAnswer;
  let result = Array(positiveInputIntager)
    .fill(null)
    .map((Null, index) => index + 1)
    .filter(x => x !== 1)
    .reduce((equation, item) => {
      if (item % 2) {
        item = ` - ${item}`;
      } else {
        item = ` + ${item}`;
      }
      equation += item;
      return equation;
    }, '1')
  return result;
}

// function printEquation(strAnswer) {
//   let positiveInputIntager = +strAnswer;
//   let equation = '1';
//   for (i = 2; i <= positiveInputIntager; i++) {
//     if (!(i % 2)) {
//       equation += `+${i}`;
//     }
//     else {
//       equation += `-${i}`;
//     }
//   }
//   return `${equation}`;
// }