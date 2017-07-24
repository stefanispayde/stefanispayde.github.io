$(()=> {
// console.log("JS running!");

let player1Points = 0;
let player1NumEmpty = 0;
let player2Points = 0;
let player2NumEmpty = 0;
let die = "";
// let getStarted = '';
let name1 = "";
let name2 = "";

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

const getName = () => {
  name1 = prompt("Please enter your name.");
  // let name1 = "";
  name2 = prompt("Player 2, what is your name?")
  // let name2 = "";
  diceRoll();
}

//this is the array/for loop to choose a random letter from the dice, have click event roll die
let rollDie = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const diceRoll = () => {

  for (let i = 0; i <= rollDie.length; i++){
  die = rollDie[Math.floor(Math.random()* rollDie.length)];

  }
  alert("Your letter is " + die + "."); //instead of alert set HTML of div to this phrase
}

//made these global due to scope issues and dealing with so many functions
let player1Answers = [];
let player2Answers = [];

// save form 1 answers into an array
const formSubmission = () => {
  let player1Inputs = $("#player1 input");
  for (let i=0; i < player1Inputs.length; i++) {
    // console.log(player1Inputs[i]);
    let answer = player1Inputs.eq(i).val();
    player1Answers.push(answer);
  }
  console.log(player1Answers);
  $('#player1').css('visibility', 'hidden');
  notEmpty1(player1Answers);
}


const formSubmission2 = () => {
    let player2Inputs = $("#player2 input");
    for (let j = 0; j < player2Inputs.length; j++ ){
      // console.log(player2Inputs[j]);
      let answer2 = player2Inputs.eq(j).val();
      player2Answers.push(answer2);
    }
    console.log(player2Answers);
    $('#player1').css('visibility', 'visible');
    notEmpty2(player2Answers);
}

//this function will check through answer array for player 1 to check for empty strings
const notEmpty1 = (array1) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === "") {
      player1NumEmpty++;
      console.log("empty string " + player1NumEmpty);
    }
  }
}

//this function will check through answer array for player 2 to check for empty strings
const notEmpty2 = (array2) => {
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] === "") {
      player2NumEmpty++;
      console.log("empty string " + player2NumEmpty);
    }
  }
  compareValues();
}


// this function checks to see if players have the same answer on the same question, gives points based on number of unique answers and tallys them
const compareValues = () => {
  // console.log(answers1, answers2);
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
      message = name1 + " is the winner!";
    }else if (player2Tally === player1Tally) {
      message = "It's a tie!";
    } else{
      message = name2 + " is the winner!";
    }
      alert (message);
    }


// on submit of form 1, save answers into an array-------also need hide function for player1's input before formSubmission2 is called
  $( "#player1" ).submit(function( event ) {
    event.preventDefault();
    formSubmission();
    alert("Hand the computer to player 2");
    setTimer();
  });
// on submit of form 2, compare values
  $( "#player2" ).submit(function( event ) {
    event.preventDefault();
    formSubmission2();
  });

start();

let timer;
let time = 30;
const setTimer = () => {
  time = 30;
  timer = setInterval(() => {
    time--;
    if( time == 0){
      // time = 0;
      clearInterval(timer);
      alert("Time's up! Hit submit!");
    }

    $('.timer').text('timer: ' + time + "s")
  }, 1000)
}
$("#button").on('click', (e) =>{
  setTimer();
})


});  //end of window upload
