var convert = function (converter, inputWords, depth) {
    if (typeof depth !== "number") {
        depth = 1;
    }

    if (typeof inputWords === 'string') {
        inputWords = [inputWords];
    }

    var words = inputWords;
    for (var i = 0; i < depth; i++) {
        words.forEach(function (word) {
            var nwords = converter(word);

            nwords.forEach(word => words.push(word));
        }, this);
    }

    return words;

};


exports.convert = convert;