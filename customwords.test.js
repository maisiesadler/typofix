const customwords = require('./customwords');
const assert = require('assert');

const pushNewWords = customwords.pushNewWords;
const isWord = customwords.isWord;
const getValidWordsFromArray = customwords.getValidWordsFromArray;
const getValidWordObject = customwords.getValidWordObject;

(function() {
    pushNewWords('testing');
    assert(isWord('testing'));
    assert.equal(getValidWordsFromArray(['testing', 'notaword']), 'testing');
})();