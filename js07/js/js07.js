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
  printGraghy,
  originGraphy,
  rightAngleTurnGraphy
} = require('./js07module');

printGraghy(originGraphy);
printGraghy(rightAngleTurnGraphy);

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
