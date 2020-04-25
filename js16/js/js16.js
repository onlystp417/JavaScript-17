// 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

const {
  confirmInput,
  pickCharCode,
  charCodePlusThree,
  caesarCipherChar
} = require('./js16module');

const rl = require('../../readline');

function caesarCipherInterface() {
  rl.question('輸入至少 5 個英文字母（不限大小寫）：', (strInput) => {
    try {
      confirmInput(strInput);
      const charCodeArr = pickCharCode(strInput);
      const caesarCipherCodeArr = charCodePlusThree(charCodeArr);
      const newString = caesarCipherChar(caesarCipherCodeArr);
      console.log(charCodeArr);
      console.log(caesarCipherCodeArr);
      console.log(`你輸入的字母經過凱薩加密後，是 ${newString}`);
      rl.close();
    } catch (err) {
      console.log(err.message);
      caesarCipherInterface();
    }
  })
}

caesarCipherInterface();