var Letter = require("./letter.js");

function Word( ) {
    this.wordArray = [];

    this.addLetter = function(character, beenGuessed) {
        this.wordArray.push(new Letter(character, beenGuessed));
      };
    
    this.letterCount = function() {
        return this.wordArray.length;
    };
};

var a = new Letter('a', true);

a.guessFunction();


module.exports = Word;