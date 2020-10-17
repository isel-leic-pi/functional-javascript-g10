'use strict';

const net = require('net');

let port = process.argv[2];

function padding(amount, number) {
    return ('0'.repeat(amount) + number).slice(-amount);
}

const server = net.createServer(function(socket) {
    const date = new Date();

    let year = padding(4, date.getFullYear());
    // month starts at zero
    let month = padding(2, date.getMonth() + 1);
    let day = padding(2, date.getDate());
    let hour = padding(2, date.getHours());
    let min = padding(2, date.getMinutes());

    socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n');
});

server.listen(port);


