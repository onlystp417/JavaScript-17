const goodsWeightArr = [30, 20, 50];
var dumbbellsAmount = 0;
var monkeybarAmount = 0;
var treadmilAmount = 0;

var goods = [0, 0, 0];

// enum
var goodsType = {
  dumbbells: 0,
  monkeybar: 1,
  treadmil: 2
}

function carryGoodsWeightCounter() {
  let totalGoodsWeight = 0;
  // while
  let goodsIndex = getRandomIndex(0, 2);
  while (totalGoodsWeight + goodsWeightArr[goodsIndex] < 1000) {
    totalGoodsWeight += goodsWeightArr[goodsIndex];
    goods[goodsIndex]++;
    // carryGoodsNameCounter(goodsIndex);
    goodsIndex = getRandomIndex(0, 2);
  }

  // if (totalGoodsWeight > 1000) {
  //   totalGoodsWeight -= goodsWeightArr[goodsIndex];
  // }
  return {
    totalGoodsWeight,
    dumbbellsAmount: goods[goodsType.dumbbells],
    monkeybarAmount: goods[goodsType.monkeybar],
    treadmilAmount: goods[goodsType.treadmil]
  }
}

// function carryGoodsNameCounter(goodsIndex) {
//   if (!(goodsIndex)) {
//     dumbbellsAmount += 1;
//   } else if (goodsIndex === 1) {
//     monkeybarAmount += 1;
//   } else {
//     treadmilAmount += 1;
//   }
// }

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

module.exports = {
  carryGoodsWeightCounter
  // carryGoodsNameCounter,
  // getRandomIndex
}