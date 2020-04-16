const originGraphy = [
  '  ** **  ',
  ' ******* ',
  '*********',
  '*********',
  ' ******* ',
  '  *****  ',
  '   ***   ',
  '    *    '
];

const rightAngleTurnGraphy = [
  '            *  *      ',
  '         *  *  *  *   ',
  '      *  *  *  *  *  *',
  '   *  *  *  *  *  *  *',
  '*  *  *  *  *  *  *   ',
  '   *  *  *  *  *  *  *',
  '      *  *  *  *  *  *',
  '         *  *  *  *   ',
  '            *  *      '
]

function printGraghy(graphyStorage) {
  if (graphyStorage === originGraphy) {
    console.log('原始圖形：\n');
  } else {
    console.log('轉 90˚ 圖形：\n');
  }
  graphyStorage.forEach((line) => {
    console.log(line);
  })
}

module.exports = {
  printGraghy,
  originGraphy,
  rightAngleTurnGraphy
}