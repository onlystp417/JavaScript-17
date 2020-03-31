module.exports = {
  confirmInput,
  compareTwoNumDivideThree
}

// 檔掉無效的值
function confirmInput(strAnswer1, strAnswer2) {
  let firstIntager = +strAnswer1;
  let secondIntager = +strAnswer2;
  if (Number.isNaN(firstIntager) || Number.isNaN(secondIntager)) {
    throw new Error('你所輸入的值含有非數字，請重新輸入：');
  } else if (strAnswer1 === "" || strAnswer2 === "") {
    throw new Error('你漏輸入值了，請重新輸入：');
  } else if (firstIntager % 1 !== 0 || secondIntager % 1 !== 0) {
    throw new Error('你輸入的值含有浮點數，請重新輸入：');
  }
}

// 分辨兩個整數除以三，於數是否相同
function compareTwoNumDivideThree(strAanswer1, strAnswer2) {
  let firstIntager = +strAanswer1;
  let secondIntager = +strAnswer2;
  if (firstIntager % 3 === secondIntager % 3) {
    return '餘數相同。';
  } else {
    return '餘數不相同。';
  }
}
