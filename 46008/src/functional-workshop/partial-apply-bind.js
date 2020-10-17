function logger(namespace){
    return function() {
        console.log(Array.from(arguments).reduce((prev, curr) => prev + ' ' + curr));
    }.bind(null, namespace);
}

module.exports = logger;