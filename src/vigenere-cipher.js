const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = (direct == false) ? 'reverse' : 'direct';
    this.table = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
 
  
  encrypt(message, key) {
    let crypt = [];
    message = message.toString().toUpperCase().split('');
    key = key.toString().repeat(20).toUpperCase().split('');
    for (let i = 0; i < message.length; i++) {
      if (this.table.indexOf(message[i]) == "-1") key.splice(i, 0, " ");
    };
    key.length = message.length;
    for (let i = 0; i < message.length; i++) {
      if (this.table.indexOf(message[i]) == "-1") {
        crypt[i] = message[i]
      } else crypt[i] = this.table[this.table.indexOf(message[i]) + this.table.indexOf(key[i])];
    };
    if (this.direct == 'reverse') return crypt.reverse().join('');
    return crypt.join('');
  }

  decrypt(message, key) {
  let uncrypt = [];
  message = message.toString().split('');
  key = key.toString().repeat(20).toUpperCase().split('');
  for (let i = 0; i < message.length; i++) {
    if (this.table.indexOf(message[i]) == "-1") key.splice(i, 0, " ");
  };
  key.length = message.length;
  for (let i = 0; i < message.length; i++) {
    if (this.table.indexOf(message[i]) == "-1") {
      uncrypt[i] = message[i]
    } else uncrypt[i] = this.table[this.table.indexOf(message[i]) + 26 - this.table.indexOf(key[i])];
  };
  if (this.direct == 'reverse') return uncrypt.reverse().join('');
  return uncrypt.join('');
}
}

module.exports = VigenereCipheringMachine;
