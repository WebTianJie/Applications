// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  let num1 = event.num1;
  let num2 = event.num2;
  let opt = event.opt;
  let result = 0;
  if (opt == "+") {
    result = parseInt(num1) + parseInt(num2);
  } else if (opt == '-') {
    result = num1 - num2;
  } else if (opt == '*') {
    result = parseInt(num1) * parseInt(num2);
  } else if (opt == '/') {
    result = num1 / num2;
  }
  return result;
}