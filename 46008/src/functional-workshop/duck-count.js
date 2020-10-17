function duckCount() {
    return Array.from(arguments).filter(item => Object.prototype.hasOwnProperty.call(item, 'quack')).length;
}

module.exports = duckCount;