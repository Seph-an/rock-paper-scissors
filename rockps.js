// const parameter = document.getElementsByClassName("parameter");

//it should be noted that the result from a 'prompt' is always a string.
// let playerChoice = prompt("Enter either 'rock', 'paper' or 'scissors'.");
function getComputerChoice() {
  //with each func call, 'choice' is initialized with a random No. btwn 1 - 10.
  const choice = Math.floor(Math.random() * 10 + 1);
  //   let para = "";
  if (choice < 4) {
    // para += "rock";
    return "rock";
  } else if (choice > 7) {
    // para += "paper";
    return "paper";
  } else {
    // para += "scissors";
    return "scissors";
  }
  //   return para;
}

function playRound() {
  let c = getComputerChoice();
  let p = prompt(
    "Enter either 'rock', 'paper' or 'scissors'."
  ).toLocaleLowerCase();
  //p represents player's choice while c the computer's choice
  //3-means a tie, 2-means computer has won, 1-means player has won
  if (p === c) {
    let val = 3;
    return val;
  } else {
    if (
      (p == "paper" && c == "rock") ||
      (p == "rock" && c == "scissors") ||
      (p == "scissors" && c == "paper")
    ) {
      let val = 1;
      return val;
    } else {
      let val = 2;
      return val;
    }
  }
}

function game() {
  const outcome = [];
  for (var i = 0; i < 5; i++) {
    const result = playRound();
    const elmt = i + 1;
    if (result == 1) {
      console.log("You win round", elmt);
    } else if (result == 2) {
      console.log("You lose round", elmt);
    } else {
      console.log("Round" + " " + elmt + " is a tie");
    }
    // console.log(result);
    outcome.push(result);
  }
  console.log("the scores are:", outcome);
  mainWinner(outcome);
}

//loop through the array of scores to add up each score
function mainWinner(scores) {
  let playerScore = 0;
  let compScore = 0;
  let tieScore = 0;
  for (let i = 0; i < scores.length; i++) {
    const element = scores[i];
    if (element == 1) {
      playerScore += 1;
    } else if (element == 2) {
      compScore += 1;
    } else {
      tieScore += 1;
    }
  }
  compareOutCome(playerScore, compScore, tieScore);
}

//compare the scores of the five round outcome to determine the winner
function compareOutCome(a, b) {
  if (a == b) {
    console.log("It's a tie");
  } else {
    if (a > b) {
      console.log("You are the winner!");
    } else {
      console.log("You lost!");
    }
  }
}
game();
