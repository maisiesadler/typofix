var customwords = require('./customwords');

//whole word conversion
var swapletters = require('./conversion/swapletter').convert;
var removeDoubles = require('./conversion/removedoubles').convert;
var commoncombinations = require('./conversion/commoncombinations').convert;
var convert = require('./conversion/convert').convert;

//letter conversion
var findValid = require('./letterconversion/applyLetterConversion').findValid;
var near = require('./letterconversion/near').letterGetter;
var addDoubles = require('./letterconversion/adddoubles').letterGetter;
var getCommonSwap = require('./letterconversion/commonletterswap').letterGetter;
var combined = require('./letterconversion/combineConversions').combined;

var suggest = function (word) {
    if (word == null)
        return [];

    var potentialTypos = [word];

    var combinedLetterFn = combined(near, addDoubles, getCommonSwap);
    var allLetterConvs = findValid(word, combinedLetterFn);
    potentialTypos = convert(swapletters, potentialTypos);
    potentialTypos = convert(removeDoubles, potentialTypos);
    potentialTypos = convert(commoncombinations, potentialTypos);
    potentialTypos = potentialTypos.concat(allLetterConvs);

    var words = customwords.getValidWordsFromArray(potentialTypos);
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