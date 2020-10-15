
function curryN(fn, n) {
    let nArguments;
    if(n === undefined) {
        nArguments = fn.length;
    } else {
        nArguments = n;
    }
    return function curriedFun(argument){
        if(nArguments == 1) return fn(argument);
        /*
            Binds the current argument to the next function, so as to precede the remaining arguments
        */
        return curryN(fn.bind(null, argument), nArguments - 1);
    };

}

module.exports = curryN;