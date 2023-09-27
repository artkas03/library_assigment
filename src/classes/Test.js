const { v4: uuid } = require('uuid');

class Test {
  id = uuid();

  constructor(title, isAvailableFromStart = false, description = '', quiz = []) {
    this.title = title;
    this.description = description;
    this.quiz = quiz;
    this.isAvailableFromStart = isAvailableFromStart;
  }
}

module.exports = Test;