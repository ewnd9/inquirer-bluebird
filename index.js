var Promise = require('bluebird');

module.exports = function(inquirer) {
  var old = inquirer.prompt;

  inquirer.prompt = function(questions) {
    return new Promise(function(resolve) {
      return old(questions, function(answers) {
        return resolve(answers);
      });
    });
  };

  return inquirer;
};
