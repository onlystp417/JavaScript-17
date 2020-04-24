// 15. 有一輛搬運車，限重1噸（1,000 kg），啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

const goodsWeightArr = [30, 20, 50];
var dumbbellsAmount = 0;
var monkeybarAmount = 0;
var treadmilAmount = 0;


// console.log(goodsWeightArr[getRandomIndex(0, 2)]);

function carryGoodsWeightCounter(goodsWeightArr) {
  let totalGoodsWeight = 0;
  do {
    if (totalGoodsWeight <= 1000) {
      let goodsIndex = getRandomIndex(0, 2);
      totalGoodsWeight += goodsWeightArr[goodsIndex];
      carryGoodsNameCounter(goodsIndex);
    }
  } while (totalGoodsWeight <= 1000);
  console.log(dumbbellsAmount);
  console.log(monkeybarAmount);
  console.log(treadmilAmount);
  console.log(totalGoodsWeight);


  // return {
  //   totalGoodsWeight,
  //   dumbbellsAmount,
  //   monkeybarAmount,
  //   treadmilAmount
  // }
}

function carryGoodsNameCounter(goodsIndex) {
  if (!(goodsIndex)) {
    dumbbellsAmount += 1;
  } else if (goodsIndex === 1) {
    monkeybarAmount += 1;
  } else {
    treadmilAmount += 1;
  }
  // return {
  //   dumbbellsAmount,
  //   monkeybarAmount,
  //   treadmilAmount
  // }
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

console.log(carryGoodsWeightCounter(goodsWeightArr));
