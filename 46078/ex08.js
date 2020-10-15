function duckCount() {
    return Array.from(arguments)
        .filter(arg => 'quack' in arg)
        .length;
}

module.exports = duckCount;