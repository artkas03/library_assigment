const tests = require("../tempdata/tests");
const Assigment = require("./Assigment");

class AssigmentStore {
  // #assigments = tests
  //   .filter(test => test.isAvailableFromStart)
  //   .map(test => new Assigment(test));

  assigments = tests
    .filter(test => test.isAvailableFromStart)
    .map(test => new Assigment(test));

  // get assigments() {
  //   return this.#assigments;
  // }

  makeAssigment(newTest) {
    this.assigments.push(new Assigment(newTest));
  }

  addAssigment(newAssigment) {
    this.assigments.push(newAssigment);
  }

  // serialize() {
  //   return {
  //     assigments: this.#assigments.map(assigment => assigment.serialize()),
  //   }
  // }
}

module.exports = AssigmentStore;