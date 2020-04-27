function confirmInput(strInput) {
  const atLeast5Letters = /^[A-z]{5,}$/g;
  if (!(atLeast5Letters.test(strInput))) {
    throw new Error('只能輸入英文字母，且至少 5 個字元，請重新輸入：');
  }
}

function pickCharCode(strAnswer) {
  // letter2UTF16code
  let charCodeArr = [];
  for (let i = 0; i < strAnswer.length; i++) {
    charCodeArr.push(strAnswer.charCodeAt(i));
  }
  return charCodeArr;
}

function charCodePlusThree(charCodeArr) {
  // offset3, shift3
  // UTF16codeShift3
  let caesarCipherCodeArr = [];
  for (let i = 0; i < charCodeArr.length; i++) {
    let charCode = charCodeArr[i];
    charCode = charCodeArr[i] + 3;
    if (charCode > 122) {
      charCode -= 26;
    }
    if (charCode > 90 && charCode < 97) {
      charCode -= 26;
    }
    caesarCipherCodeArr.push(charCode);
  }
  return caesarCipherCodeArr;
}

function caesarCipherChar(caesarCipherCodeArr) {
  // UTF16code2Letter
  let newString = '';
  for (let i = 0; i <= caesarCipherCodeArr.length; i++) {
    newString += String.fromCharCode(caesarCipherCodeArr[i]);
  }
  return newString;
}

module.exports = {
  confirmInput,
  pickCharCode,
  charCodePlusThree,
  caesarCipherChar
}