const playChoice = ["Rock", "Paper","Scissors"]
let computerSelection;
let playerSelection;

// Start the score off at 0.

let playerScore = 0;
let computerScore = 0;


function playerPlay() {
  playerSelection = prompt("What hand will you play?")
  return playerSelection;
  
};

function computerPlay() {
  computerSelection = playChoice[Math.floor(Math.random() * playChoice.length)];
  return computerSelection;
};

function playRound() {
  computerPlay();
  playerPlay();
  
  if (playerSelection == computerSelection) {
      alert("It's a draw!");
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
      alert("Computer wins!");
      computerScore+=1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      alert("Player wins!");
      playerScore+=1;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      alert("Computer wins!");
      computerScore+=1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      alert("Player wins!");
      playerScore+=1;  
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      alert("Computer wins!");
      computerScore+=1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      alert("Player wins!");
      playerScore+=1;
  };
};

function game() {
  for (let round = 1; round < 6; round++) {
    playRound();
    console.log("You chose " + playerSelection + ". Player Score: " + playerScore)
    console.log("You chose " + computerSelection + ". Computer Score: " + computerScore)
    console.log(round);
  }

  if (playerScore === computerScore) {
    console.log("It's a draw!");
  } else if (playerScore > computerScore) {
    console.log("You win!");
  } else if (computerScore < playerScore) {
    console.log("You lose!");
  }
};
