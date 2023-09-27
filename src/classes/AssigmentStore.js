const tests = require("../tempdata/tests");
const Assigment = require("./Assigment");

class AssigmentStore {
  constructor(assigments = []) {
    this.assigments = assigments;
  }

  makeAssigment(newTest) {
    this.assigments.push(new Assigment(newTest));
  }

  addAssigment(newAssigment) {
    this.assigments.push(newAssigment);
  }
}

module.exports = AssigmentStore;