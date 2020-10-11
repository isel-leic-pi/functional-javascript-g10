/*
 Can't alter the reduce function signature, which would be useful in this case to pass the index, 
 but anyway, we'll save the index outside of the function. I don't like this...

 EDIT: Solution suggested creating another function inside the reduce function. For the sake of preservation,
 I'll keep this solution.
*/
var index = ' ';

function reduce(arr, fn, initial) {
    if (index === ' ') index = arr.length;
    
    --index;
    if (index <= 0) { return fn(initial, arr[index], index++, arr); }
    initial = reduce(arr, fn, initial);
    
    return fn(initial, arr[index], index++, arr);
}

module.exports = reduce;