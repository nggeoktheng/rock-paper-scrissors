const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
const restart = document.querySelector('.restart');
const restartButton = document.getElementById('restartButton');

let playerChoice;
let computerChoice;

let playerScoreAcc = 0;
let computerScoreAcc = 0;

buttons.forEach(button => button.addEventListener('click', buttonEvent));

function buttonEvent(e) {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    game();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = "Player wins! Rock beats Scissors.";
        playerScoreAcc++;
        playerScore.textContent = playerScoreAcc;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = "Player wins! Paper beats Rock.";
        playerScoreAcc++;
        playerScore.textContent = playerScoreAcc;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = "Player wins! Scissors beats Paper.";
        playerScoreAcc++;
        playerScore.textContent = playerScoreAcc;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent = "Player loses! Scissors loses to Rock.";
        computerScoreAcc++;
        computerScore.textContent = computerScoreAcc;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = "Player loses! Rock loses to Paper.";
        computerScoreAcc++;
        computerScore.textContent = computerScoreAcc;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent = "Player loses! Paper loses to Scissors.";
        computerScoreAcc++;
        computerScore.textContent = computerScoreAcc;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        result.textContent = "It's a tie! Rock matches Rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result.textContent = "It's a tie! Paper matches Paper.";
    } else {
        result.textContent = "It's a tie! Scissors matches Scissors.";
    }
}

function game() {
    playRound(playerChoice, computerChoice);
    
    if (playerScoreAcc === 5 || computerScoreAcc === 5) {
        if (playerScoreAcc > computerScoreAcc) {
            result.textContent = 'Player is the winner!!!';
        } else {
            result.textContent = 'Computer is the winner!!!';
        }
        buttons.forEach(button => button.removeEventListener('click', buttonEvent));
        setTimeout(alertMsg, 50);
    }
}

function alertMsg() {
    restart.style.visibility = 'visible';
    restartButton.addEventListener('click', restartGame);
    buttons.forEach(button => button.addEventListener('click', buttonEvent));
}

function restartGame() {
    restart.style.visibility = 'hidden';
        playerScoreAcc = 0;
        computerScoreAcc = 0;
        playerScore.textContent = playerScoreAcc;
        computerScore.textContent = computerScoreAcc;
        result.textContent = 'Start the game!';
}