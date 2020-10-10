function countWords(inputWords) {
    return inputWords.reduce(function (acc, val) { 
        acc[val] = ++acc[val] || 1;
        return acc;
    }, {});
}

module.exports = countWords;