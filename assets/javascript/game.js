//create an alphabet array
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Random Computer guess
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
//creating variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];

//create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remaining = document.getElementById("guessesleft-text");
var soFarGuessed = document.getElementById("guessedsofar-text");

//function runs whenever the user presses the key
document.onkeyup = function(event) {
  //determines which key was pressed
  var userGuess = event.key.toLowerCase();

  //alert the user to type only the alphabet keys
  if (event.which < 65 || event.which > 90) {
    alert("Only a to z characters are allowed");
    return;
  }

  if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    guessChoices = [];
    computerGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }
  if (userGuess !== computerGuess) {
    guessesLeft--;
    guessChoices.push(userGuess);
  }
  if (guessesLeft === 0) {
    losses++;
    alert("GAME OVER!!");
    guessesLeft = 9;
    guessChoices = [];
    computerGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  //Displays in the screen
  userChoiceText.textContent = "You chose : " + userGuess;
  winsText.textContent = "Wins : " + wins;
  lossesText.textContent = "Losses : " + losses;
  remaining.textContent = "Guesses Left : " + guessesLeft;
  soFarGuessed.textContent = "Your Guesses so far : " + guessChoices;
};
