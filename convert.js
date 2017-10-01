var convert = function (converter) {

    return function (inputWords) {
        if (typeof inputWords === 'string') {
            inputWords = [inputWords];
        }

        var words = [];

        inputWords.forEach(function (word) {
            var nwords = convert(word);
        }, this);

        return words;
    }
};


exports.convert = convert;