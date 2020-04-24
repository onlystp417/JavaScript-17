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

// const a = print(originGraphy);
// const b = printRightTurn(originGraphy);

// console.log(a);
// console.log(b);

// function print(graphyStorage) {
//   let result = '';
//   for (let x = 0; x < graphyStorage.length; x++) {
//     result += `${graphyStorage[x]}\n`;
//   }
//   return result;
// }

// function printRightTurn(graphyStorage) {
//   let result = [[]];
//   for (let x = 0; x < graphyStorage.length; x++) {
//     for (let y = 0; y < graphyStorage.length; y++)
//       result[y][x] = graphyStorage[x][y];
//   }
//   return result;
// }

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