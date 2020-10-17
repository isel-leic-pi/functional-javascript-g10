'use strict';

const http = require('http');
const fs = require('fs');

let port = Number(process.argv[2]);
let path = process.argv[3];

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });

    fs.createReadStream(path).pipe(res);
});

server.listen(port);