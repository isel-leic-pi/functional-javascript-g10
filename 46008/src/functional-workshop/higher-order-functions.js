function repeat(operation, num) {
    //Iterative

    /*
    for(let i = 0 ; i < num ; i++) {
        operation();
    }
    */

    //Recursive
    if(num == 0) return;
    else {
        operation();
        return repeat(operation, --num);
    }
    
}

module.exports = repeat;