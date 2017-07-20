$(()=> {
// console.log("What up?");

let player1Points = 0;
let player2Points = 0;

//this is the array/for loop to choose a random letter from the dice
let rollDie = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const diceRoll = () => {

  for (let i = 0; i <= rollDie.length; i++){
  let die = rollDie[Math.floor(Math.random()* rollDie.length)];
  }
  // console.log(diceRoll(i));
}
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
}


const formSubmission2 = () => {
    let player2Inputs = $("#player2 input");
    for (let j = 0; j < player2Inputs.length; j++ ){
      // console.log(player2Inputs[j]);
      let answer2 = player2Inputs.eq(j).val();
      player2Answers.push(answer2);
    }
    console.log(player2Answers);
    $('#player2').css('visibility', 'visible');
    compareValues(player1Answers, player2Answers);
}


// this function gives points to each player for their answers
const compareValues = (array1, array2) => {
  console.log(array1, array2);

  for (let i = 0; i < array2.length; i++ ){
    //this if statement compares answers to ensure they are not the same
    if( array1[i] !== " " && array2[i] !== " "){

      if (array1[i].toLowerCase().trim() !== array2[i].toLowerCase().trim()){
        player1Points += 1;
        player2Points += 1;
        console.log("Player 1, you have recieved " + player1Points + " this round.");
        console.log("Player 2, you have recieved " + player2Points + " this round.");
      } else {
        console.log("This answer is a dulicate. No point earned.");
        }
    }
  }

}

//clear board/reset function------can I write this in one function and still clear both forms
const clearForm1 = () => {
    $("#player1").reset();
  }

const clearForm2 = () => {
    $("#player2").reset();
  }

// on submit of form 1, save answers into an array-------also need hide function for player1's input before formSubmission2 is called
  $( "#player1" ).submit(function( event ) {
    event.preventDefault();
    console.log('form 1 submission');
    formSubmission();
  });
// on submit of form 2, compare values
  $( "#player2" ).submit(function( event ) {
    event.preventDefault();
    formSubmission2();
  });

  //this enables player 1 to hide their answers when it is player 2's turn-----making player 2's form disappear
  // $('#player1').css('visibility', 'hidden');
  // $('#player2').css('visibility', 'visible');



});
