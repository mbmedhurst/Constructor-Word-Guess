const inquirer = require('inquirer')
const fs = require('fs')
const Word = require('./word.js')

// array of words to be guessed
const library = ['cat', 'dog', 'pig', 'horse', 'giraffe', 'cow', 'monkey']

// function to randomly select a word from the library
const getWord = _ => library[Math.floor(Math.random() * library.length)]

const word = new Word(getWord)
console.log(new Word)

let wins = 0
let guessesRemaining = 15


// let makeGuess = _ => {
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'guess',
//         message: 'Guess a letter!'
//     }
// ])
// .then(({guess}) => {
//     letterArr.push(guess)
//     console.log(guess)
//     console.log(letterArr)
// })
// .catch(e => console.log(e))
// }