$(()=> {
// console.log("JS running!");

let player1Points = 0;
let player2Points = 0;

//this is the array/for loop to choose a random letter from the dice
let rollDie = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const diceRoll = () => {

  for (let i = 0; i <= rollDie.length; i++){
  let die = rollDie[Math.floor(Math.random()* rollDie.length)];
  }
  // alert("Your letter is " + die + ".");
}

// diceRoll();

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
  let numEmpty = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === "") {
      numEmpty++;
      console.log("empty string " + numEmpty);
    }
  }
}

//this function will check through answer array for player 2 to check for empty strings
const notEmpty2 = (array2) => {
  let numEmpty2 = 0;
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] === "") {
      numEmpty2++;
      console.log("empty string " + numEmpty2);
    }
  }
  compareValues(array1, array2);//need to grab array1, will be out of scope
}


// this function checks to see if players have the same answer on the same question, gives points based on number of unique answers and tallys them
// const compareValues = (answers1, answers2) => {
//   console.log(answers1, answers2);
//   for (let i = 0; i < array2.length; i++ ){
//     //this if statement compares answers to ensure they are not the same
//         if (array1[i].toLowerCase().trim() !== array2[i].toLowerCase().trim()){
//           player1Points += 1;
//           player2Points += 1;
//           console.log("Player 1, you have recieved " + player1Points + " points this round.");
//           console.log("Player 2, you have recieved " + player2Points + " points this round.");
//         } else {
//           console.log("This answer is a dulicate. No point earned.");
//           }
//   }
// // // // clearForm1();
// // // // clearForm2();
// }
const tallyScore = (player1Points, numEmpty, player2Points, numEmpty2) => {
  player1Tally = player1Points - numEmpty;
  player2Tally = player2Points - numEmpty2;
  console.log("Player 1 has a total of " + player1Tally + " points.");
  console.log("Player 2 has a total of " + player2Tally + " points.")

    if (player1Tally > player2Tally) {
      console.log("Player 1 is the winner!");
    }else{
      console.log("Player 2 is the winner!");
    }
}



//clear board/reset function------can I write this in one function and still clear both forms
// const clearForm1 = () => {
//     $("#player1").reset();
//   }
//
// const clearForm2 = () => {
//     $("#player2").reset();
//   }

// on submit of form 1, save answers into an array-------also need hide function for player1's input before formSubmission2 is called
  $( "#player1" ).submit(function( event ) {
    event.preventDefault();
    formSubmission();
  });
// on submit of form 2, compare values
  $( "#player2" ).submit(function( event ) {
    event.preventDefault();
    formSubmission2();
  });

});
