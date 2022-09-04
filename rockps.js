function getComputerChoice() {
  //varibale choice will be initialized with a random No. btwn 1 - 10.
  const choice = Math.floor(Math.random() * 10 + 1);
  if (choice < 4) {
    console.log("rock");
  } else if (choice > 7) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}
getComputerChoice();
