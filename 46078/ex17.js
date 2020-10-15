function curryN(fn, n) {
    // Get number of function arguments in case n is not supplied
    n = n || fn.length;
    if (n == 1)
        return fn;

    return function(arg) {
        return curryN(fn.bind(null, arg), n - 1);
    };
}

module.exports = curryN;