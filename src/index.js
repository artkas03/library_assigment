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

app.get('/', getAllUsers);

app.get('/assigments', getUserAssigments);

app.post('/assigmentcheck', express.json(), checkUserAssigment)

app.post('/authorization', express.json(), authUser);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
