const User = require('../classes/User.js');
const { getDefaultAssigments } = require('../utils/functions.js');

const defaultAssigments = getDefaultAssigments();

const testUser = new User('Artem', 'test', 'test', defaultAssigments);
const testUser2 = new User('Georg', 'test2', 'test2', defaultAssigments);

const users = [
  testUser,
  testUser2,
]

module.exports = users;