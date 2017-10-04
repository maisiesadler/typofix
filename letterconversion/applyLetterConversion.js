var assert = require('assert');
var validWords = require('./../customwords').getValidWordObject;
var isWord = require('./../customwords').isWord;
var pushNewWords = require('./../customwords').pushNewWords;

var isStillOnTrack = function (option) {
    var o = validWords();
    for (var letter of option.toLowerCase()) {
        if (o == null) {
            return false;
        }

        o = o[letter];
    }

    return o != null;
};

var findValid = function (word, letterGetter) {
    var paths = [""];
    for (var letter of word.toLowerCase()) {
        var newPaths = [];
        var letters = letterGetter(letter);
        if (letters.indexOf(letter) === -1)
            letters.push(letter);

        paths.forEach(path => {
            letters.forEach(l => {
                var newWord = path + l;
                if (isStillOnTrack(newWord)) {
                    newPaths.push(newWord);
                }
            });
        });

        paths = newPaths;
    }
    var validWords = [];
    paths.forEach(function(path) {
        if (isWord(path))
            validWords.push(path);
    }, this);

    return validWords;
};

exports.findValid = findValid;


(function () {
    var assertTrue = function (val) {
        assert.equal(val, true);
    }
    var assertFalse = function (val) {
        assert.equal(val, false);
    }
    var assertContains = function (array, val) {
        assertTrue(array.indexOf(val) > -1);
    }
    pushNewWords("testing");
    assertTrue(isStillOnTrack('test'));
    assertFalse(isStillOnTrack('tesr'));

    assertContains(findValid('tdsting', function(l){return ['e']}), "testing");

    console.log('All applyLetterConversion tests passing');
})()