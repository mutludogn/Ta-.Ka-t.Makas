const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const winner = document.getElementById('winner');
const winnerText = document.getElementById('winner-text');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
playerChoice.addEventListener('click', (e) => {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
   
  updateChoices(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    winnerText.textContent = 'Berabere!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    winnerText.textContent = 'Bilgisayar kazandı!';
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winnerText.textContent = 'Sen kazandın!';
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winnerText.textContent = 'Sen kazandın!';
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winnerText.textContent = 'Bilgisayar kazandı!';
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winnerText.textContent = 'Bilgisayar kazandı!';
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winnerText.textContent = 'Sen kazandın!';
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  }
});
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function updateChoices(playerSelection, computerSelection) {
  const playerChoiceElement = document.getElementById(playerSelection);
  const computerChoiceElement = document.getElementById(computerSelection);
  playerChoiceElement.classList.add('selected');
  computerChoiceElement.classList.add('selected');
}
