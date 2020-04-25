// 引入 node.js 的 readline module
const readline = require('readline');
// 透過 createInterface [class] 製造 readline 的問答介面
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = rl;