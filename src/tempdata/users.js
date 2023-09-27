const User = require('../classes/User.js');
const { getDefaultAssigments } = require('../utils/functions.js');

const testUser = new User('Artem', 'test', 'test', getDefaultAssigments());
const testUser2 = new User('Georg', 'test2', 'test2', getDefaultAssigments());

const users = [
  testUser,
  testUser2,
]

module.exports = users;