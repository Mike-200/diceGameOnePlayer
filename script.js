// connect to html id's, classes, etc
const diceImage = document.getElementById("diceImage");
const displayScore = document.getElementById("displayScore");
const rollDiceButton = document.getElementById("rollDiceButton");
const rolls = document.getElementById("rolls");
const minRolls = document.getElementById("minRolls");

let score = 0;
let numberOfRolls = 0;
let minimumNumberOfRolls = 10;
// let diceRoll = 0;

// dice roll function
// vibrate the dice for a random number of seconds
// DONE - display one of the 6 dice faces
// DONE - check if a 1 has been rolled
// if so - display You Lose
// add the dice roll to the score variable

const resetGame = () => {
  score = 0;
  displayScore.textContent = score;
  numberOfRolls = 0;
  rolls.textContent = numberOfRolls;
  diceImage.src = "./images/dice6.png";
  diceImage.style.width = "50%";
  rollDiceButton.textContent = "Roll";
  rollDiceButton.addEventListener("click", rollTheDice);
};

const rollTheDice = () => {
  numberOfRolls++;
  rolls.textContent = numberOfRolls;
  // generate a random number 1 to 6
  const diceRoll = Math.ceil(Math.random() * 6);
  diceImage.src = "./images/dice" + diceRoll + ".png";
  diceImage.style.width = "50%";
  // check if a 1 has been rolled
  if (diceRoll === 1) {
    rollDiceButton.textContent = "Play again";
    rollDiceButton.addEventListener("click", resetGame);
  } else {
    score += diceRoll;
    displayScore.textContent = score;
    if (score > 20) {
      checkIfRecordSet();
      rollDiceButton.textContent = "Play again";
      rollDiceButton.addEventListener("click", resetGame);
    }
  }
};

const checkIfRecordSet = () => {
  if (numberOfRolls < minimumNumberOfRolls) {
    minimumNumberOfRolls = numberOfRolls;
    minRolls.textContent = minimumNumberOfRolls;
  }
};

// check for a winner function
// if score > 20 display Your Win
// if score <= 20 continue

// reset game function
// reset score to zero
// display the 3d dice ready to play

resetGame();
