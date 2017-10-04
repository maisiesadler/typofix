var combinetwo = function (lg1, lg2) {
    return function (letter) {
        var a1 = lg1(letter);
        var a2 = lg2(letter);
        var a3 = [];
        a1.forEach(function (l) {
            if (l == null || l.length !== 1)
                return;
            var n = lg2(l);
            n.forEach(ne => a3.push(ne));
        }, this);
        a2.forEach(function (l) {
            if (l == null || l.length !== 1)
                return;
            var n = lg1(l);
            n.forEach(ne => a3.push(ne));
        }, this);

        var letters = a1.concat(a2).concat(a3);
        return distinct(letters);
    }
};

var distinct = function (array) {
    var arr = [];
    array.forEach(a => {
        if (arr.indexOf(a) === -1){
            arr.push(a);
        }
    });
    return arr;
};

var combineMany = function () {
    var combined = l => [l];
    for (var fn of arguments) {
        if (typeof fn !== 'function')
            throw new Error('Combine many combines functions');

        combined = combinetwo(combined, fn);
    }

    return combined;
}

exports.combined = combineMany;