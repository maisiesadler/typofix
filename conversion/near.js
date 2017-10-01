var near = {

};

var validateChars = function (l1, l2) {
    if (typeof (l1) !== 'string' || l1.length !== 1)
        throw new Error('l1 must be a string of length 1');
    if (typeof (l2) !== 'string' || l2.length !== 1)
        throw new Error('l2 must be a string of length 1');
}

var registerRelationship = function (l1, l2) {
    validateChars(l1, l2);
    var near1 = {};
    if (near.hasOwnProperty(l1))
        near1 = near[l1];

    near1[l2] = true;
    near[l1] = near1;

    var near2 = {};
    if (near.hasOwnProperty(l2))
        near2 = near[l2];

    near2[l1] = true;
    near[l2] = near2;
};

var registerString = function (nearLetters) {
    for (var i = 1; i < nearLetters.length; i++) {
        registerRelationship(nearLetters[i - 1], nearLetters[i]);
    }
};

registerString('qwertyuiop');
registerString('asdfghjkl');
registerString('zxcvbnm');
registerString('qazxswedcvfrtgbnhyujmkilop');
registerString('plokmnjiuhbvgytfcxdreszawq');

var isNear = function (l1, l2) {
    validateChars(l1, l2);

    var nearl1 = near[l1];
    if (nearl1 == null)
        return false;
    return nearl1[l2] === true;
};


var replaceAt = function (s, index, char) {
    if (index > s.length || s < 0)
        return null;

    return s.substring(0, index) + char + s.substring(index + 1, s.length);
};

var swapAllNearAtIndex = function (wordArray, index) {
    var me = this;
    wordArray.forEach(function (word) {
        var letterToReplace = word[index];
        for (var property in near[letterToReplace]) {
            if (near[letterToReplace].hasOwnProperty(property))
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