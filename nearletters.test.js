const assert = require('assert');
const nearletters = require('./nearletters');

(function() {
    const nearToA = nearletters.getNearTo('a');
    assert(nearToA.hasOwnProperty('q'));
    assert(nearToA.hasOwnProperty('w'));
    assert(nearToA.hasOwnProperty('s'));
    assert(nearToA.hasOwnProperty('z'));
})();