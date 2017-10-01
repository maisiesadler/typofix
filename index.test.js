var assert = require('assert');
var typofix = require('./index');

(function () {
    var pushNewWords = typofix.pushNewWords;
    var suggest = typofix.suggest;
    var loadEnglishWords = typofix.loadEnglishWords;

    pushNewWords(["truck testing ruck"]);

    pushNewWords('add all words in this sentence');
    pushNewWords(['register', 'everything', 'in this', 'array']);

   // loadEnglishWords();

    var assertSuggestionsContains = function (registerWords, incorrectSpelling, expectedSuggestion) {
        pushNewWords(registerWords);
        assert.notEqual(suggest(incorrectSpelling).indexOf(expectedSuggestion), -1, incorrectSpelling + " is not corrected to " + expectedSuggestion);
    };

    assertSuggestionsContains('testing', 'tseting', 'testing');
    assertSuggestionsContains('testing', 'testinf', 'testing');
    assertSuggestionsContains('testing', 'testting', 'testing');
    assertSuggestionsContains('been', 'bean', 'been');
    //assertSuggestionsContains('hello', 'helkp', 'hello');
    

    console.log('All tests passing');
})();