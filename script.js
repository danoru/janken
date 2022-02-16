const playChoice = [
  "Rock",
  "Paper",
  "Scissors"
]

function playerPlay() {
  let playerSelection = alert("What hand will you play?")
  console.log(playerSelection);
}

function computerPlay() {
  let computerSelection = playChoice[Math.floor(Math.random() * playChoice.length)];
  console.log(computerSelection);
}

function playRound(playerSelection, computerSelection) {
  playerPlay();
  computerPlay();
  return("You chose " + playerPlay + " and the computer chose " + computerPlay + ".";
}

function game() {
// Not sure what this does yet.
}

