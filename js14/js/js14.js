// 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數function twofold(b, m) 。讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
// (細菌線性成長)

const {
  confirmgermQuantity,
  confirmMinutes,
  germCultivation
} = require('./js14module');

const rl = require('../../readline');

function firstInputInterface() {
  rl.question('這是一個細菌培養計算，請輸入初始細菌數：', (germQuantity) => {
    try {
      confirmgermQuantity(germQuantity);
      secondInputInterface(germQuantity);
    } catch (err) {
      console.log(err.message);
      firstInputInterface();
    };
  })
}

function secondInputInterface(germQuantity) {
  rl.question('再輸入培養的分鐘數：', (minutes) => {
    try {
      confirmMinutes(minutes);
      const germResultQuantity = germCultivation(germQuantity, minutes);
      console.log(`${germQuantity} 隻細菌，培養 ${minutes} 分鐘後，會有 ${germResultQuantity} 隻細菌。`);
      rl.close();
    } catch (err) {
      console.log(err.message);
      secondInputInterface(germQuantity);
    }
  })
}

firstInputInterface();