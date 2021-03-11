const CustomError = require("../extensions/custom-error");
let maxdepth = 1;
module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    function filtered(e){
      if (typeof e == 'object') return true;
      };
    arr = arr.filter(filtered);
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) maxdepth = this.calculateDepth(arr[i], depth + 1);
    }
      if(maxdepth > depth) {
        maxdepth = maxdepth
       } else maxdepth = depth;
      depth = maxdepth;
      maxdepth = 1;
  return depth;
}
};