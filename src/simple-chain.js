const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" ||
    position > this.chain.length - 1 ||
    position <= 0) {
    this.chain = [];
    throw new Error('wrong position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
