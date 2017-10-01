var commonCombinations = {};

var registerCombination = function (opt1, opt2) {
    var opt1Combs = [];
    if (commonCombinations.hasOwnProperty(opt1)) {
        opt1Combs = commonCombinations[opt1];
    }
    opt1Combs.push(opt2);
    commonCombinations[opt1] = opt1Combs;

    var opt2Combs = [];
    if (commonCombinations.hasOwnProperty(opt2)) {
        opt2Combs = commonCombinations[opt2];
    }
    opt2Combs.push(opt1);
    commonCombinations[opt2] = opt2Combs;
};

registerCombination('ea', 'ee');
registerCombination('cie', 'cei');
registerCombination('ie', 'ei');

var convertCommonCombinations = (word) => {
    var words = [];

    Object.getOwnPropertyNames(commonCombinations).forEach(property => {
        if (word.indexOf(property) > -1){
            commonCombinations[property].forEach(replacement => {
                words.push(word.replace(property, replacement));
            })
        }
    });

    return words;
};


exports.convert = convertCommonCombinations;

