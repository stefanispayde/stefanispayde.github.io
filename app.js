
$(()=> {
// console.log("JS running!");

//global variables
let player1Points = 0;
let player1NumEmpty = 0;
let player2Points = 0;
let player2NumEmpty = 0;
let die = "";
let name1 = "";
let name2 = "";


//function for beginning game
const start = () => {
   let getStarted = prompt("Welcome to Scattergories! This game has specific rules and even startegies. Please visit the rules page and have a look see. Are you ready to start? Y/N");
   if (getStarted === "Y" || getStarted === "y") {
     getName();
   } else if
      (getStarted === "N" || getStarted === 'n') {
        alert("Another time then. Goodbye!");
      }
     else {
       alert("Please choose an appropriate option");
       start();
   }
}

//function allows players to input their name to announce winner
const getName = () => {
  name1 = prompt("Please enter your name.");
  // let name1 = "";
  name2 = prompt("Player 2, what is your name?")
  // let name2 = "";
  diceRoll();
}

//this is the array/for loop to choose a random letter from the dice
let rollDie = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const diceRoll = () => {

  for (let i = 0; i <= rollDie.length; i++){
  die = rollDie[Math.floor(Math.random()* rollDie.length)];

  }
  alert("Your letter is " + die + "."); //instead of alert set HTML of div to this phrase

}
//global variables
let player1Answers = [];
let player2Answers = [];

// save form 1 answers into an array and hide player 1's answers
const formSubmission = () => {
  let player1Inputs = $("#player1 input");
  for (let i=0; i < player1Inputs.length; i++) {
    let answer = player1Inputs.eq(i).val();
    player1Answers.push(answer);
  }
  console.log(player1Answers);
  $('#player1').css('visibility', 'hidden');
  notEmpty1(player1Answers);
}
// clearInterval();
// setTimer();

const formSubmission2 = () => {
    let player2Inputs = $("#player2 input");
    for (let j = 0; j < player2Inputs.length; j++ ){
      let answer2 = player2Inputs.eq(j).val();
      player2Answers.push(answer2);
    }
    console.log(player2Answers);
    $('#player1').css('visibility', 'visible');
    notEmpty2(player2Answers);

}

//function to check through answer array for player 1 to check for empty strings
const notEmpty1 = (array1) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === "") {
      player1NumEmpty++;
      console.log("empty string " + player1NumEmpty);
    }
  }
}

//function to check through answer array for player 2 to check for empty strings
const notEmpty2 = (array2) => {
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] === "") {
      player2NumEmpty++;
      console.log("empty string " + player2NumEmpty);
    }
  }
  compareValues();
  // correctLetter();
}

  // const correctLetter1 = ()=> {
  //   for(i = 0; i < array1.length; i++){
  //     if (array1[0] == die) {
  //       console.log("This answer did not begin with the letter rolled.");
  //     }
  //   }
  // }
  //
  // const correctLetter2 = ()=> {
  //   for(i = 0; i < array1.length; i++){
  //     if (array2[0] !=== die) {
  //       console.log("This answer did not begin with the letter rolled.");
  //     }
  //   }
  //   compareValues();
  // }

//function checks to see if players have the same answer on the same question, gives points based on number of unique answers and tallys them
const compareValues = () => {
  for (let i = 0; i < player2Answers.length; i++ ){
    //this if statement compares answers to ensure they are not the same
        if (player1Answers[i].toLowerCase().trim() !== player2Answers[i].toLowerCase().trim()){
          player1Points += 1;
          player2Points += 1;
        } else {
          console.log("This answer is a dulicate. No point earned.");
          }
  }
  tallyScore();

}

//function takes unique answers for each player and subtracts any point for unanswered question
const tallyScore = () => {
  console.log("---------");
  console.log(player1Points);
  console.log(player1NumEmpty);
  player1Tally = player1Points - player1NumEmpty;
  player2Tally = player2Points - player2NumEmpty;

  console.log("Player 1 has a total of " + player1Tally + " points.");
  console.log("Player 2 has a total of " + player2Tally + " points.")

  let message = "";
    if (player1Tally > player2Tally) {
      message = name1 + " is the winner with a total of " + player1Tally + " points!";
    }else if (player2Tally === player1Tally) {
      message = "It's a tie!";
    } else{
      message = name2 + " is the winner with a total of " + player2Tally + " points!";
    }
      alert (message);

    }


  $( "#player1" ).submit(function( event ) {
    event.preventDefault();
    formSubmission();
    alert("Hand the computer to player 2. Click the button to restart the timer and remember, no peeking at your list beforehand!");

  });

// on submit of form 2, compare values
  $( "#player2" ).submit(function( event ) {
    event.preventDefault();
    formSubmission2();

  });

start();
//
//

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
const now = Date.now();
const then = now + seconds * 1000;
displayTimeLeft(seconds);

countdown = setInterval(() => {
  const secondsLeft = (then - Date.now()) / 1000;
  //check if we should stop it
  if(secondsLeft < 0) {
    clearInterval(countdown);
    return;
  }
  //display it
  displayTimeLeft(secondsLeft);
}, 1000);
}

function displayTimeLeft(seconds) {
  const display = `${seconds}`;
  if(seconds <= 0) {
  clearInterval(countdown);
}
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));


$("#button").on('click', (e) =>{
  timer();
})
//
$(".submitBtn").on('click', (e) =>{
  clearInterval(countdown);
  // timer(seconds);
 })

});  //end of window upload
