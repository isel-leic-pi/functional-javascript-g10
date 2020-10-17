'use strict';

const http = require('http');

let port = Number(process.argv[2]);

function parseTime(time) {
    return JSON.stringify({
        hour : time.getHours(),
        minute : time.getMinutes(),
        second : time.getSeconds()
    });
}

function unixTime(time) {
    return JSON.stringify({unixtime : time.getTime()});
}

const server = http.createServer(function(req, res) {
    if(req.method === 'GET') {
        let result;
        
        const url = new URL(req.url, 'http://localhost');
        const queryString = url.searchParams.get('iso');
        const time = new Date(queryString);
        if(url.pathname === '/api/parsetime') result = parseTime(time);
        else if(url.pathname === '/api/unixtime') result = unixTime(time); 

        if(result) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(result);
        }
        else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.end('GET requests ONLY\n');
    }

});

server.listen(port);