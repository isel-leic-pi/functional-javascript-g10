const http = require('http');

let website = process.argv[2];

http.get(website, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    });
});