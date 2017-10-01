var customwords = require('./customwords');
var getNearCombinations = require('./near').getNearCombinations;
var swapletters = require('./swapletter').swap;
var removeDoubles = require('./removedoubles').removeDoubles;

var waitUntilLoaded = function (onLoadedFn) {
    if (!wordsLoaded()) {
        //console.log('not yet loaded');
        setTimeout(waitUntilLoaded.bind(this, onLoadedFn), 50);
    } else {
        onLoadedFn();
    }
};

var suggest = function (word) {
    if (word == null)
        return [];

    var nearComb = getNearCombinations(word);
    var withSwapped = swapletters(word);
    var withDoublesRemoved = removeDoubles(word);

    var potentialTypos = nearComb.concat(withSwapped).concat(withDoublesRemoved);
    var words = customwords.getValidWords(potentialTypos);
    return words;
};

var logNearWords = function (word) {
    suggest(word).forEach(console.log);
}

var loadEnglishWords = function(){
    require('./englishwords.js');
};

exports.suggest = suggest;
exports.pushNewWords = customwords.pushNewWords;
exports.loadEnglishWords = loadEnglishWords;