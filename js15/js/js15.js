// 15. 有一輛搬運車，限重1噸（1,000 kg），啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

const {
  carryGoodsWeightCounter,
} = require('./js15module');

function responseInterface() {
  const response = carryGoodsWeightCounter();
  console.log(`
  總載重量為 ${response.totalGoodsWeight} 公斤。
  貨物數量為：啞鈴 ${response.dumbbellsAmount} 箱、單槓 ${response.monkeybarAmount} 箱、跑步機 ${response.treadmilAmount} 台。
  `)
}

responseInterface();