const browserslist = require('browserslist');
const rules = require('../index.js');

console.log('Base rules:\n',rules,'\n',);

const browsers = browserslist(rules);

console.log('Browsers covered:\n', browsers.join('\n'));
console.log('\n');
console.log('Browser coverage: ', browserslist.coverage( browsers ));
console.log('\n');
