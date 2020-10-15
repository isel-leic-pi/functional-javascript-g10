let slice = (arr, l, r) => Function.prototype.call.call(Array.prototype.slice, arr, l, r);
// Function.prototype.call.bind(Array.prototype.slice) also gives us the slice function, thus it can be used.
module.exports = slice;