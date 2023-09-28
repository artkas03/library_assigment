'use strict';

const users = require('../tempdata/users.js');
const { checkAnswers } = require('../utils/functions.js');

const getAllUsers = () => {
  return users;
}

const getUserById = (userId) => {
  return users.find(userItem => userItem.id === userId);
}

const authUser = (userdata) => {
  const { username, password } = userdata;

  return users.find(user => user.username === username && user.password === password);
};

const getUserAssigments = (userId) => {
  const user = users.find(userItem => userItem.id === userId);

  if (!user) {
    return null;
  }

  return user.assigmentStore;
}
const checkUserAssigment = (checkData) => {
  const { assigmentToCheck, data } = checkData;

  const { quiz } = assigmentToCheck.assignedTest;

  assigmentToCheck.isCompleted = true;
  assigmentToCheck.score = checkAnswers(quiz, data);

  return assigmentToCheck.score;
}

module.exports = {
  authUser,
  getAllUsers,
  getUserById,
  getUserAssigments,
  checkUserAssigment,
}