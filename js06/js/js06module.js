// 用正則過濾輸入值
function confirmInput(inputAnswer) {
  const noNumber = /[0-9~`!\?@#$%^&*\)\(_\-+=\[\]\{\}|\\"':;\/<>]/g;
  if (noNumber.test(inputAnswer)) {
    throw new Error('不可包含數字或特殊字元，請重新輸入。')
  };
}

// 把名字放入陣列中
function storeNames(strAnswerOne, strAnswerTwo, strAnswerThree, strAnswerFour) {
  let namesDepository = [];
  namesDepository.push(strAnswerOne, strAnswerTwo, strAnswerThree, strAnswerFour);
  // console.log(namesDepository);
  return namesDepository;
}

// 取出第 1、3 個名字的奇數字母
function extractNameOddLetters(namesDepository) {
  let nameOddLettersStorage = [];
  const nameFirst = namesDepository[0];
  const nameThird = namesDepository[2];
  for (i = 0; i < nameFirst.length; i++) {
    if (!(i % 2)) {
      nameOddLettersStorage.push(nameFirst.charAt(i));
    }
  }
  for (i = 0; i < nameThird.length; i++) {
    if (!(i % 2)) {
      nameOddLettersStorage.push(nameThird.charAt(i));
    }
  }
  // console.log(nameOddLettersStorage);
  return nameOddLettersStorage;
}

// 印出字母
function outputLetters(nameOddLettersStorage) {
  let result = '';
  for (i = 0; i < nameOddLettersStorage.length; i++) {
    result += ` ${nameOddLettersStorage[i]}`;
  }
  return result;
}

module.exports = {
  confirmInput,
  storeNames,
  extractNameOddLetters,
  outputLetters
}