var swapLetterCombinations = (word) => {
    var words = [];
    for (var i = 1; i < word.length; i++) {
        words.push(word.substring(0, i - 1)
            + word[i] + word[i - 1]
            + word.substring(i + 1, word.length));
    }

    return words;
};


exports.convert = swapLetterCombinations;