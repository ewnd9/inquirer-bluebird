var inquirer = require('./..');

inquirer
  .prompt({
    name: 'q1',
    type: 'list',
    message: 'hi',
    choices: ['test-1', 'test-2']
  })
  .then(function(result) {
    console.log(result); //=> 1 or 2
  });
