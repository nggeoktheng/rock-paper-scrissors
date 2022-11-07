

// computer choice is randomly selected
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// plays a single round then return the winner of the round
// need to make the playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = "Player wins! Rock beats Scissors.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = "Player wins! Paper beats Rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = "Player wins! Scissors beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = "Player lose! Paper loses to Scissors.";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = "Player lose! Rock loses to Paper.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = "Player lose! Scissors loses to Rock.";
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        result = "It's a tie! Rock matches Rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = "It's a tie! Paper matches Paper.";
    } else {
        result = "It's a tie! Scissors matches Scissors.";
    }
    return result;
}

const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Please enter your choice");
        const playerSelection = userInput;
        let score = `${playerScore}:${computerScore}`;
  
        if (playRound(playerSelection, computerSelection) === "Player wins! Rock beats Scissors." || playRound(playerSelection, computerSelection) === "Player wins! Paper beats Rock." || playRound(playerSelection, computerSelection) === "Player wins! Scissors beats Paper.") {
            playerScore++;
            score = `${playerScore}:${computerScore}`;
        } else if (playRound(playerSelection, computerSelection) === "Player lose! Paper loses to Scissors." || playRound(playerSelection, computerSelection) === "Player lose! Rock loses to Paper." || playRound(playerSelection, computerSelection) === "Player lose! Scissors loses to Rock.") {
            computerScore++;
            score = `${playerScore}:${computerScore}`;
        }
    }
    return `${playerScore}:${computerScore}. ` + winner(playerScore, computerScore);
}

function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Player is the winner!!!";
    } else {
        return "Computer is the winner!!!";
    }
}