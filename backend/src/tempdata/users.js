const User = require('../classes/User.js');

const testUser = new User('Artem', 'test', 'test');
const testUser2 = new User('Georg', 'test2', 'test2');

const users = [
  testUser,
  testUser2,
]

module.exports = users;