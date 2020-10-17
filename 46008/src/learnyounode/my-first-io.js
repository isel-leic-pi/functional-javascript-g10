const fileSystem = require('fs');

let buf = fileSystem.readFileSync(process.argv[2]);

console.log(buf.toString().split('\n').length - 1);