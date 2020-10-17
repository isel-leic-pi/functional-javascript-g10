'use strict';

// Better looking implementation after seeing solution

const http = require('http');

let websites = process.argv.slice(2);

let results = []; 

let count = 0;

for(let i = 0 ; i < websites.length; ++i) {
    http.get(websites[i], function(response) {
        response.setEncoding('utf8');
        let result = '';
        response.on('data', function(data) {
            result += data;
        });
        response.on('end', function() {
            results[i] = result;
            ++count;
            if(count === websites.length) {
                results.forEach(elem => console.log(elem));
            }
        });
    });
}
