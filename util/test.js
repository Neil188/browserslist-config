const assert = require('assert');
const browserslist = require('browserslist');
const rules = require('../index.js');

const MIN_RULES = 1;
const MIN_BROWSERS = 1;
const MIN_COVERAGE = 70;

console.log('Base rules:\n',rules,'\n',);
assert(rules.length >= MIN_RULES,
    `Min. allowed rules ${MIN_RULES}, but ${rules.length} loaded.`);

const browsers = browserslist(rules);
const coverage = browserslist.coverage( browsers );
assert(browsers.length >= MIN_BROWSERS,
    `Min. supported browsers ${MIN_BROWSERS}, but ${browsers.length} covered.`);
assert(coverage >= MIN_COVERAGE,
    `Coverage should be at least ${MIN_COVERAGE}%, but calculated coverage is ${coverage}%`);

console.log('Browsers covered:\n', browsers.join('\n'));
console.log('\n');
console.log('Browser coverage: ', coverage);
console.log('\n');
