function curryN(fn, n) {
    const args = n || fn.length;
    if (args === 1) {
        return fn;
    }
    return function(x) {
        return curryN(fn.bind(null, x), args - 1);
    };
}

module.exports = curryN;