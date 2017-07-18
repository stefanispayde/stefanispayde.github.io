let money;
let choices;
let totalMoney;
let choice;

const start = () => {
 totalMoney = 0;
  teeth();
}

const showMoney = () => {
  alert("You have $ " + totalMoney + " so far.");
}

const teeth = () => {
  showMoney();
  const choice = prompt("Congrats on your new landscaping venture! It's going to take grit and you can make $1 a yard. Ready to work for what you want? Y / N?");
    if(choice === "Y" || choice === "y") {
      const lawnsMowed = prompt("It's only $1, but you can mow as many lawns as you want. How many yards are you going to complete?");
      totalMoney = lawnsMowed * 1;
      showMoney();
    }else if ( choice === "N" || choice ==="n") {
      alert("Best of luck then!");
      start();
    }
}
const scissors = () => {
  if (totalMoney >= 5){
  const choice = prompt("You have the option to upgrade to a pair of rusty scissors for $5. Would you like to purchase? Y / N / restart");
    if (choice === "Y" || choice === "y") {
      totalMoney = totalMoney - 5;
      showMoney();
    }  const lawnsCut = prompt("You can cut as many laws as you'd like for $5 a piece. How many can you knock out today?");
          totalMoney = (lawnsCut * 5) + totalMoney;
          showMoney();

    else if (choice === "N" || choice === "n") {
      alert("Ok then. Enjoy cutting the grass with your teeth.");
      return totalMoney;
    }else if (choice === "restart") {
      start();
     }
  }
}
//telling me that choice is out of scope, defined in main function so not sure how to fix
const pushMower = () => {
  showMoney();
  if (totalMoney >= 25) {
  const choice = prompt("You're moving up in the world! You now have the option to purchase an old-timey push lawn mower for $25. Would you like to buy it? Y/ N/ restart");
    if(choice === "Y" || choice === "y") {
      totalMoney = totalMoney - 25;
      const lawnsPushed = prompt("You can use that push mower to make $50 a yard. What do you say?");
        totalMoney = (lawnsPushed * 50) + totalMoney;
        showMoney();
    }
  } else if (choice === "N" || choice === "n"){
    alert("Enjoy your hard earned money!");
      return totalMoney;
    } else if(choice === "restart"){
        start();
  }
}

const batteryMower = () => {
  showMoney();
  if(totalMoney >= 250) {
    const choice = prompt("Whew, that push mower is heavy! How about buyig a nicer battery powered one for $250? Y/ N/ restart");
      if (choice === "Y" || choice === "y") {
        totalMoney = totalMoney - 250;
          const fancyMower = prompt("Now you can earn $100 a lawn with your new battery operated mower! How many are we doing today?");
            totalMoney = (fancyMower * 100) + totalMoney;
            showMoney();
      }
  }   else if (choice === "N" || choice === "n"){
        alert("Enjoy your hard earned money!");
        return totalMoney;
      } else if (choice === "restart"){
        start();
  }
}

const students = () => {
  showMoney();
  if (totalMoney >= 500){
    const choice = prompt("Time to sit back and hire people to work for you. I know where you can hire a group of students for $500. Want to manage today instead of sweating? Y/ N / restart");
    if (choice === "Y" || choice === "y"){
        totalMoney = totalMoney - 500;
        const studentsMow = prompt("How many yards is this team going to knock out today? You'll make $250 a yard.");
        totalMoney = s(tudentsMow * 250) + totalMoney;
        showMoney();
        if (totalMoney >= 1000){
          winGame();
        }
    }
  } else if (choice === "N" || choice === "n"){
      alert("Enjoy your hard earned money!");
        return totalMoney;
    } else if (choice === "restart"){
      start();
      }
}
  const winGame = () => {
    alert("Congrats!  You've just earned baller status with a team of students working for you and $1000+ in your pocket. You win!");
    start();
  }

start();
scissors();
pushMower();
batteryMower();
students();
winGame();
