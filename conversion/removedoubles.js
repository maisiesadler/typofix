var removeDoubles = (word) => {
    var words = [];
    for (var i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            words.push(word.substring(0, i - 1)
                + word[i]
                + word.substring(i + 1, word.length));
        }
    }

    return words;
};

exports.convert = removeDoubles;