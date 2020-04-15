// 6. 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

const {
  confirmInput,
  storeNames,
  extractNameOddLetters,
  outputLetters
} = require('./js06module')

const rl = require('../../readline');

function firstInputInterface() {
  rl.question('請輸入四個英文名字，第一個名字：', (strAnswerOne) => {
    try {
      confirmInput(strAnswerOne);
    } catch (error) {
      console.log(error.message);
      firstInputInterface();
    }
    secondInputInterface(strAnswerOne);
  })
}

function secondInputInterface(strAnswerOne) {
  rl.question('第二個名字：', (strAnswerTwo) => {
    try {
      confirmInput(strAnswerTwo);
    } catch (error) {
      console.log(error.message);
      secondInputInterface(strAnswerOne);
    }
    thirdInputInterface(strAnswerOne, strAnswerTwo);
  });
}

function thirdInputInterface(strAnswerOne, strAnswerTwo) {
  rl.question('第三個名字：', (strAnswerThree) => {
    try {
      confirmInput(strAnswerThree);
    } catch (error) {
      console.log(error.message);
      thirdInputInterface(strAnswerOne, strAnswerTwo);
    }
    fourthInputInterface(strAnswerOne, strAnswerTwo, strAnswerThree);
  });
}

function fourthInputInterface(strAnswerOne, strAnswerTwo, strAnswerThree) {
  rl.question('第四個名字：', (strAnswerFour) => {
    console.log(strAnswerFour)
    try {
      confirmInput(strAnswerFour);
      let namesDepository = storeNames(strAnswerOne, strAnswerTwo, strAnswerThree, strAnswerFour);
      console.log(namesDepository)
      let nameOddLettersStorage = extractNameOddLetters(namesDepository);
      outputLetters(nameOddLettersStorage);
    } catch (error) {
      console.log(error.message);
      fourthInputInterface(strAnswerOne, strAnswerTwo, strAnswerThree);
    } finally {
      rl.close();
    }
  });
}

firstInputInterface();