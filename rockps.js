const body = document.querySelector("#home");

const header = document.createElement("header");
header.classList.add("header", "flx");

const footer = document.createElement("footer");
footer.classList.add("footer");

const title = document.createElement("h1");
title.classList.add("title", "darkPurple");
title.textContent = "ROCK-PAPER-SCISSORS.";

const ruleContainer = document.createElement("a");
ruleContainer.classList.add("ruleContainer");
ruleContainer.href = "https://en.wikipedia.org/wiki/Rock_paper_scissors";
ruleContainer.target = "_blank";

const rule = document.createElement("div");
rule.classList.add("rule", "flx");

const info = document.createElement("h1");
info.classList.add("info", "darkPurple");
info.textContent = "?";

const infoWords = document.createElement("p");
infoWords.classList.add("infoWords");
infoWords.textContent = "Rules";

const tie = document.createElement("p");
tie.classList.add("tie");
tie.textContent = "Break the tie!";

const container = document.createElement("div");
container.classList.add("container");

const hero = document.createElement("div");
hero.classList.add("hero");

const pageTitle = document.createElement("h1");
pageTitle.classList.add("pageTitle", "darkPurple");
pageTitle.textContent = "Play!!";

const pageParagraph = document.createElement("p");
pageParagraph.classList.add("pageParagraph");
pageParagraph.textContent = "First to score 5 wins!";

const scoresContainer = document.createElement("div");
scoresContainer.classList.add("flx", "scoreContainer");

const player = document.createElement("div");
player.classList.add("scoreArea", "player", "flx");

let playerPick = document.createElement("h2");
playerPick.classList.add("selection");
// playerPick.textContent = "Paper";

const computer = document.createElement("div");
computer.classList.add("scoreArea", "computer", "flx");

let computerPick = document.createElement("h2");
computerPick.classList.add("selection");
// computerPick.textContent = "Rock";

const aside1 = document.createElement("div");
aside1.classList.add("aside", "flx");

const turn = document.createElement("h1");
turn.classList.add("turn", "darkPurple");
turn.textContent = "You";

let playerScore = document.createElement("h1");
playerScore.classList.add("score");
playerScore.textContent = 0;

const wordScore = document.createElement("p");
wordScore.classList.add("wordScore", "darkPurple");
wordScore.textContent = "Score";

const aside2 = document.createElement("div");
aside2.classList.add("aside", "flx");

const compTurn = document.createElement("h1");
compTurn.classList.add("turn", "darkPurple");
compTurn.textContent = "Computer";

let compScore = document.createElement("h1");
compScore.classList.add("score");
compScore.textContent = 0;

const wordScore1 = document.createElement("p");
wordScore1.classList.add("wordScore", "darkPurple");
wordScore1.textContent = "Score";

const playerOptionsContainer = document.createElement("div");
playerOptionsContainer.classList.add("playerOptionsContainer", "flx");

const playerOptions = document.createElement("div");
playerOptions.classList.add("playerOptions", "flx");

const img1 = document.createElement("img");
img1.classList.add("playerSelection");
img1.src = "imgs/rock.png";
img1.alt = "Rock";

const img2 = document.createElement("img");
img2.classList.add("playerSelection");
img2.src = "imgs/paper.png";
img2.alt = "Paper";

const img3 = document.createElement("img");
img3.classList.add("playerSelection");
img3.src = "imgs/scissors.png";
img3.alt = "Scissors";

const playerOptionsTitle = document.createElement("h2");
playerOptionsTitle.classList.add("playerOptionsTitle", "darkPurple");
playerOptionsTitle.textContent = "Select your choice!";

const anotherRound = document.createElement("button");
anotherRound.classList.add("anotherRound", "darkPurple");
anotherRound.innerHTML = "Play Another Round?";

body.appendChild(header);
body.appendChild(container);
// body.appendChild(footer);

header.appendChild(title);
header.appendChild(ruleContainer);
header.appendChild(tie);

ruleContainer.appendChild(rule);

container.appendChild(hero);
container.appendChild(scoresContainer);
container.appendChild(playerOptionsContainer);

rule.appendChild(info);
rule.appendChild(infoWords);

// hero.appendChild(pageTitle);
hero.appendChild(pageParagraph);

scoresContainer.appendChild(player);
scoresContainer.appendChild(computer);

player.appendChild(playerPick);
player.appendChild(aside1);
aside1.appendChild(turn);
aside1.appendChild(playerScore);
aside1.appendChild(wordScore);

computer.appendChild(computerPick);
computer.appendChild(aside2);
aside2.appendChild(compTurn);
aside2.appendChild(compScore);
aside2.appendChild(wordScore1);

playerOptionsContainer.appendChild(playerOptionsTitle);
playerOptionsContainer.appendChild(playerOptions);
playerOptionsContainer.appendChild(anotherRound);

playerOptions.appendChild(img1);
playerOptions.appendChild(img2);
playerOptions.appendChild(img3);

//it should be noted that the result from a 'prompt' is always a string.
// let playerChoice = prompt("Enter either 'rock', 'paper' or 'scissors'.");
function getComputerChoice() {
  //with each func call, 'choice' is initialized with a random No. btwn 1 - 10.
  const choice = Math.floor(Math.random() * 10 + 1);
  if (choice < 4) {
    return "Rock";
  } else if (choice > 7) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let playerPoint = 0;
let compPoint = 0;

function getPlayerSelection() {
  const playerSelection = document.querySelectorAll(".playerSelection");

  [...playerSelection].forEach(function (ele) {
    ele.addEventListener("click", (e) => {
      const p = e.currentTarget.alt;
      // testSelections();
      const c = getComputerChoice();
      playerPick.textContent = p;
      computerPick.textContent = c;

      // console.log("player choice:", p);
      // console.log("comp choice:", c);
      // return selection;
      playRound(p, c); //must be called before below func
      //else, the winner isnt dclared on the fifth point.
      getWinner(playerPoint, compPoint);
    });
  });
}

getPlayerSelection();

function playRound(p, c) {
  // let p = prompt(
  //   "Enter either 'rock', 'paper' or 'scissors'."
  // ).toLocaleLowerCase();
  //p represents player's choice while c the computer's choice
  //3-means a tie, 2-means computer has won, 1-means player has won
  if (playerPoint == 5 || compPoint == 5) {
    // getWinner(playerPoint, compPoint);
    return;
  } else {
    if (p == c) {
      console.log("its a tie");
    } else {
      if (
        (p == "Paper" && c == "Rock") ||
        (p == "Rock" && c == "Scissors") ||
        (p == "Scissors" && c == "Paper")
      ) {
        playerPoint++;
      } else {
        compPoint++;
      }
    }
  }

  playerScore.textContent = playerPoint;
  // console.log("player points:", playerPoint);
  compScore.textContent = compPoint;
  // console.log("computer points", compPoint);
}

// getWinner(playerPoint, compPoint);

function getWinner(playerPoint, compPoint) {
  // console.log("Get winner function");
  if (playerPoint == 5 || compPoint == 5) {
    anotherRound.classList.add("again");
    if (playerPoint > compPoint) {
      // console.log("You are the winner!!!!");
      playerPick.textContent = "Winner!!!";
      playerPick.classList.add("winnerPick"); //add green color to winner
      aside1.classList.add("asideBorder");
      playerScore.classList.add("playScore");
      computerPick.textContent = "";
    } else {
      // console.log("You lose the game!");
      computerPick.textContent = "Winner!!!";
      computerPick.classList.add("winnerPick"); //add green color to winner
      aside2.classList.add("asideBorder");
      compScore.classList.add("playScore");
      playerPick.textContent = "";
    }
  }
}

//button that resets the game by refreshing the page.
const moreRounds = document.querySelector(".anotherRound");
moreRounds.addEventListener("click", () => window.location.reload());

// function game() {
//   const outcome = [];
//   for (var i = 0; i < 5; i++) {
//     const result = playRound();
//     const elmt = i + 1;
//     if (result == 1) {
//       console.log("You win round", elmt);
//     } else if (result == 2) {
//       console.log("You lose round", elmt);
//     } else {
//       console.log("Round" + " " + elmt + " is a tie");
//     }

//     // console.log(result);
//     outcome.push(result);
//   }
//   console.log("the scores are:", outcome);
//   mainWinner(outcome);
// }

// //loop through the array of scores to add up each score
// function mainWinner(scores) {
//   let playerScore = 0;
//   let compScore = 0;
//   let tieScore = 0;
//   for (let i = 0; i < scores.length; i++) {
//     const element = scores[i];
//     if (element == 1) {
//       playerScore += 1;
//     } else if (element == 2) {
//       compScore += 1;
//     } else {
//       tieScore += 1;
//     }
//   }
//   compareOutCome(playerScore, compScore, tieScore);
// }

// //compare the scores of the five round outcome to determine the winner
// function compareOutCome(a, b) {
//   if (a == b) {
//     console.log("It's a tie");
//   } else {
//     if (a > b) {
//       console.log("You are the winner!");
//     } else {
//       console.log("You lost!");
//     }
//   }
// }
// game();
