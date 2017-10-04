var relationshipStore = require('./../letterrelationshipstore').relationshipStore;

var rs = new relationshipStore();

rs.register('s', 'z');
rs.register('i', 'e');
rs.register('u', 'e');
rs.register('i', 'u');
rs.register('n', 'm');

var letterGetter = function(letter){
    return Object.getOwnPropertyNames(rs.getRelated(letter));
};

exports.letterGetter = letterGetter;
