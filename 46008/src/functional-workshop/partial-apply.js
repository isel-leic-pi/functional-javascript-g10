var slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
        let prefix = [namespace];
        console.log.apply(console, prefix.concat(slice.call(arguments)));
    };
}

module.exports = logger;