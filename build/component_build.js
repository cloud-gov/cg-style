#!/usr/bin/env node

var sass = require('node-sass');
var objectAssign = require('object-assign');

// 1.) Define sassOptions as usual
var sassOptionsDefaults = {
  file: 'src/css/components/all.scss',
  outputStyle: 'nested'
};

var dataString = "$static-img-path: '../../img';"
var dataOption = {
  data: dataString
};
var sassOptions = objectAssign({}, sassOptionsDefaults, dataOption);
console.log('options', sassOptions);

sass.render(sassOptions, function (error, result) {
  if (error) {
    console.log(error.status); // used to be "code" in v2x and below
    console.log(error.column);
    console.log(error.message);
    console.log(error.line);
    return 1;
  }

  console.log('someresult', result.css.toString().length);
  console.log(result.css.toString());
});
