var customwords = require('./customwords');
var getNearCombinations = require('./conversion/near').getNearCombinations;
var swapletters = require('./conversion/swapletter').swap;
var removeDoubles = require('./conversion/removedoubles').removeDoubles;

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

// var logNearWords = function (word) {
//     suggest(word).forEach(console.log);
// }

var loadEnglishWords = function(){
    require('./englishwords.js');
};

exports.suggest = suggest;
exports.pushNewWords = customwords.pushNewWords;
exports.loadEnglishWords = loadEnglishWords;