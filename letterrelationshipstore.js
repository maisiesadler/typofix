var relationshipStore = function () {
    var store = {};

    var validateChars = function (l1, l2) {
        if (typeof (l1) !== 'string' || l1.length !== 1)
            throw new Error('l1 must be a string of length 1');
        if (typeof (l2) !== 'string' || l2.length !== 1)
            throw new Error('l2 must be a string of length 1');
    }

    var registerRelationship = function (l1, l2) {
        validateChars(l1, l2);
        var near1 = {};
        if (store.hasOwnProperty(l1))
            near1 = store[l1];

        near1[l2] = true;
        store[l1] = near1;

        var near2 = {};
        if (store.hasOwnProperty(l2))
            near2 = store[l2];

        near2[l1] = true;
        store[l2] = near2;
    };

    this.register = function (c1, c2) {
        registerRelationship(c1, c2);
    };

    this.registerString = function (relatedLetters) {
        for (var i = 1; i < relatedLetters.length; i++) {
            registerRelationship(relatedLetters[i - 1], relatedLetters[i]);
        }
    };

    this.areRelated = function (l1, l2) {
        validateChars(l1, l2);

        var nearl1 = store[l1];
        if (nearl1 == null)
            return false;
        return nearl1[l2] === true;
    };

    this.getRelated = function (c) {
        if (!store.hasOwnProperty(c))
            return {};
        return store[c];
    };
};

/**
 * Create an object to store letters that are related
 * If a letter has any relations then it is stored as a key in the object
 * and the value is an object where any related letter is a key of that object.
 * 
 * For example, if a is related to b and c ->
 * {
 *    a: {
 *          b: true,
 *          c: true
 *    },
 *    b: {
 *          a: true
 *    },
 *    c: {
 *          a: true
 *    }
 * }
 */
exports.relationshipStore = relationshipStore;