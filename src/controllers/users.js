'use strict';

const messages = {
  'incorrectLoginData': 'Username or password is incorrect.',
  'noAssigmentsWithId': 'User with this ID does not have any assigments.',
}

const userController = require('../services/users.js');

const getAllUsers = (req, res) => {
  try {
    const users = userController.getAllUsers();

    res.statusCode = 200;
    res.send(users);
  } catch (err) {
    res.statusCode = 500;
    res.send('Iternal server Error.');
  }
}

const authUser = (req, res) => {
  try {
    const user = userController.authUser(req.body);

    if (!user) {
      throw new Error();
    }

    res.statusCode = 200;
    res.send(user);
  } catch (err) {
    res.statusCode = 404;
    res.send(messages.incorrectLoginData);
  }
}

const getUserAssigments = (req, res) => {
  const { userId } = req.query;

  try {
    const userAssigments = userController.getUserAssigments(userId);

    if (!userAssigments) {
      throw new Error();
    }

    res.statusCode = 200;
    res.send(userAssigments);
  } catch (error) {
    res.statusCode = 404;
    res.send(messages.noAssigmentsWithId);
  }
}

const checkUserAssigment = (req, res) => {
  const { userId, testId } = req.query;
  const data = req.body;

  try {
    const userAssigments = userController.getUserAssigments(userId);

    if (!userAssigments) {
      throw new Error();
    }

    const assigmentToCheck = userAssigments.find(assigment => {
      return assigment.assignedTest.id === testId;
    });

    const resultScore = userController.checkUserAssigment({
      assigmentToCheck,
      data,
    });

    res.status = 200;
    res.send({ score: resultScore });
  } catch (err) {
    res.statusCode = 422;
    res.send('Data is invalid.');
  }
}

module.exports = {
  authUser,
  getAllUsers,
  getUserAssigments,
  checkUserAssigment,
}