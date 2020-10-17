'use strict';

// Very ugly first implementation

const http = require('http');

let websites = process.argv.slice(2);

let results = []; 

function compareOrder(a, b) {
    if (a.order < b.order){
        return -1;
    }
    if (a.order > b.order){
        return 1;
    }
    return 0;
}

for(let i = 0 ; i < websites.length; ++i) {
    http.get(websites[i], function(response) {
        response.setEncoding('utf8');
        let result = '';
        response.on('data', function(data) {
            result += data;
        });
        response.on('end', function() {
            results.push({ order : i, content : result });
            results.sort(compareOrder);
            if(results.length === websites.length) {
                results.forEach(elem => console.log(elem.content));
            }
        });
    });
}


