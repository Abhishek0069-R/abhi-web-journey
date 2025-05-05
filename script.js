const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

function playGame(playerSelection) {
  const computerSelection = choices[Math.floor(Math.random() * 3)];

  playerChoice.textContent = `You chose: ${playerSelection}`;
  computerChoice.textContent = `Computer chose: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    resultText.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultText.textContent = "You win!";
  } else {
    resultText.textContent = "You lose!";
  }
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
