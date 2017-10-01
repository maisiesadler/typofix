var fs = require('fs');

function readLines(input, func, fin) {
    var remaining = '';

    input.on('data', function (data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            func(line);
            index = remaining.indexOf('\n');
        }
    });

    input.on('end', function () {
        if (remaining.length > 0) {
            func(remaining);
        }

        fin();
    });
}

var words = {};
function createOrAddLetter(o, letter, nextLetter) {
    var a = {};
    if (o.hasOwnProperty(letter)) {
        a = o[letter];
    }

    if (!a.hasOwnProperty(nextLetter))
        a[nextLetter] = {};

    o[letter] = a;

    return o;
};

function addWord(word) {
    var o = words;
    var lastLetter = null;
    for (var l of word) {
        if (lastLetter == null) {
            lastLetter = l;
            continue;
        }
        o = createOrAddLetter(o, lastLetter, l)[lastLetter];
        lastLetter = l;
    }
    o = createOrAddLetter(o, lastLetter, '+')[lastLetter];
}


var ws = [];
var addWs = function(word){
    ws.push(word);
};

var wsToFile = function(){
    var fileContents = "var customwords = require('./customwords');\n"
    ws.forEach(word => {
        fileContents += 'customwords.pushNewWords("' + word + '");\n';
    })    
   // fileContents += "exports.words = words;";

    fs.writeFile('englishwords.js', fileContents);
}

var isReady = false;
var s = fs.createReadStream("words.txt");
var file = readLines(s, function (rem) {
    addWs(rem);
}, function () {
    console.log('ready');
    isReady = true;
    wsToFile();
});


var isWord = function (word) {
    if (!isReady) {
        console.log('checking ' + word + ' but not yet ready');
        return null;
    }

    var isWord = null;
    var o = words;
    for (var letter of word.toLowerCase()) {
        if (o != null) {
            o = o[letter];
        }
    }

    return o != null && o.hasOwnProperty('+');
};

var getValidWords = function (potentialWordArray) {
    var words = [];
    potentialWordArray.forEach(comb => {
        if (isWord(comb)) {
            words.push(comb);
        }
    });

    return words
};

var isReadyFn = function() {return isReady};

exports.getValidWords = getValidWords;
exports.isReady = isReadyFn;