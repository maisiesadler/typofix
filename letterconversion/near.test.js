const near = require('./near');
const letterGetter = near.letterGetter;

var assert = require('assert');

(function() {
    const assertArrayContains = (array, obj) => {
        assert(array.indexOf(obj) > -1);
    };

    const nearToF = letterGetter('f');
    assertArrayContains(nearToF, 'g');
    assertArrayContains(nearToF, 'r');
    assertArrayContains(nearToF, 't');
    assertArrayContains(nearToF, 'v');
})();