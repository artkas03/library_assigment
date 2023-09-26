const { v4: uuid } = require('uuid');
const AssigmentStore = require('./AssigmentStore');

class User {
  id = uuid();
  // #name = 'sdfasdf';
  // #username;
  // #password;
  // #assigmentStore;

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

  // get id() {
  //   return this.#id;
  // }

  // get name() {
  //   return this.#name;
  // }

  // set name(newName) {
  //   this.#name = newName;
  // }

  // get username() {
  //   return this.#username;
  // }

  // set username(newUsername) {
  //   this.#username = newUsername;
  // }

  // get password() {
  //   return this.#password;
  // }

  // set password(newPassword) {
  //   this.#password = newPassword;
  // }

  // get assigmentStore() {
  //   return this.#assigmentStore;
  // }

  // serialize() {
  //   return {
  //     id: this.#id,
  //     username: this.#username,
  //     password: this.#password,
  //     assigmentStore: this.#assigmentStore.serialize(),
  //     name: this.#name,
  //   }
  // }
}

module.exports = User;