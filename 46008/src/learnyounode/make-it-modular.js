'use strict';

const myModule = require('./mymodule');

let dir = process.argv[2];
let ext = process.argv[3];

myModule(dir, ext, function(err, data) {
    if(err) throw err;
    data.forEach(fileName => console.log(fileName));
});