function repeat(operation, num) {
    // modify this so it can be interrupted
    setTimeout(function() {
        if (num <= 0) return;
        setTimeout(operation);
        return repeat(operation, --num);
    }, 0, operation, num);
}

module.exports = repeat;