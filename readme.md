# Memory Game

## Storage (Variables)
Number of Pairs Matched (8 pairs = 16 cards)
State of Game (no card chosen, one card chosen, two cards chosen)
card numbers array (collection of 2 sets of 8 numbers, e.g. (1, 2, 3, 4, 5, 6, 7, 8) x 2)

## Actions (Functions)
1. When Page Loads - Shuffle And Deal Cards
1. Update User Feedback
    * takes a string of text and populates it in the feedback text box
1. Shuffle And Deal Cards
    * Use Randmizes Function to Randomize our array
    * Replaces images in the document
    * Sets Match Count to zero
1. Click On A Card
    * If first card is chosen, app waits for second card
    * If second card chosen, app checks to see if they are a match
        * if NO match,
            * hide both cards
            * Update user feedback to read: "Sorry, No Match."
        * if match
            * leave chosen cards displayed
            * Update user feedback to read: "You found a match"
            * Check if You Won The Game
1. Check if User Won The Game
    * check if all cards are Matched - Count Number of Cards Matched
    * if count equals 8 - You Won The Game
    * Update user feedback to read: "You Win!!"
1. Click Reset Button - Shuffle And Deal Cards


## Things you can also add
* Show a Picture on top of everything when they win!! Animate gif for example.
* a counter (plus and minus whenever they get a match)
    * store in session top scores. Highest score would be 8 points
* A decermenting timer, if timer runs out game over
* A incrementing timer, so users can try and beat their time
    * store in session to create a list of past plays




