// 印出下圖，並轉 90°
//   ** ** 
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *

const {
  printTitle,
  printGraghics,
  originGraphy,
  rightAngleTurnGraphy
} = require('./js07module');


function printFormatGraphics(graphyStorage) {
  const title = printTitle(graphyStorage);
  const graphic = printGraghics(graphyStorage);
  console.log(title);
  console.log(graphic);
}

function printAll(originGraphy, rightAngleTurnGraphy) {
  printFormatGraphics(originGraphy);
  printFormatGraphics(rightAngleTurnGraphy);
}

printAll(originGraphy, rightAngleTurnGraphy);

module.exports = printAll;

// for (var i = 9; i < 9; i--) {
//   const space = ' ';
//   const star = '*';
//   let result = '';
//   // for (var n = 0; n < i + 1; n++) {
//   //   console.log('*');
//   // }
// }

// for (var i = 0; i < 5; i++) {
//   for (var n = 0; n < 5; n++) {
//     console.log('*');
//   }
// }

// for (var i = 4; i > -1; i--) {
//   for (var n = 0; n < i + 1; n++) {
//     console.log('*');
//   }
// }
