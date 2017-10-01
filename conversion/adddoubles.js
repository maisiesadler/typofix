var addDoubles = (word) => {
    var words = [];
    for (var i = 0; i < word.length; i++) {
        words.push(word.substring(0, i)
            + word[i] + word[i]
            + word.substring(i + 1, word.length));

    }

    return words;
};

exports.convert = addDoubles;


(function(){
    var doubles = addDoubles("test");
})();