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
var removeEachLetter = require('./letterconversion/removeeachletter').letterGetter;
var getCommonSwap = require('./letterconversion/commonletterswap').letterGetter;
var combined = require('./letterconversion/combineConversions').combined;

//ideas 
    // missing letters?
    // break when one is found?
    // spaces? whole sentence check?

var suggest = function (word) {
    if (word == null)
        return [];

    var potentialTypos = [word];

   // var combinedLetterFn = combined(near, addDoubles, getCommonSwap);
    //var allLetterConvs = findValid(word, combinedLetterFn);
    //var remd = findValid(word, l => [""]);
    var all = findValid(word, [near, addDoubles, getCommonSwap, l => [""]]);
    potentialTypos = convert(swapletters, potentialTypos);
    potentialTypos = convert(removeDoubles, potentialTypos);
    potentialTypos = convert(commoncombinations, potentialTypos);
    potentialTypos = potentialTypos.concat(all);

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