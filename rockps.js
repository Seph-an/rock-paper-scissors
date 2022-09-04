// const parameter = document.getElementsByClassName("parameter");

//it should be notted that the result from a 'prompt' is always a string.
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
// getComputerChoice();
const computerSelection = getComputerChoice();
// console.log("Computer's choice is", computerSelection);
const playerSelection = "paper";
console.log("Player choice:", playerSelection);
console.log("Computer choice:", computerSelection);

function playRound(p, c) {
  //p represents player's choice while c the computer's choice
  if (p === c) {
    // console.log("It's a tie, do you want to play another round?");
    let val = "It's a tie, do you want to play another round?";
    return val;
  } else {
    if (p == "paper" && c == "rock") {
      //   console.log("You win! Paper covers Rock");
      let val = "You win! Paper covers Rock";
      return val;
    } else if (p == "paper" && c == "scissors") {
      //   console.log("You Lose! Scissors cut Paper");
      let val = "You Lose! Scissors cut Paper";
      return val;
    } else if (p == "rock" && c == "scissors") {
      //   console.log("You Win! Rock crushes Scissors");
      let val = "You Win! Rock crushes Scissors";
      return val;
    } else if (p == "rock" && c == "paper") {
      //   console.log("You Lose! Paper covers Rock");
      let val = "You Lose! Paper covers Rock";
      return val;
    } else if (p == "scissors" && c == "paper") {
      //   console.log("You Win! Scissors cuts Paper");
      let val = "You Win! Scissors cuts Paper";
      return val;
    } else if (p == "scissors" && c == "rock") {
      //   console.log("You Lose! Rock crushes Scissors");
      let val = "You Lose! Rock crushes Scissors";
      return val;
    }
  }
}
const result = playRound(playerSelection, computerSelection);
console.log(result);
