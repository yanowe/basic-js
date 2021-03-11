const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = [];
  let DreamTeam;
  if (Array.isArray(members) !== true) return false;
  members.forEach(function(element){
  if (typeof element == 'string') {
    team.push(element.trim()[0].toUpperCase());
  };
  });
  DreamTeam = team.sort().join('')
  return DreamTeam;
};
