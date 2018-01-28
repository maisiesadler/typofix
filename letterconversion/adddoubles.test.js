const adddoubles = require('./adddoubles');
const letterGetter = adddoubles.letterGetter;

var assert = require('assert');

(function() {
    assert.equal(letterGetter('l'), 'll');
})();