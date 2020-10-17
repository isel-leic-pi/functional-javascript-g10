'use strict';

const fileSystem = require('fs');

let dir = process.argv[2];
let ext = process.argv[3];

fileSystem.readdir(dir, function(err, data) {
    if(err) throw err;
    data
        .filter(file => file.split('.')[1] === ext)
        .forEach(fileName => console.log(fileName));
});