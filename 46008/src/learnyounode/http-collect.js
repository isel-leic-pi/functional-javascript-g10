const http = require('http');

let website = process.argv[2];

http.get(website, function(response) {
    response.setEncoding('utf8');
    let result = '';
    response.on('data', function(data) {
        result += data;
    });
    response.on('end', function() {
        console.log(result.length);
        console.log(result);
    });
});