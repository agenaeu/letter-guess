// windows onload functions doesn't allow anything to happen until document is fully loaded
window.onload = function () {
    // an array of possible correct letters
    var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // current index of the above array
    var currentIndex = Math.floor(Math.random() * (possibleLetters.length));
    /* console.log(currentIndex); */
    // letter representing current index
    var currentLetter = possibleLetters[currentIndex];
    console.log(currentLetter);
    // total number of tries
    var numberTries = 9;
    // number of tries remaining
    var remainingTries = 0;
    // wins gained
    var wins = 0;
    // losses gained
    var losses = 0;
    // boolean to check to see if game is over
    var hasFinished = false;
    // array housing incorrect letters guessed
    var wrongGuesses = [];
    /* console.log(wrongGuesses); */
    // boolean to check to see if game has started
    var gameStart = false;
    // makes the guessed letter a string
    var guessedLetter = "";

    startGame();

    function resetGame() {
        gameStart = true;
        // resets remaining tries back to 9
        remainingTries = numberTries;
        // makes a new random index to assign a letter
        currentIndex = Math.floor(Math.random() * (possibleLetters.length));
        // uses the index to choose the letter
        currentLetter = possibleLetters[currentIndex];
        /* console.log(currentIndex); */
        console.log(currentLetter);
        // clears the html of number of tries and number of guesses
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left = " + remainingTries);
        empty();
        document.getElementById("guessedLetter").innerText = ("Currently Guessed Letters = " + wrongGuesses);
         // clears hangman image
        /* document.getElementById("hangman-image").src = ""; */

    };

    // this function empties the array of wrong guesses for the new letter
    function empty() {
        wrongGuesses.length = 0;
    }
    function makeGuess() {
        // logs the key pressed
        guessedLetter = event.key.toLowerCase();
        // ensures the key pressed is a letter between a and z
        if (event.keyCode >= 65 && event.keyCode <= 90) {


            /* console.log(guessedLetter); */
            // uses a loop to make an index of guessed letters
            for (i = 0; i < wrongGuesses.length; i++) {
                var wrongGuessesIndex = wrongGuesses[i];
                /* console.log(wrongGuessesIndex); */

            }
            // checks if the guessed letter is the wrong letter & makes sure its not a letter already guessed
            if (guessedLetter != currentLetter && guessedLetter != wrongGuessesIndex) {
                // pushes wrong letters to an array
                wrongGuesses.push(guessedLetter)
                // updates html to show how many tries are remaining and what letters have been guessed
                document.getElementById("guessedLetter").innerText = ("Currently Guessed Letters = " + wrongGuesses);
                remainingTries--;
                document.getElementById("guessesLeft").innerHTML = ("Guesses Left = " + remainingTries);
                /* updateHangmanImage(); */
            }
        }




    };
    // checks to see if the guessed letter is the letter chosen at random from the array, if the guess was correct, resets game
    function checkWin() {
        if (remainingTries >= 0 && (guessedLetter === currentLetter)) {
            hasFinished = true;
            wins++;

            document.getElementById("wins").innerText = ("Wins = " + wins);
            resetGame();
        }
    };
    // if remaing tries hit 0 then the game is over and resets, updates the html accordingly
    function checkLoss() {
        if (remainingTries === 0) {
            hasFinished = true;
            losses++;

            document.getElementById("losses").innerText = ("Losses = " + losses);
            resetGame();
        }
    };
    // sets the parameters at the beginning of the game
    function startGame() {
        gameStart = true;
        remainingTries = numberTries;
        /* document.getElementById("hangman-image").src = ""; */
    };
    /* function updateHangmanImage() {
        document.getElementById("hangman-image").src= "../images/Hangman-image-"+(numberTries - remainingTries)+".png";
    }; */
    // ensures the above functions are run when a guess is made
    document.onkeydown = function (event) {
        makeGuess();
        checkWin();
        checkLoss();
    };

};