const path = require('path');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '10000ms'
});

console.log('somking started...', path.join(__dirname, 'html-test.js'));
mocha.addFile(path.join(__dirname, 'html-test.js'));

mocha.run();