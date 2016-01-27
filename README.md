# inquirer-bluebird

Bluebird wrapper for inquirer

## Overview

There is [bluebird-inquirer](https://www.npmjs.com/package/bluebird-inquirer),
but it promisify only prompt function, so I can't use `new inquirer.Separator()`.

## Install

```
$ npm install inquirer-bluebird --save
```

## Usage

### Before

```js
var inquirer = require('inquirer');
new Promise(resolve => {
  inquirer.prompt(questions, function(answers) {
    resolve(answers);
  });  
});
```

### Now

```js
var inquirer = require('inquirer-bluebird');
inquirer(questions)
  .then(function(answers) {

  });
```
