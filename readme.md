The game of Scattergories was my absolute favorite not only as a child, but as an adult as well.
This game has many rules to abide by, in both a grammatical and vocabulary sense. I decided to choose the most important, and start there.

****************************
BASIC functions
****************************
One of the most fun things about Scattergories is the 26 sided dice. To mimic that, I created a function with an array holding all the letters of the alphabet. Using Math.random and Math.floor, a different letter is chosen every game. The letter is given to the players at the start.

Once the players submit their answers,  the functions formSubmission() and formSubmission2() are called. Using jQuery, the players answers are taken from the form, and put into an empty array. Upon hitting the submit button, the two arrays go through two different checks to determine the score. First, they are checked for empty strings. Any unanswered question is a loss of point. Comparing the two arrays required a for loop to iterate through, and then a conditional statement that compared each array index. Next, the compareValues() was called. This ensured that neither of the arrays indexes held the same answer, as each answer needs to be unique.

a tallyScore function gave a point for each empty string, and another point for each unique answer per player. It then subtracts the points for empty strings away from those awarded for correct answers and compares the total between the two players.

The struggles here, were finding a way to incorporate all the rules Scattergories has. This is a challenge I am thoroughly enjoying!
1) Ensuring each word starts with the letter rolled on the die
2) Ensuring correct spelling of the word- if player 1 and player 2 have the same answer, yet one is  misspelled, they each still get a point.
3) There also needs to be an ability to have a judgement call where players can challenge and be challenged on questionable answers.

I enjoyed making this game as it showed me exactly how much I have learned in the past month. The timer, which was an extra for me, was a plus and definitely a crucial part of the game.
https://github.com/stefanispayde/stefanispayde.github.io
