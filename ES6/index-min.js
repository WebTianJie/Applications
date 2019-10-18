"use strict";

/**

 * author 张高瑞 创建

 * date 2019-09-25 15:45

 */
function average() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  arg.sort(function (a, b) {
    return a - b;
  });
  arg.shift();
  arg.pop();
  return sum.apply(void 0, arg);
}

function sum() {
  var sum = 0;

  for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arg[_key2] = arguments[_key2];
  }

  arg.forEach(function (item, index, self) {
    sum += item;
  });
  return sum;
}

console.log(average(89, 78, 44, 22, 55, 45, 66));
var arr1 = [1, 2, 3, 4];
var arr2 = [6, 7, 8];
var newArr = [].concat(arr1, arr2);
console.log(newArr);
