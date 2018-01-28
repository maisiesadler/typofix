const letterrelationshipstore = require('./letterrelationshipstore');
const assert = require('assert');

const relationshipStore = letterrelationshipstore.relationshipStore;

(function () {
    var rs = new relationshipStore();
    rs.registerString('qwertyuiop');
    assert(rs.areRelated('q', 'w'));
    assert(!rs.areRelated('q', 'g'));
    assert(!rs.areRelated('q', 'u'));

    var rs2 = new relationshipStore();
    rs2.register('a', 'b');
    rs2.register('a', 'c');
    assert(rs2.areRelated('a', 'b'));
    assert(rs2.areRelated('a', 'c'));
    assert(!rs2.areRelated('b', 'c'));
})();