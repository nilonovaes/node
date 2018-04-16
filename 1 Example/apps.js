global.hoje = new Date();
console.log(global.hoje);

var hello = require('./hello');
var human = require('./human');

hello('hello');
human.hello('human');