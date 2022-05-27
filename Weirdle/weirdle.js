//the following objects represent each square that the user will fill with a character when they
//...make a guess
//row is the row the square is on, letter is the position the letter is in in the word
//empty represents whether the square has been filled or not
//id is the corresponding table cell id, which the letter will be shown in
//guessesSubmitted states whether the user has already submitted their guesses for that
//...row
const row1Ltr1 = {row: 1, letter: 1, empty: true, id: "guess1"};
const row1Ltr2 = {row: 1, letter: 2, empty: true, id: "guess2"};
const row1Ltr3 = {row: 1, letter: 3, empty: true, id: "guess3"};
const row1Ltr4 = {row: 1, letter: 4, empty: true, id: "guess4"};
const row1Ltr5 = {row: 1, letter: 5, empty: true, id: "guess5", guessesSubmitted: false};

const row2Ltr1 = {row: 2, letter: 1, empty: true, id: "guess6"};
const row2Ltr2 = {row: 2, letter: 2, empty: true, id: "guess7"};
const row2Ltr3 = {row: 2, letter: 3, empty: true, id: "guess8"};
const row2Ltr4 = {row: 2, letter: 4, empty: true, id: "guess9"};
const row2Ltr5 = {row: 2, letter: 5, empty: true, id: "guess10", guessesSubmitted: false};

const row3Ltr1 = {row: 3, letter: 1, empty: true, id: "guess11"};
const row3Ltr2 = {row: 3, letter: 2, empty: true, id: "guess12"};
const row3Ltr3 = {row: 3, letter: 3, empty: true, id: "guess13"};
const row3Ltr4 = {row: 3, letter: 4, empty: true, id: "guess14"};
const row3Ltr5 = {row: 3, letter: 5, empty: true, id: "guess15", guessesSubmitted: false};

const row4Ltr1 = {row: 4, letter: 1, empty: true, id: "guess16"};
const row4Ltr2 = {row: 4, letter: 2, empty: true, id: "guess17"};
const row4Ltr3 = {row: 4, letter: 3, empty: true, id: "guess18"};
const row4Ltr4 = {row: 4, letter: 4, empty: true, id: "guess19"};
const row4Ltr5 = {row: 4, letter: 5, empty: true, id: "guess20", guessesSubmitted: false};

const row5Ltr1 = {row: 5, letter: 1, empty: true, id: "guess21"};
const row5Ltr2 = {row: 5, letter: 2, empty: true, id: "guess22"};
const row5Ltr3 = {row: 5, letter: 3, empty: true, id: "guess23"};
const row5Ltr4 = {row: 5, letter: 4, empty: true, id: "guess24"};
const row5Ltr5 = {row: 5, letter: 5, empty: true, id: "guess25", guessesSubmitted: false};

const row6Ltr1 = {row: 6, letter: 1, empty: true, id: "guess26"};
const row6Ltr2 = {row: 6, letter: 2, empty: true, id: "guess27"};
const row6Ltr3 = {row: 6, letter: 3, empty: true, id: "guess28"};
const row6Ltr4 = {row: 6, letter: 4, empty: true, id: "guess29"};
const row6Ltr5 = {row: 6, letter: 5, empty: true, id: "guess30", guessesSubmitted: false};

const allSquaresForEachGuess = [row1Ltr1, row1Ltr2, row1Ltr3, row1Ltr4, 
                            row1Ltr5, row2Ltr1, row2Ltr2, row2Ltr3,
                            row2Ltr4, row2Ltr5, row3Ltr1, row3Ltr2,
                            row3Ltr3, row3Ltr4, row3Ltr5, row4Ltr1,
                            row4Ltr2, row4Ltr3, row4Ltr4,
                            row4Ltr5, row5Ltr1, row5Ltr2, row5Ltr3, 
                            row5Ltr4, row5Ltr5, row6Ltr1, row6Ltr2,
                            row6Ltr3, row6Ltr4, row6Ltr5];

//The answer, always set this in uppercase!
let theWordBeingGuessed = "TEETH";
//if a row is completely full the user must press enter to check the correctness and gain more guesses
let mustPressEnterKey = false;
//used to check whether the timer is on so that it can be turned on as soon as the user enters their first guess
let timerOn = false;
//stores the start time of the game
let startTime;
//adds a character to each square

function addCharacter()
{
    //only adds characters during the game - not after the results are displayed
    if (!gameOver)
    {
        startTimer();
        //determines what the last square filled is on the last row filled
        //if the current row has not been filled 
        //...allow the user to enter a character e.g. [a][b][c][d][] <- space for another letter
        //...if all squares are filled e.g. [a][b][c][d][e], the user must press enter or delete a character to allow more guesses
        if (checkLastSquareFilled() != allSquaresForEachGuess.length - 1 && !mustPressEnterKey)
        {
            if (allSquaresForEachGuess[checkLastSquareFilled() + 1].letter == 5)
            {
                mustPressEnterKey = true;
            }
            //Displays the keyboard character selected
            document.getElementById(allSquaresForEachGuess[checkLastSquareFilled() + 1].id).innerHTML = this.innerHTML;
            //the square is full
            allSquaresForEachGuess[checkLastSquareFilled() + 1].empty = false;
        }  
    }
         
}

//determines what the last square filled is on the last row filled
//...e.g. [a][b][c][][] - the last square filled it letter 3, therefore the letter to be deleted is letter 3 or the
//...space to add another letter is letter 4
let checkLastSquareFilled = () =>
{
    //Initialise to -1 as when the game begins no squares are full, the first square to be filled
    //is at index 0, in the addCharacter() method, a character is added to lastSquareFilled + 1
    let lastSquareFilled = -1;
    for (let square = 0; square < allSquaresForEachGuess.length; square++)
    {
        let currentSquare = document.getElementById(allSquaresForEachGuess[square].id);
        if (currentSquare.innerHTML.length > 0)
        {
            lastSquareFilled = square;
        }
    }
    return lastSquareFilled;
}
//sends the
let sendResult = () =>
{
    if (!gameOver)
    {
        //only enable the guesses to be "saved" if all squares are full, e.g. only allow the user to press enter
        //... if it is [a][b][c][d][e] not [a][b][c][d][] etc.
        if (allSquaresForEachGuess[checkLastSquareFilled()].letter == 5)
        {
            //checks if the user has guessed a real word and the showHint() callback checks the answer
            verifyWordIsReal(showHint);
     
        } 
    }
  
}
//Removes the last character entered from the square
let deleteCharacter = () =>
{
    //only deletes characters during the game - not after the results are displayed
    if (!gameOver)
    {
        //enables the user to make more guesses as the row is no longer full
        mustPressEnterKey = false;
        //only delete letters in the current row, not the previous one as that would give the user more than 6 guesses
        let currentRow = allSquaresForEachGuess[checkLastSquareFilled()].row;
        //iterate through every square on game board
        for (let square = 0; square < allSquaresForEachGuess.length; square++)
        {
            //if the current square is the last square on the row delete the character only if hints haven't
            //been given (i.e. the colour of the squares have changed) for that row 
            if (allSquaresForEachGuess[square].row == currentRow && allSquaresForEachGuess[square].letter == 5)
            {
                if (allSquaresForEachGuess[square].guessesSubmitted != true)
                {
                    document.getElementById(allSquaresForEachGuess[checkLastSquareFilled()].id).innerHTML = "";
                }         
            }
        }
    }
  
}



//gets the guess values from the boxes
let getGuess = () =>
{
      let currentRow = allSquaresForEachGuess[checkLastSquareFilled()].row;
      //An index in the word array
      let letter= 0;
      const word = [];
      for (let square = 0; square < allSquaresForEachGuess.length; square++)
      {
          //assigns the guess (stored in allSquaresForEachGuess[square] to the word array
          if (allSquaresForEachGuess[square].row == currentRow)
          {
              word[letter] = allSquaresForEachGuess[square];
              letter++;
          }
      }
      return word;
}

let showHint = (letterObject, letter1, letter2, letter3, letter4, letter5) =>
{

        //enables the user to make more guesses for the next row and get hints if 
        //there guess is a real word but not the answer
        mustPressEnterKey = false;
        allSquaresForEachGuess[checkLastSquareFilled()].guessesSubmitted = true;
        //displays red or green for incorrect/correct letters
        changeSquareColours(letterObject);
        //if the guesses are correct the user has won, regardless of the number of guesses
        theWordBeingGuessed = theWordBeingGuessed.toUpperCase();
        if (letter1 == theWordBeingGuessed[0] && letter2 == theWordBeingGuessed[1]
            && letter3 == theWordBeingGuessed[2] && letter4 == theWordBeingGuessed[3]
            && letter5 ==theWordBeingGuessed[4])
        {
                showResult(true);
        }
        else 
        {
                //if it is the last row of guesses, and the guesses are wrong and the player has lost
                if (letterObject[0].id == allSquaresForEachGuess[25].id)
                {
                    showResult(false);
                }
        }
}



//creates an array of objects to keep track of the number of times the player has guessed
//the same letter in their answer (so it can be used in changeSquareColours() to turn a square yellow
//if it is correct but in the wrong position)
let guessedLetters = (word) =>
{
        let letter1 = document.getElementById(word[0].id);
        let letter2 = document.getElementById(word[1].id);
        let letter3 = document.getElementById(word[2].id);
        let letter4 = document.getElementById(word[3].id);
        let letter5 = document.getElementById(word[4].id);
        let guess1 = {"letter": letter1, "numOfOccurrencesInGuess": 0};
        let guess2 = {"letter": letter2, "numOfOccurrencesInGuess": 0};
        let guess3 = {"letter": letter3, "numOfOccurrencesInGuess": 0};
        let guess4 = {"letter": letter4, "numOfOccurrencesInGuess": 0};
        let guess5 = {"letter": letter5, "numOfOccurrencesInGuess": 0};
    
        let guesses = [guess1, guess2, guess3, guess4, guess5];
        return guesses;
}

//checks guesses against actual word and shows green if correct, red if incorrect, yellow if close
let changeSquareColours = (word) =>
{
    //TEST CASES FOR "GLOGG": "CLONE", "POOLS", "OTHER", "GOING", ""READY"
    //TEST CASES FOR "TEETH": "TOOTH", "TOTES", "OTHER", "GOING"
    let guesses = guessedLetters(word);
    let yellow = "#FFDF00";
    let red = "#F88379";
    let green = "#90EE90";
    //changeToGreen() returns an updated version of the guesses array
    guesses = changeToGreen(guesses, green);
    changeToYellowOrRed(guesses, yellow, red);
}

//checks guess against actual word and shows green if current
let changeToGreen = (guesses, green) =>
{
    for (let letter = 0; letter < guesses.length; letter++)
    {
        let currentLetter = guesses[letter].letter;
        if (currentLetter.innerHTML == theWordBeingGuessed[letter])
        {
            currentLetter.style.backgroundColor = green;
            //updates the array of guess objects with and increments the number of times a specifc letter occurred 
            //in the guess by 1 (e.g. "o" occurs twice in pool, so the numOfOccurrencse for the letter o is 2)
            guesses = trackNumOfOccurrencesOfLetterInGuess(guesses, currentLetter);
        }
    }
    return guesses;
}

//checks guess against actual word and shows yellow if correct but in the wrong position and red if incorrect
let changeToYellowOrRed = (guesses, yellow, red) =>
{
    for (let letter = 0; letter < guesses.length; letter++)
    {
        let currentLetter = guesses[letter].letter;
        //check if the background colour has already been set to green as changeToGreen() runs before this method
        if (currentLetter.style.backgroundColor.length == 0)
            { 
                //if the guessed letter occurs in the word at least once and the number of times the user has used that same letter 
                //...in their guessed word is less than the number of times it actually occurs in the correct answer 
                //...then the user can be hinted that it is a correct guess, but not in the right position. 
                //...e.g. guessing "CLONE" when the answer is "CLOWN"  turns the letter "N"  yellow
                //...however when guesses[letter].numOfOccurrencesInGuess is >= the number of times the guessed letter occurs in the answer
                //...the guess is incorrect e.g. if answer is "GROWN" but the user guesses "POOL", then the second "O" will turn red
                //...as number of occurrences has alcready been incremented by 1 in changeToGreen() for the first "O" occurrence in "GROWN"
                if (checkIfLetterOccursInWord(theWordBeingGuessed, currentLetter) >  0 
                && guesses[letter].numOfOccurrencesInGuess < checkIfLetterOccursInWord(theWordBeingGuessed, currentLetter))
                {
                    currentLetter.style.backgroundColor = yellow; 
                    guesses = trackNumOfOccurrencesOfLetterInGuess(guesses, currentLetter);
                }
                else  { currentLetter.style.backgroundColor = red; }
           }     
    }
}



//Counts the number of times a guessed letter occurs in the answer, so that the squares
//are highlighted yellow if they do (and aren't in the right position) red if they don't
let trackNumOfOccurrencesOfLetterInGuess = (guesses, guessedLetter) =>
{
        for (let letter = 0; letter < guesses.length; letter++)
        {
            if (guesses[letter].letter.innerHTML == guessedLetter.innerHTML)
            {
                guesses[letter].numOfOccurrencesInGuess = guesses[letter].numOfOccurrencesInGuess + 1;
            }
        }
    return guesses;
}

let checkIfLetterOccursInWord = (theWordBeingGuessed, guessedLetter) =>
{
    //  Counts number of times the guessed letter is repeated in actual answer
    let numOfOccurrencesInAnswer = 0;
    for (let letter = 0; letter < theWordBeingGuessed.length; letter++)
    {
        if (theWordBeingGuessed[letter] == guessedLetter.innerHTML)
        {
            numOfOccurrencesInAnswer++;
        }
    }
    return numOfOccurrencesInAnswer;
}




//closes the modals
window.onclick = (e) => 
{
    let instructionsModal = document.getElementById("instructionsModal");
    let resultsModal = document.getElementById("resultsModal");
    let statsModal = document.getElementById("statsModal");
    let instructionsIcon = document.getElementById("help");
    let statsIcon = document.getElementById("stats");

    if ((e.target != instructionsModal || e.target != resultsModal || e.target != statsModal) &&
        (e.target !=  instructionsIcon && e.target != statsIcon)) 
    { 
        if (instructionsModal.style.display == "block") { instructionsModal.style.display = "none"; } 
        else if (resultsModal.style.display == "block") { resultsModal.style.display = "none"; }
        else if (statsModal.style.display == "block") { statsModal.style.display = "none"; }
    }        
}

 


//shows the instructions modal
let showInstructions = () =>
{
    document.getElementById("instructionsModal").style.display = "block";      
}

//signals when the game is over
let gameOver = false;
//won is a boolean value representing whether the user has won or lost the game
let showResult = (won) =>
{
    gameOver = true;
    if (won)
    {
        document.getElementById("result").innerHTML = "<b>YOU WON!</b>";
        updateStats(true);
    }
    else
    {
        document.getElementById("result").innerHTML = `<b>YOU LOST!</b> <br> The correct word is "${theWordBeingGuessed}"`;
        updateStats(false);
    }
    document.getElementById("time").innerHTML = `Your time: ${calculateTimeTaken()}`;
    document.getElementById("resultsModal").style.display = "block";
}

//starts the timer at the start of the game
let startTimer = () => 
{
    if (timerOn == false)
    {
        startTime = Date.now();
        timerOn = true;
    }
}

//calculates time taken to make guesses from start to finish
let calculateTimeTaken = () =>
{
    const timeInMilliseconds = Date.now() - startTime;
    const timeInSeconds = timeInMilliseconds/1000;
    // const timeInMinutes = timeInSeconds/60;
    let date = new Date(0);
    date.setSeconds(timeInSeconds);
    let formattedTime = date.toISOString().substring(11, 19);
    return (formattedTime);
}


//VERIFY WORD IS REAL USING FREE DICTIONARY API: https://github.com/meetDeveloper/freeDictionaryAPI
let verifyWordIsReal = (showHint) =>
{
    let letterObject = getGuess();
    let letter1 = document.getElementById(letterObject[0].id).innerHTML;
    let letter2 = document.getElementById(letterObject[1].id).innerHTML;
    let letter3 = document.getElementById(letterObject[2].id).innerHTML;
    let letter4 = document.getElementById(letterObject[3].id).innerHTML;
    let letter5 = document.getElementById(letterObject[4].id).innerHTML;
    guess = letter1 + letter2 + letter3 + letter4 + letter5;
    guess = guess.toLowerCase();
    let response = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`)
        .then(response => 
        {
            //if the request to the server does not succeed (status code 200), the word isn't in the dictionary
            //throw a new error to prompt the user to enter a valid word
            if (response.status != 200) { throw new Error(response.status)}
            //only provides hints/results if the user as guessed a real word
            else { showHint(letterObject, letter1, letter2, letter3, letter4, letter5); }
        }).catch(err => mustEnterRealWord());
}

//Prompts the user to enter a valid word
let mustEnterRealWord = () =>
{
        //Displays to the user that they must enter real word
        let enterRealWord = document.getElementById("enterRealWord");
        enterRealWord.style.display = "block";
        //Removes the message from the secreen after a few seconds
        setTimeout(function(){enterRealWord.style.display = "none";}, 1000);  
}

//Sets the default values for the stats for new players to the game
let setStatDefaults = () =>
{
    if (localStorage.getItem("wins") === null)
    {
        localStorage.setItem("wins", 0);
        localStorage.setItem("losses", 0);
        localStorage.setItem("currentStreak", 0);
        localStorage.setItem("maxStreak", 0);
        localStorage.setItem("played", 0);
        localStorage.setItem("winRate", 0);
    }   
}

//Updates the players game stats
let updateStats = (won) =>
{
   setStatDefaults();
   //if the user wins the game, increase wins, current streak and max streak
    if (won)
    {
        localStorage.setItem("wins", parseInt(localStorage.getItem("wins")) + 1); 
        localStorage.setItem("currentStreak", parseInt(localStorage.getItem("currentStreak")) + 1);
        localStorage.getItem("maxStreak", localStorage.setItem("maxStreak",
        parseInt(localStorage.getItem("maxStreak"))) + 1);
        localStorage.getItem("currentStreak", localStorage.setItem("maxStreak",
        parseInt(localStorage.getItem("currentStreak"))) + 1);
    }
    //if the user loses increases losses and reset current steak
    else
    {    
        localStorage.setItem("losses", localStorage.getItem("losses") + 1) 
        localStorage.setItem("currentStreak", 0); 
    }
    //sets the new max streak
    if (localStorage.getItem("curentStreak") > localStorage.getItem("maxStreak"))
    {
        localStorage.setItem("maxStreak", localStorage.getItem("currentStreak"));
    }
    localStorage.setItem("played", parseInt(localStorage.getItem("played")) + 1);
    let winRate = (parseInt(localStorage.getItem("wins"))/parseInt(localStorage.getItem("played"))) * 100;
    winRate = winRate.toFixed(1);
    localStorage.setItem("winRate", winRate);
}
//displays game stats to the user
let showStats = () =>
{
    setStatDefaults();
    document.getElementById("win").innerHTML = `Rate of wins -  ${localStorage.getItem("winRate")}%`;
    document.getElementById("currentStreak").innerHTML = `Current Streak - ${localStorage.getItem("currentStreak")}`;
    document.getElementById("maxStreak").innerHTML = `Max Streak - ${localStorage.getItem("maxStreak")}`;
    document.getElementById("played").innerHTML = `Played - ${localStorage.getItem("played")}`;
    document.getElementById("statsModal").style.display = "block";
}



//Add event listeners to keyboard
document.getElementById("a").addEventListener("click", addCharacter);
document.getElementById("b").addEventListener("click", addCharacter);
document.getElementById("c").addEventListener("click", addCharacter);
document.getElementById("d").addEventListener("click", addCharacter);
document.getElementById("e").addEventListener("click", addCharacter);
document.getElementById("f").addEventListener("click", addCharacter);
document.getElementById("g").addEventListener("click", addCharacter);
document.getElementById("h").addEventListener("click", addCharacter);
document.getElementById("i").addEventListener("click", addCharacter);
document.getElementById("j").addEventListener("click", addCharacter);
document.getElementById("k").addEventListener("click", addCharacter);
document.getElementById("l").addEventListener("click", addCharacter);
document.getElementById("m").addEventListener("click", addCharacter);
document.getElementById("n").addEventListener("click", addCharacter);
document.getElementById("o").addEventListener("click", addCharacter);
document.getElementById("p").addEventListener("click", addCharacter);
document.getElementById("q").addEventListener("click", addCharacter);
document.getElementById("r").addEventListener("click", addCharacter);
document.getElementById("s").addEventListener("click", addCharacter);
document.getElementById("t").addEventListener("click", addCharacter);
document.getElementById("u").addEventListener("click", addCharacter);
document.getElementById("v").addEventListener("click", addCharacter);
document.getElementById("w").addEventListener("click", addCharacter);
document.getElementById("x").addEventListener("click", addCharacter);
document.getElementById("y").addEventListener("click", addCharacter);
document.getElementById("z").addEventListener("click", addCharacter);

document.getElementById("enter").addEventListener("click", sendResult);
document.getElementById("del").addEventListener("click", deleteCharacter);

document.getElementById("help").addEventListener("click", showInstructions);
document.getElementById("stats").addEventListener("click", showStats);





