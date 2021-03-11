const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr == null || arr == undefined) {
    throw Error;
  };
  let newArr = [];
  for (let key = 0; key < arr.length; key++) {
    if (arr[key] == '--discard-next') {
      key++;
      continue;
    } else if (arr[key] == '--discard-prev') {
      if (arr[key - 2] == '--discard-next') {continue;
      } else newArr.pop();
    } else if ((arr[key] == '--double-next') && (key !== arr.length)) {
      if (key == (arr.length - 1)) {continue;} else newArr.push(arr[key + 1]);
    }  else if ((arr[key] == '--double-next') && (key == arr.length)) {
      continue;
    } else if (arr[key] == '--double-prev') {
      if (key == 0) {continue;
      } else if (arr[key - 2] == '--discard-next') {continue;
      } else newArr.push(arr[key - 1]);
    } else newArr.push(arr[key]);
  };
  return newArr;
};
