// Start the score off at 0.

let playerScore = 0;
let computerScore = 0;
let round = 0;

// Determine which hand will be thrown by the Player when clicking on an input.

const buttons = document.querySelectorAll("input")

// Determine which hand will be thrown by the CPU.

function computerPlay() {
  const playChoice = ["Rock", "Paper","Scissors"]
  return playChoice[Math.floor(Math.random() * playChoice.length)]
};

// Functions that turn buttons on and off.

function enableButtons() {
  buttons.forEach(elem => {
    elem.disabled = false
  })
};

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true
  })
};

// Function for actual game play and score-keeping.

function playRound(playerSelection) {
  let computerSelection = computerPlay()
  let roundResult = ""

  if (round == 0) {
    alert("Saishowaguu!")
    alert("Jan ...")
    alert("Ken ...")
    alert("Pon!")
  }

  if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
      (playerSelection == "Scissors" && computerSelection == "Paper") || 
      (playerSelection == "Paper" && computerSelection == "Rock")) {
        round += 1
        playerScore += 1
        roundResult = ("Round " + round + ": Player wins! " + playerSelection + " beats " + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    if (playerScore == 5) {
      roundResult += "<br><br>Player wins the game!"
      disableButtons()
      }
    } else if (playerSelection == computerSelection) {
        round += 1
        roundResult = ("Round " + round + ": It\'s a tie. Both Player and Computer chose " + playerSelection +"."
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    } else {
        round += 1
        computerScore += 1
        roundResult = ("Round " + round + ": Computer wins! " + computerSelection + " beats " + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    if (computerScore == 5) {
        roundResult += "<br><br>Computer wins the game!"
        disableButtons()
    }
  }
  document.getElementById("results").style.display = "block"
  document.getElementById("results").innerHTML = roundResult
    return
};

buttons.forEach(button =>{
  button.addEventListener("click", function(){
      playRound(button.value)
  })
});

// Reset the game to play another match against the CPU.

function resetGame() {
  round = 0
  playerScore = 0
  computerScore = 0
  roundResult = ""

  enableButtons()

  document.getElementById("results").style.display = "none"
  document.getElementById("results").innerHTML = roundResult
    return
};
