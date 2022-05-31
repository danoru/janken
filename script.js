// Start the score off at 0.

let playerScore = 0;
let computerScore = 0;


// Determine which hand will be thrown by the player and CPU.

function playerPlay() {
  const playerSelection = document.querySelectorAll("input");
  return playerSelection;
  
};

function computerPlay() {
  const playChoice = ["Rock", "Paper","Scissors"]
  computerSelection = playChoice[Math.floor(Math.random() * playChoice.length)];
  return computerSelection;
};

// Functions for actual game play and score-keeping.

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

// Reset the game to play another match against the CPU.

function resetGame() {
  round = 1;
  playerScore = 0;
  computerScore = 0;
}
