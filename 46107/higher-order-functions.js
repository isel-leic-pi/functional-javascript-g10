function repeat(operation, num) {
    if(num > 0) {
        repeat(operation, --num);
        operation();
    }
}

// Do not remove the line below
module.exports = repeat;