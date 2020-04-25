const goodsWeightArr = [30, 20, 50];
var dumbbellsAmount = 0;
var monkeybarAmount = 0;
var treadmilAmount = 0;

function carryGoodsWeightCounter() {
  let totalGoodsWeight = 0;
  do {
    let goodsIndex = getRandomIndex(0, 2);
    totalGoodsWeight += goodsWeightArr[goodsIndex];
    carryGoodsNameCounter(goodsIndex);
    if (totalGoodsWeight > 1000) {
      totalGoodsWeight -= goodsWeightArr[goodsIndex];
      return {
        totalGoodsWeight,
        dumbbellsAmount,
        monkeybarAmount,
        treadmilAmount
      }
    }
  } while (totalGoodsWeight <= 1000);
}

function carryGoodsNameCounter(goodsIndex) {
  if (!(goodsIndex)) {
    dumbbellsAmount += 1;
  } else if (goodsIndex === 1) {
    monkeybarAmount += 1;
  } else {
    treadmilAmount += 1;
  }
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

module.exports = {
  carryGoodsWeightCounter,
  carryGoodsNameCounter,
  getRandomIndex
}