const User = require('../classes/User.js');
const { getDefaultTest } = require('../utils/functions.js');

const defaultTests = getDefaultTest();

const testUser = new User('Artem', 'test', 'test', defaultTests);
const testUser2 = new User('Georg', 'test2', 'test2', defaultTests);

const users = [
  testUser,
  testUser2,
]

module.exports = users;