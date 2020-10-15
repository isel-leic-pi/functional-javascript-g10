module.exports = function arrayMap(arr, fn) {
    return arr
        .reduce((acc, curr, index) => {
            acc[index] = fn(curr);
            return acc;
        }, []);
};