function confirmgermQuantity(germQuantity) {
  const germQuantityReg = /^[0-9]*$/;
  if (!(germQuantityReg.test(germQuantity))) {
    throw new Error('只可輸入正整數，請重新輸入。');
  }
}

function confirmMinutes(minutes) {
  const minutesReg = /^\d+(\.\d+)?$/;
  if (!(minutesReg.test(minutes))) {
    throw new Error('只可輸入正整數，或是正浮點數，請重新輸入。');
  }
}

function germCultivation(germQuantity, minutes) {
  return minutes >= 20 ? germCultivation(germQuantity, minutes - 20) * 2 : germQuantity;
}

module.exports = {
  confirmgermQuantity,
  confirmMinutes,
  germCultivation
}