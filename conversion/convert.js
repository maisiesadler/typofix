var convert = function (converter, inputWords) {
    if (typeof inputWords === 'string') {
        inputWords = [inputWords];
    }

    var words = inputWords;

    inputWords.forEach(function (word) {
        var nwords = converter(word);
        
        nwords.forEach(word => words.push(word));
    }, this);

    return words;

};


exports.convert = convert;