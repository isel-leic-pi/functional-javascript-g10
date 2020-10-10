
function countWords(inputWords) {
    return inputWords.reduce(function(countedWords, currWord) {
        if(!(currWord in countedWords)) {
            //Initialize the property with currWord name
            countedWords[currWord] = 1;
        }
        else {
            //Increment the property value
            countedWords[currWord]++;
        }
        //Return for next iteration
        return countedWords;
    }, {});
}

module.exports = countWords;