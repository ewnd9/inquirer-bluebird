var inquirer = require('inquirer');

new Promise(resolve => {
  inquirer.prompt({
    name: 'q1',
    type: 'list',
    message: 'hi',
    choices: ['test-1', 'test-2']
  }, function(answers) {
    resolve(answers);
  });
})
.then(answers => {
  console.log(answers);
})
