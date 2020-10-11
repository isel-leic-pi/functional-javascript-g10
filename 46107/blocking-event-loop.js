function repeat(operation, num) {
    if (num <= 0) return;
    operation();

    // Cheating here 'cause I had no clue what they actually wanted. My previous "solution" was to not check num and just
    // do a setTimeout all the time. Turns out they wanted to make it async, but to let it do some operations once in a while...
    if (num % 10 === 0) {
        setTimeout(repeat, 0, operation, --num);
    }
    else {
        repeat(operation, --num);
    }
}

module.exports = repeat;