module.exports = {
  confirmInput,
  getPlayableMessage
}

//過濾掉無效的值
function confirmInput(strTotalPurchaser) {
  const numTotalPurchaser = +strTotalPurchaser;
  if (Number.isNaN(numTotalPurchaser)) {
    throw new Error('呃...是要輸入人數哦！(╬☉д⊙)');
  }
  if (strTotalPurchaser === "") {
    throw new Error('要輸入人數!!!!!!');
  }
  if (strTotalPurchaser < 0) {
    throw new Error('呃...人數不會小於零！(╬☉д⊙)');
  }
  return numTotalPurchaser;
}

//分辨要播放或不播放的人數
function getPlayableMessage(numTotalPurchaser) {
  if (!numTotalPurchaser) {
    return '本場次沒有觀眾，取消播放。(◞‸◟)';
  }
  else {
    return `進場人數為 ${numTotalPurchaser} 人，祝觀影愉快。(灬ºωº灬)`;
  }
}