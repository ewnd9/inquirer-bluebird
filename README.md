# inquirer-bluebird

> Bluebird wrapper for [inquirer.js](https://www.npmjs.com/package/inquirer)

There is [bluebird-inquirer](https://www.npmjs.com/package/bluebird-inquirer),
but it promisify only prompt function, so I can't use `new inquirer.Separator()`.

## Install

```
$ npm install inquirer-bluebird --save
```

## Usage

### Before

```js
const inquirer = require('inquirer');

new Promise(resolve => {
  inquirer.prompt(questions, function(answers) {
    resolve(answers);
  });  
});
```

### Now

```js
const inquirer = require('inquirer-bluebird');

inquirer.prompt(questions)
  .then(function(answers) {

  });
```

## Related

- [inquirer-question](https://github.com/ewnd9/inquirer-question)
- [inquirer-credentials](https://github.com/ewnd9/inquirer-credentials)
- [inquirer-menu](https://github.com/ewnd9/inquirer-menu)

## License

MIT © [ewnd9](http://ewnd9.com)
