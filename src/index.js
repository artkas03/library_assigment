'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express().use(cors());

const users = require('./tempdata/users.js');
// const { checkAnswers } = require('./utils/functions.js');
const { 
  authUser, 
  getAllUsers, 
  getUserAssigments, 
  checkUserAssigment,
} = require('./controllers/users.js');

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   try {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.send(`${JSON.stringify(users)}`);
//   } catch (error) {
//     res.statusCode = 500;
//     res.send('Iternal server Error.');
//   }
// });

app.get('/', getAllUsers);

// app.get('/assigments', (req, res) => {
//   const { userId } = req.query;

//   try {
//     const user = users.find(userItem => userItem.id === userId);

//     if (!user) {
//       throw new Error();
//     }

//     res.statusCode = 200;
//     res.send(user.assigmentStore);
//   } catch (error) {
//     res.statusCode = 404;
//     res.send('There is no users with such ID.');
//   }
// });

app.get('/assigments', getUserAssigments);

// app.post('/assigmentcheck', express.json(), (req, res) => {
//   const { userId, testId } = req.query;
//   const data = req.body;

//   try {
//     const user = users.find(userItem => userItem.id === userId);

//     if (!user) {
//       throw new Error();
//     }

//     const userAssigment = user.assigmentStore.find(assigment => {
//       return assigment.assignedTest.id === testId;
//     });

//     const { quiz } = userAssigment.assignedTest;

//     userAssigment.isCompleted = true;
//     userAssigment.score = checkAnswers(quiz, data);

//     res.status = 200;
//     res.send({ score: userAssigment.score });
//   } catch (err) {
//     res.statusCode = 422;
//     res.send('Data is invalid.');
//   }
// })

// app.post('/authorization', express.json(), (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = users
//       .find(user => {
//         const serializedUser = user;

//         return serializedUser.username === username 
//           && serializedUser.password === password;
//       })
//       ;

//     if (!user) {
//       throw new Error();
//     }

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.send(user);
//   } catch (error) {
//     res.statusCode = 404;
//     res.send('Username or password is incorrect.');
//   }
// });

app.post('/assigmentcheck', express.json(), checkUserAssigment)

app.post('/authorization', express.json(), authUser);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
