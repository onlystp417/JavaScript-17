module.exports = {
  confirmInput,
  getPlayableMessage
}

function confirmInput(strTotalPurchaser) {
  const numTotalPurchaser = +strTotalPurchaser;
  if (Number.isNaN(numTotalPurchaser)) {
    throw new Error('呃...是要輸入人數哦！(╬☉д⊙)');
  }
  if (strTotalPurchaser === "") {
    throw new Error('要輸入人數哦!!!!!!');
  }
  if (strTotalPurchaser < 0) {
    throw new Error('呃...是要輸入人數哦！(╬☉д⊙)');
  }

  return numTotalPurchaser;
}

function getPlayableMessage(numTotalPurchaser) {
  if (!numTotalPurchaser) {
    return '本場次沒有觀眾，取消播放。(◞‸◟)';
  }
  else {
    return `進場人數為 ${numTotalPurchaser} 人，祝觀影愉快。(灬ºωº灬)`;
  }
}