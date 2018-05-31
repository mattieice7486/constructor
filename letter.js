function Letter(character, beenGuessed) {
    this.character = character;
    this.beenGuessed = beenGuessed;

    this.guessFunction = function() {
        if (this.beenGuessed == true) {
            console.log(`${this.character} has been guessed`);
            console.log("\n-------------\n");
            return true;
          }
          console.log(`${this.character} has not been guessed`);
          return false;
    };

    this.guessChecker = function(isCorrect) {
        if (isCorrect.character == this.character) {
            return true;
        };
    };


};

module.exports = Letter;