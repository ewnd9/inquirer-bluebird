var Promise = require('bluebird');
var inquirer = require('inquirer');

var old = inquirer.prompt;

inquirer.prompt = function(questions) {
  return new Promise(function(resolve) {
    return old(questions, function(answers) {
      return resolve(answers);
    });
  });
};

module.exports = inquirer;
