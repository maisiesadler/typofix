var customwords = require('./customwords');
var getNearCombinations = require('./conversion/near').convert;
var swapletters = require('./conversion/swapletter').convert;
var addDoubles = require('./conversion/adddoubles').convert;
var removeDoubles = require('./conversion/removedoubles').convert;
var commoncombinations = require('./conversion/commoncombinations').convert;
var convert = require('./conversion/convert').convert;

var suggest = function (word) {
    if (word == null)
        return [];

    var potentialTypos = [word];

    potentialTypos = convert(getNearCombinations, potentialTypos);
    potentialTypos = convert(swapletters, potentialTypos);
    potentialTypos = convert(removeDoubles, potentialTypos);
    potentialTypos = convert(addDoubles, potentialTypos);
    potentialTypos = convert(commoncombinations, potentialTypos);
    
    var words = customwords.getValidWords(potentialTypos);
    return words;
};

// var logNearWords = function (word) {
//     suggest(word).forEach(console.log);
// }

var loadEnglishWords = function () {
    require('./englishwords.js');
};

exports.suggest = suggest;
exports.pushNewWords = customwords.pushNewWords;
exports.loadEnglishWords = loadEnglishWords;