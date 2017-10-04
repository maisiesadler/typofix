var getNearTo = require("./../nearletters").getNearTo;

var replaceAt = function (s, index, char) {
    if (index > s.length || s < 0)
        return null;

    return s.substring(0, index) + char + s.substring(index + 1, s.length);
};

var swapAllNearAtIndex = function (wordArray, index) {
    var me = this;
    wordArray.forEach(function (word) {
        var letterToReplace = word[index];
        for (var property in getNearTo(letterToReplace)) {
            if (getNearTo(letterToReplace).hasOwnProperty(property))
                wordArray.push(replaceAt(word, index, property));
        }
    });

    return wordArray;
}
var getNearCombinations = (word) => {
    var words = [];
    for (var i = 0; i < word.length; i++) {
        var wa = swapAllNearAtIndex([word], i);
        wa.forEach(w => words.push(w));
    }

    return words;
};


exports.convert = getNearCombinations;