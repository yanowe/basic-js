const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.addition !== undefined) options.addition = `${options.addition}`;
  if (str !== undefined) str = `${str}`;
  options.separator ? options.separator : options.separator = '+';
  options.additionSeparator ? options.additionSeparator : options.additionSeparator = '|';
  options.repeatTimes ? options.repeatTimes : options.repeatTimes = 1;
  options.additionRepeatTimes ? options.additionRepeatTimes : options.additionRepeatTimes = 1;
  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(str);
    if (options.addition) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        arr.push(options.addition);
        if (j != options.additionRepeatTimes -1) arr.push(options.additionSeparator);
      };
    };
    if (i != options.repeatTimes -1) arr.push(options.separator);
    
  }
  str = arr.join('');
  return str;
};
  