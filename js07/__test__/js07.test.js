const {
  printTitle,
  printGraghics,
} = require('../js/js07module');

describe('印出指定圖形，並轉 90˚ 印出。', () => {
  describe('印出標題', () => {

  })
  describe('印出圖形', () => {
    it('印出原始圖形', () => {
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
      expect(printGraghics(originGraphy)).toMatch('  ** **  \n ******* \n*********\n*********\n ******* \n  *****  \n   ***   \n    *    \n');
    })
    it('印出原圖轉 90˚ 的圖形', () => {
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
      expect(printGraghics(rightAngleTurnGraphy)).toMatch('            *  *      \n         *  *  *  *   \n      *  *  *  *  *  *\n   *  *  *  *  *  *  *\n*  *  *  *  *  *  *   \n   *  *  *  *  *  *  *\n      *  *  *  *  *  *\n         *  *  *  *   \n            *  *      \n')
    })
  })
})