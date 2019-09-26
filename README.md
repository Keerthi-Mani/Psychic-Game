# Psychic-Game

Test your psychic abilities! The User has (lucky number) 9 tries to correctly guess the letter that the Computer is "thinking."

# How It Works

1. At the start of each round, the Computer randomly chooses a letter.
2. The User tries to guess the Computer's letter by pressing on any letter key from 'a' to 'z.'
3. The letters selected by the User shows up in 'Letters Guessed' for up to 9 times (the number of guesses the User has to select the Computer's letter).
4. When the User correcly guesses the letter, the User wins by 1 point.
5. When the User incorrectly guesses the letter, the 'Number of Guesses' decreases by 1.
6. When the User runs out of guesses, the User loses by 1 point.
7. The game restarts once the User wins or loses.


# Developer Notes

## Built With:

1. CSS
2. JavaScript

## CSS:
CSS Reset from Meyer Web  is used to reset the default styling of all HTML elements to a consistent baseline in order to better customize CSS
Background Image from Galaxy

## Javascript

1. Created global variables to store values

2. Note: Variable 'numberGuesses' is equal to 9 to represent the number of guesses that the User has

3. Upon page load, the computer randomly selects a letter when the function 'computerChoice' is called

4. The game is triggered by the event 'onkeyup' (the event that occurs when the User releases a key on the keyboard)

5. Variable 'userGuess' is the captured by the 'event.key' (the key on the keyboard the User releases captured by event). 

6. Note: The 'userGuess' is updated each time a key is released.

7. To streamline the process, the built-in JavaScript function 'toLowerCase()' is used to change all keys selected to lowercase because the computer recognizes a lowercase and an uppercase of the same letter as different letter (i.e. 'a' and 'A' are different choices).

8. If statement: If variable 'userGuess' exists in the array 'computerChoices' (which contains letters from 'a' to 'z'), the game continues that include other if statements (described below).
Otherwise, if the variable 'userGuess' is not a letter, the User gets an alert to remind the user to select a letter.

9. If the 'userGuess' does not select the 'computerChoice', then the number of guesses stored in the variable 'Guesses Left' decreases by 1 and the 'userGuess' is added to (or "pushed") to the array 'Guessed so far', which stores and displays the User's keys guessed.

10. If the 'userGuess' selects the 'computerChoice', the User gets an alert of the Computer's letter and the number of wins stored in the variable 'wins' increases by 1 to represent each game won.

11. When the the variable Guessesleft reaches 0, the User gets an alert of the Computer's letter and the number of losses  to represent each game lost.

12. Note: When the function 'resetGame' is called, the variables 'wins' and 'loses' are not reset to keep track of the users points.




