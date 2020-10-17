'use strict';

const fileSystem = require('fs');

fileSystem.readFile(process.argv[2], 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data.toString().split('\n').length - 1);
});

