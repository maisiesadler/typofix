var getNearTo = require("./../nearletters").getNearTo;

var letterGetter = function(letter){
    return Object.getOwnPropertyNames(getNearTo(letter));
};

exports.letterGetter = letterGetter;