# Typofix

Corrects spelling mistakes to a list of registered words

### Usage
```javascript
var typofix = require("typofix");
var pushNewWords = typofix.pushNewWords;
var suggest = typofix.suggest;

pushNewWords('testing');
pushNewWords('add all words in this sentence');
pushNewWords(['register', 'everything', 'in this', 'array']);

var suggestion = suggest('reigster');
//suggestion = ["register"];
```

Use English words

```javascript
var loadEnglishWords = typofix.loadEnglishWords;
var pushNewWords = typofix.pushNewWords;
var suggest = typofix.suggest;

loadEnglishWords();

var suggestion = suggest('tesring');
//suggestion = ["testing"];

//can still add custom words
pushNewWords("maisie");

```