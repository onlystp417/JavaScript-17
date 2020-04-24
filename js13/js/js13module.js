// 烏龜的完成秒數
function tortoiseSpeed(totalInstance) {
  const perSecondForward = 0.28;
  let seconds = 0;
  while (totalInstance > 0) {
    totalInstance -= perSecondForward;
    seconds++;
  }
  // console.log(seconds);
  return seconds;
}

// 兔子的完成秒數
function bunnySpeed(totalInstance) {
  const perSecondForward = 20;
  let seconds = 0;
  while (totalInstance > 0) {
    totalInstance -= perSecondForward;
    seconds++;
    if (!(seconds % 5)) {
      totalInstance += 1;
    }
  }
  return seconds;
}

// 烏龜與兔子的秒數差距
function speedGap(tortoiseSeconds, bunnySeconds) {
  const totalInstance = 1000;
  tortoiseSeconds = tortoiseSpeed(totalInstance);
  bunnySeconds = bunnySpeed(totalInstance);
  // console.log(tortoiseSeconds - bunnySeconds);
  return tortoiseSeconds - bunnySeconds;
}

// 時間格式化
function formatTime() {
  const speedGapValue = speedGap();
  const formatMinutes = Number.parseInt((speedGapValue / 60));
  const formatSeconds = speedGapValue % 60;
  return [formatMinutes, formatSeconds];
}

module.exports = {
  tortoiseSpeed,
  bunnySpeed,
  speedGap,
  formatTime
}