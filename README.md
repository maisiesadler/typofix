# Typofix

Corrects spelling mistakes to a list of registered words

### Usage
```var typofix = require("typofix");
var pushNewWords = typofix.pushNewWords;
var suggest = typofix.suggest;


pushNewWords('testing');
pushNewWords('add all words in this sentence');
pushNewWords(['register', 'everything', 'in this', 'array']);


var suggestion = suggest('tetsing');
//suggestion = ["testing"];

```