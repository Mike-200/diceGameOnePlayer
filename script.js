// connect to html id's, classes, etc
const diceImage = document.getElementById("diceImage");
const displayScore = document.getElementById("displayScore");
const rollDiceButton = document.getElementById("rollDiceButton");
const rolls = document.getElementById("rolls");
const minRolls = document.getElementById("minRolls");
const rollTheDiceButton = document.getElementById("rollTheDiceButton");
const rollTheDiceText = document.getElementById("rollTheDiceText");
const targetPoints = document.getElementById("targetPoints");

const pointsToReach = 20;
let score = 0;
let numberOfRolls = 0;
let minimumNumberOfRolls = 10;

targetPoints.textContent = pointsToReach;

// DONE - dice roll function
// DONE - vibrate the dice for a random number of seconds
// DONE - display one of the 6 dice faces
// DONE - check if a 1 has been rolled
// DONE - if so - display You Lose
// DONE - add the dice roll to the score variable

const resetGame = () => {
  score = 0;
  displayScore.textContent = score;
  numberOfRolls = 0;
  rolls.textContent = numberOfRolls;
  diceImage.src = "./images/dice3d.png";
  swapRollButton("Roll");
};

const rollTheDice = () => {
  setTimeout(() => {
    diceImage.style.animation = "none";
    numberOfRolls++;
    rolls.textContent = numberOfRolls;
    // generate a random number 1 to 6
    const diceRoll = Math.ceil(Math.random() * 6);
    diceImage.src = "./images/dice" + diceRoll + ".png";
    // check if a 1 has been rolled
    if (diceRoll === 1) {
      swapRollButton("Play again");
    } else {
      score += diceRoll;
      displayScore.textContent = score;
      if (score > pointsToReach) {
        checkIfRecordSet();
      }
    }
  }, Math.round(Math.random() * 3000) + 1000);
  diceImage.src = "./images/dice3d.png";
  diceImage.style.animation = "jump-shaking 0.83s infinite";
};

const checkIfRecordSet = () => {
  if (numberOfRolls < minimumNumberOfRolls) {
    rollTheDiceText.textContent = "NEW RECORD SET - WELL DONE !";
    minimumNumberOfRolls = numberOfRolls;
    minRolls.textContent = minimumNumberOfRolls;
    setTimeout(() => {
      swapRollButton("Play again");
    }, 3000);
  } else {
    swapRollButton("Play again");
  }
};

const swapRollButton = (buttonFunctionality) => {
  rollDiceButton.textContent = buttonFunctionality;
  if (buttonFunctionality === "Roll") {
    rollTheDiceText.textContent = "Roll the dice";
    rollDiceButton.removeEventListener("click", resetGame);
    rollDiceButton.addEventListener("click", rollTheDice);
  } else if (buttonFunctionality === "Play again") {
    rollTheDiceText.textContent = "GAME OVER !";
    rollDiceButton.removeEventListener("click", rollTheDice);
    rollDiceButton.addEventListener("click", resetGame);
  }
};

// DONE - check for a winner function
// DONE - if score > 20 display Your Win
// DONE - if score <= 20 continue

// DONE - reset game function
// DONE - reset score to zero
// DONE - display the 3d dice ready to play

resetGame();
