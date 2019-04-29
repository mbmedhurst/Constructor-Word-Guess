function Letter(value) {
    // string value to store the underlying character for the letter
    this.character = value
    // boolean value that stores whether the letter has been guessed
    this.isGuessed = false
    // returns the underlying character if the letter has been guessed
    // or a placeholder if the letter has not been guessed
    this.toString = _ => {
            if(this.isGuessed === true) {
                return this.character
            } else {
                return '_'
            }

 }
    // checks user guess against underlying character
    // updates isGuessed to true if it was guessed correctly
    this.checkGuess = (guess) => {
        if(this.character === guess) {
            this.isGuessed = true
        }
    }
}

module.exports = Letter