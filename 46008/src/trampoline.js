function repeat(operation, num) {
    return function() {
        if (num <= 0) return;
        operation();
        return repeat(operation, --num);
    };
}

function trampoline(fn) {
    let result = fn();
    while(typeof result === 'function') {
        result = result();
    }
    return result;
}

module.exports = function(operation, num) {
    return trampoline(repeat(operation, num));
};