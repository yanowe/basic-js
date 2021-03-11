const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null || date == false || date == undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  };
  let arrDate = date.toString().split(' ');
  if (arrDate[1] == 'Dec' || arrDate[1] == 'Jan' || arrDate[1] == 'Feb') {
    return 'winter'} else if (arrDate[1] == 'Mar' || arrDate[1] == 'Apr' || arrDate[1] == 'May'){
    return 'spring'} else if (arrDate[1] == 'Jun' || arrDate[1] == 'Jul' || arrDate[1] == 'Aug'){
    return 'summer'} else if (arrDate[1] == 'Sep' || arrDate[1] == 'Oct' || arrDate[1] == 'Nov'){
    return 'autumn'
  };
};
