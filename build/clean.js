const globby = require('globby');
const rimraf = require('rimraf');
const path = require('path');

const jsF = '!../assets/res/www/js/';

const include = ['../assets/res/www'];
const exclude = [`${jsF}mcore.min.js`,`${jsF}mcore.extends.js`, `${jsF}wnInterface.extends.js`, `${jsF}wnInterface.js`];

globby([ ...include, ...exclude ])
  .then(((paths) => {
    console.log('#REMOVE FILES\n',paths);
    paths.map((item) => {
      rimraf.sync(item);
    });
  }));