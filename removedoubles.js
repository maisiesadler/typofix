var removeDoubles = function (inputWords) {
    if (typeof inputWords === 'string') {
        inputWords = [inputWords];
    }

    var words = [];

    inputWords.forEach(function (word) {
        for (var i = 1; i < word.length; i++) {
            if (word[i] === word[i - 1]) {
                words.push(word.substring(0, i - 1)
                    + word[i]
                    + word.substring(i + 1, word.length));
            }
        }
    }, this);

    return words;
};

exports.removeDoubles = removeDoubles;