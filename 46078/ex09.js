var slice = Array.prototype.slice;

function logger(namespace) {
    return function log() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
    };
}

module.exports = logger;