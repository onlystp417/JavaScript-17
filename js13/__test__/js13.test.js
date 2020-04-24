const {
  tortoiseSpeed,
  bunnySpeed,
  speedGap,
  formatTime
} = require('../js/js13module')

describe('龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?', () => {
  it('1000 公尺賽跑，烏龜的賽跑成績', () => {
    expect(tortoiseSpeed(1000)).toBe(3572);
  })
  it('1000 公尺賽跑，兔子的賽跑成績', () => {
    expect(bunnySpeed(1000)).toBe(51);
  })
  it('兔子與烏龜的賽捧成績差距', () => {
    expect(speedGap(3572, 51)).toBe(3521);
  })
  it('時間格式化', () => {
    expect(formatTime(3521)).toEqual([58, 41]);
  })
})