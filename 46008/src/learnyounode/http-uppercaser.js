'use strict';

const http = require('http');
const map = require('through2-map');

let port = Number(process.argv[2]);

const server = http.createServer(function(req, res) {
    if(req.method === 'POST') {
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        res.write('Only POST requests accepted\n');
        return res.end();
    }
});

server.listen(port);