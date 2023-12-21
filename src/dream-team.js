const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let clearMembersName = []
let teamName = '';
let clearName = '';
members.forEach((name) => {
  if(typeof name === 'string'){
   clearName = name.trim()
   clearMembersName.push(clearName)}
})

let membersSort = clearMembersName.sort();

membersSort.forEach((name) => {
   
if (typeof name === 'string'){
   clearName = name.trim();
   teamName = `${teamName}${clearName[0].toUpperCase()}`;
} else {
   teamName = `${teamName}`
}
})
return teamName;
}

module.exports = {
  createDreamTeam
};
