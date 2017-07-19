$(()=> {
console.log("What up?");
$
//this is the array/for loop to choose a random letter from the dice
let rollDie = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const diceRoll = () => {

  for (let i = 0; i <= rollDie.length; i++){
  let die = rollDie[Math.floor(Math.random()* rollDie.length)];
  }
  // console.log(diceRoll(i));
}

// save form 1 answers into an array
const formSubmission = () => {
//   const player1Answers = [];
//   const player1Inputs = $("#player1 input");
//   for (let i=0; i < player1Inputs.length; i++) {
//     console.log(player1Inputs[i]);
//     let answer = player1Inputs.eq(i).val();
//     player1Answers.push(answer);
//   }
//   console.log(player1Answers);


    const player2Answers = [];
    const player2Inputs = $("#player2 input");
    for (let j = 0; j < player2Inputs.length; j++ ){
      console.log(player2Inputs[j]);
      let answer2 = player2Inputs.eq(j).val();
      player2Answers.push(answer2);
    }
    console.log(player2Answers);
  }

// }

//this function will take the inputs from both forms and compare them to ensure they are not the same answer
// const compareValues = () => {
//   console.log('form2 submitted');
//   const player1Answers = [];
//   const player2Answers = [];

    // const str1 = " ";
    // const str2 = " ";
    // const n = str1.localeCompare(str2);
    // let point = 0;
    // document.getElementById("form").innerHTML = n;
    //   return n;
    //
    //   if(n = 1) {
    //     console.log("This answer is not a duplicate.");
    //       point++;
    //   } else {
    //     console.log("This answer is a duplicate. No point given.");
    //   }
// }

// on submit of form 1, save answers into an array
  $( "#player1" ).submit(function( event ) {
    event.preventDefault();
    formSubmission();
  });
// on submit of form 2, compare values
  $( "#player2" ).submit(function( event ) {
    event.preventDefault();
    // compareValues();
    formSubmission();
  });

});
