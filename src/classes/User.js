const { v4: uuid } = require('uuid');
const AssigmentStore = require('./AssigmentStore');

class User {
  id = uuid();

  constructor(
    name, 
    username, 
    password, 
    assigmentStore = new AssigmentStore(),
  ) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.assigmentStore = assigmentStore;
  }
}

module.exports = User;