// connect to html id's, classes, etc
const diceImage = document.getElementById("diceImage");
const displayScore = document.getElementById("displayScore");
const rollDiceButton = document.getElementById("rollDiceButton");

let score = 0;
let diceRoll = 0;

// dice roll function
// vibrate the dice for a random number of seconds
// DONE - display one of the 6 dice faces
// DONE - check if a 1 has been rolled
// if so - display You Lose
// add the dice roll to the score variable

const resetGame = () => {
  score = 0;
  displayScore.textContent = score;
  diceImage.src = "./images/dice3d.png";
  diceImage.style.width = "70%";
};

const rollTheDice = () => {
  // generate a random number 1 to 6
  diceRoll = Math.ceil(Math.random() * 6);
  diceImage.src = "./images/dice" + diceRoll + ".png";
  diceImage.style.width = "50%";
  // check if a 1 has been rolled
  if (diceRoll === 1) {
    console.log("You Lose");
    resetGame();
  } else {
    score += diceRoll;
    displayScore.textContent = score;
    if (!checkForWinner()) {
      console.log("Roll again");
    }
  }
};

rollDiceButton.addEventListener("click", rollTheDice);

// check for a winner function
// if score > 20 display Your Win
// if score <= 20 continue

const checkForWinner = () => {
  if (score > 20) {
    console.log("You Win");
    resetGame();
    return true;
  } else {
    return false;
  }
};

// reset game function
// reset score to zero
// display the 3d dice ready to play

resetGame();
