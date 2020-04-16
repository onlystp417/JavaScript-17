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

function printGraghics(graphyStorage) {
  const result = graphyStorage.reduce((graphic, currentLine) => {
    graphic += `${currentLine}\n`;
    return graphic;
  }, '');
  return result;
}

function printTitle(graphyStorage) {
  if (graphyStorage === originGraphy) {
    return '原始圖形：\n';
  } else {
    return '轉 90˚ 圖形：\n';
  }
}

module.exports = {
  printTitle,
  printGraghics,
  originGraphy,
  rightAngleTurnGraphy
}