function logger(namespace) {
    return function () {
        let args = Array.from(arguments);
        args.unshift(namespace);
        console.log.apply(console, args);
    };
}

module.exports = logger;