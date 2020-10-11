module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, next) {
        acc.push(fn(next));
        return acc;
    }
    , []);
};