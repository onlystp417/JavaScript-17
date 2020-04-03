module.exports = {
  confirmInput,
  ticketPriceCaculater,
  ticketTypeClassify
}

// 檔掉不合法的值
function confirmInput(strAnswer) {
  let consumerAge = +strAnswer;
  if (Number.isNaN(consumerAge)) {
    throw new Error('你所輸入的值不是歲數，請重新輸入。');
  } else if (strAnswer === '') {
    throw new Error('你沒有輸入值，請重新輸入。');
  } else if (consumerAge < 0) {
    throw new Error('負值不符合歲數該有的值，請重新輸入。');
  }
}

// 計算票價
function ticketPriceCaculater(strAnswer) {
  let consumerAge = +strAnswer;
  const ticketPrice = 400;
  const discount = 0.5;
  const ticketType = ticketTypeClassify(strAnswer);
  if (consumerAge <= 6) {
    return `你可以買${ticketType}，票價為 ${ticketPrice * discount} 元。`;
  } else if (consumerAge >= 65) {
    return `你可以買${ticketType}，票價為 ${ticketPrice * discount} 元。`
  } else {
    return `你要買的是${ticketType}，票價為 ${ticketPrice} 元。`;
  }
}

// 票種分類
function ticketTypeClassify(strAnswer) {
  let consumerAge = +strAnswer;
  let ticketType = '';
  if (consumerAge <= 6) {
    ticketType = '兒童票';
  } else if (consumerAge >= 65) {
    ticketType = '敬老票';
  } else {
    ticketType = '普通票';
  }
  return ticketType;
}