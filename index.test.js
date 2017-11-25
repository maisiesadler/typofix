var assert = require('assert');
var typofix = require('./index');
var findValid = require('./customwords').findValid;

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

    assertSuggestionsContains('testing', 'tetsing', 'testing');
    assertSuggestionsContains('testing', 'tseting', 'testing');
    assertSuggestionsContains('testing', 'testinf', 'testing');
    assertSuggestionsContains('testing', 'testting', 'testing');
    assertSuggestionsContains('been', 'bean', 'been');
    assertSuggestionsContains('ceiling', 'cieling', 'ceiling');
    assertSuggestionsContains('hello', 'helkp', 'hello');
   // assertSuggestionsContains('hello', 'heko', 'hello');
    assertSuggestionsContains('scissor', 'zxizzor', 'scissor');
    assertSuggestionsContains('hello', 'hefllo', 'hello');


  //  console.log('All index tests passing');
})();