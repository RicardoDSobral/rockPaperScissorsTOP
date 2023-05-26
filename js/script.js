
// Global variables
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// DOM Manipulation
// Creates the round-score-container
const roundScoreContainer = document.createElement('div');
roundScoreContainer.setAttribute('id', 'score-container');
roundScoreContainer.setAttribute('class','container' );

// Creates individual elements for the round winner display and round display
const roundDisplayer = document.createElement('p');
roundDisplayer.setAttribute('id', "round-displayer");
const roundWinnerDisplayer = document.createElement('p');
roundWinnerDisplayer.setAttribute('id', 'round-winner');

// Appends them to the score container
roundScoreContainer.appendChild(roundDisplayer);
roundScoreContainer.appendChild(roundWinnerDisplayer);

// Creates the game scoreboard
const scoreBoard = document.createElement('div');
scoreBoard.setAttribute("id", "score-board");
scoreBoard.setAttribute('class', 'container');

// Creates the player scoreboard and the computer scoreboard
const playerScoreBoard = document.createElement("p");
playerScoreBoard.setAttribute('id', "player-scoreboard");
const computerScoreBoard = document.createElement('p');
computerScoreBoard.setAttribute('id', 'computer-score');

// Apends to the game scoreboard
scoreBoard.appendChild(playerScoreBoard);
scoreBoard.appendChild(computerScoreBoard);

// Appends to main
const main = document.querySelector('main');
main.appendChild(roundScoreContainer);
main.appendChild(scoreBoard);

// Add the event listeners to the buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round(button);
    });
})

function round(clickedButton){
    // Runs a single round
    roundNumber++;
    // Checks if the game has ended
    if (roundNumber > 5){
        return checkWinner();
    }
    let computerChoice = getComputerChoice();
    let playerChoice = clickedButton.id;
    let roundWinner = roundResult(playerChoice, computerChoice);
    roundDisplayer.textContent = "Round: " + roundNumber;
    roundWinnerDisplayer.textContent = roundWinner;
    playerScoreBoard.textContent = "You: " + playerScore;
    computerScoreBoard.textContent = "Computer: " + computerScore;

    // After the first game, should remove style to return this elements only after they are updated to avoid bugs
    roundScoreContainer.removeAttribute('style');
    scoreBoard.removeAttribute('style');
    return;
}

// Get Computer choice by a algorithm that returns a random number
function getComputerChoice(){
    // Using pseudo random numbers
    let randomNumber = Math.floor(Math.random() * 300);
    let computerChoice = randomNumber % 3;
    switch (computerChoice){
        case 0:{
            return "rock";
        }
        case 1:{
            return "paper";
        }
        case 2:{
            return "scissor";
        }
    }
}



// Run the results of round of the game using both choices as input
function roundResult(playerChoice, computerChoice) {
    if (playerChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            return "Computer wins the Round!";
        }
        
        else if (computerChoice === "scissor"){
                playerScore++;
                return "Player wins the Round!";
            }
        
        else{
            return "The round is a tie";
        }
    }
    else if(playerChoice === "paper"){
        if (computerChoice === "scissor"){
            computerScore++;
            return "Computer wins the Round!";
        }
        else if (computerChoice === "rock"){
            playerScore++;
            return "Player wins the Round!";
        }
        else{
            return "The round is a tie";
        }
    }
    else {
        if(computerChoice === "rock"){
            computerScore++;
            return "Computer wins the Round!";
        }
        else if(computerChoice === "paper"){
            playerScore++;
            return "Player wins the Round!";
        }
        else{
            return "The round is a tie";
        }
    }
}

function checkWinner(){
    // Removes the scoreboards
    roundScoreContainer.setAttribute('style', 'display: none');
    scoreBoard.setAttribute('style', 'display: none');

    // Create the element to display the result
    const result = document.createElement('h2');
    result.setAttribute('id', "result");
    main.appendChild(result);
    resetTheGame();

    // Calculates the result
    if (playerScore > computerScore){
       result.textContent = "You Win!";
       return;
    }
    else{
        result.textContent = "You lose!";
        return;
    }
}

function resetTheGame(){

    // Hides the original buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {button.setAttribute('style', 'display: none')});

    // Creates the reset button
    const buttonsContainer = document.querySelector('#button-container');
    const resetButton = document.createElement('button');
    resetButton.setAttribute('class', 'btn');
    resetButton.textContent = "Play again";
    buttonsContainer.appendChild(resetButton);

    // Reset the game parameters on click
    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0;
        resetButton.remove();
        buttons.forEach((button) => {button.removeAttribute('style')});
        result.remove();
    })
}
