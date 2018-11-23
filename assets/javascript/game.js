var wins = 0;
var loses = 0;
var guessCount = 9;
var guess = "";

// creates an empty array for the user's guesses
var userGuesses = [];
console.log(userGuesses);

// creates a var for the position ion the previous array where the user's guess goes
var guessPosition = 0;

// Creates an array of all the letter of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

console.log(wins);
console.log(alphabet[2]);

// Creates the computers guess from the array alphabet
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Computer Guess= " + computerGuess);

// Runs the function when a key is pressed " technically released"
document.onkeyup = function(event) {

    // Sets the guess var to the key pressed
    guess = event.key;

    console.log("guess = " + guess)

    // Runs an if statement as long as the user has guesses left
    if (guessCount > 1) {

        // If user guesses corretly,
        if (guess === computerGuess) {
            // win cont goes up,
            wins++;
            // guess count is reset to 9,
            guessCount = 9;
            // computer chooses a new letter
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            // guess position is reset back to start,
            guessPosition = 0;
            // and the array of user guesses is reset to be blank
            userGuesses = [];
        }
        // If user guesses incorrettly,
        else {
            // guess count goes down
            guessCount--;
            // users guess is put into the userGuesses array at the guessPosition position,
            userGuesses[guessPosition] = guess + " ";
            // and guessPosition increases
            guessPosition++;
            console.log(userGuesses);
        }
        
    }
    // If user has no more guesses left
    else {
        // lose counter goes up
        loses++;
        // guess count is reset to 9
        guessCount = 9;
        // computer guesses a new letter
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        // guess position is reset to start
        guessPosition = 0;
        // and userGuesses array is reset to blank
        userGuesses = [];

    }

    
    console.log("Computer Guess= " + computerGuess);

    winText.textContent = wins;
    loseText.textContent = loses;
    guessCountText.textContent = guessCount;
    guessText.textContent = userGuesses;
}