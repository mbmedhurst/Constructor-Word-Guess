const inquirer = require('inquirer')

let wins = 0
let guessesRemaining = 15

inquirer.prompt([
    {
        type: 'input',
        name: 'guess',
        message: 'Guess a letter!'
    }
])
.then(({guess}) => {
    console.log(guess)
    
})
.catch(e => console.log(e))