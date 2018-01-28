/**
 * When a word is added, each letter is added as a key to the proceeding letters object
 * 
 * For example, 'test' would look like this:
 * 
 * validWords = {
 *     t: {
 *         e: {
 *             s: {
 *                 t: { }
 *                }
 *            }
 *     }
 * }
 * 
 * So to see if a word is valid, we just take each letter at a time and follow the object through
 */

var validWords = {};
function getOrAddLetter(o, letter, nextLetter) {
    var a = {};
    if (o.hasOwnProperty(letter)) {
        a = o[letter];
    }

    if (!a.hasOwnProperty(nextLetter))
        a[nextLetter] = {};

    o[letter] = a;

    return o;
};

function addWord(word) {
    if (typeof word !== 'string')
        return;

    var o = validWords;
    var lastLetter = null;
    for (var l of word) {
        if (lastLetter == null) {
            lastLetter = l;
            continue;
        }
        o = getOrAddLetter(o, lastLetter, l)[lastLetter];
        lastLetter = l;
    }
    o = getOrAddLetter(o, lastLetter, '+')[lastLetter];
};

var addWords = function (wordarr) {
    wordarr.forEach(word => addWord(word));
};

var pushNewWords = function (words) {
    if (typeof words === 'string')
        words = [words];

    words.forEach(command => {
        addWords(command.split(' '));
    });
};


var isWord = function (word) {
    var o = validWords;
    for (var letter of word.toLowerCase()) {
        if (o != null) {
            o = o[letter];
        }
    }

    return o != null && o.hasOwnProperty('+');
};

var getValidWordsFromArray = function (potentialWordArray) {
    var words = [];
    potentialWordArray.forEach(comb => {
        if (isWord(comb)) {
            words.push(comb);
        }
    });

    return words
};

var getValidWordObject = function () {
    return JSON.parse(JSON.stringify(validWords));
};



exports.pushNewWords = pushNewWords;
exports.isWord = isWord;
exports.getValidWordsFromArray = getValidWordsFromArray;
exports.getValidWordObject = getValidWordObject;