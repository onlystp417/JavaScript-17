const rl = require("./readline");

const js01 = require("./js01/js/js01-readline.js");
const js02 = require("./js02/js/js02.js");
const js03 = require("./js03/js/js03.js");
const js04 = require("./js04/js/js04.js");
const js05 = require("./js05/js/js05.js");
const js06 = require("./js06/js/js06.js");
const js07 = require("./js07/js/js07.js");
const { originGraphy, rightAngleTurnGraphy } = require("./js07/js/js07module");
const js08 = require("./js08/js/js08.js");
const { sumOfTwoArray } = require("./js09/js/js09");
const { arr1, arr2, } = require("./js09/js/js09");
const js13 = require("./js13/js/js13");



rl.question('要執行第幾題？', jsIndex => {
  switch (jsIndex) {
    case "1":
      js01();
      break;
    case "2":
      js02();
      break;
    case "3":
      js03();
      break;
    case "4":
      js04();
      break;
    case "5":
      js05();
      break;
    case "6":
      js06();
      break;
    case "7":
      js07(originGraphy, rightAngleTurnGraphy);
      break;
    case "8":
      js08();
      break;
    case "9":
      sumOfTwoArray(arr1, arr2);
      break;
    case "13":
      js13();
      break;
    default:
      console.log("還沒有寫完這題。")
      rl.close();
  }
})
