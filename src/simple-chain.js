const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishChain = this.chain.join('~~');
    this.chain = [];
    return finishChain;
  }
};
module.exports = {
  chainMaker
};
