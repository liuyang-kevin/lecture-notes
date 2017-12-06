var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.log("Your machine's CPU has "+cpus.length+" Cores");
for (var i = 0; i < cpus.length; i++) {
    fork('./worker.js');
}