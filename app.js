const rl = require("./readline");

const js01 = require("./js01/js/js01-readline.js");
const js02 = require("./js02/js/js02.js");
const js03 = require("./js03/js/js03.js");
const js04 = require("./js04/js/js04.js");


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
    default:
      console.log("還沒有寫完這題。")
      rl.close();
  }
})
