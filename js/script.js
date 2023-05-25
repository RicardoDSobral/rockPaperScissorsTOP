
// Global variables
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// DOM Manipulation
// Creates the Placar-container for the score
const scoreContainer = document.createElement('div');
scoreContainer.setAttribute('id', 'score-container');
scoreContainer.setAttribute('class','container' );

// Creates individual elements for the score display and round display
const roundDisplayer = document.createElement('p');
roundDisplayer.setAttribute('id', "round-displayer");
const roundWinnerDisplayer = document.createElement('p');
roundWinnerDisplayer.setAttribute('id', 'round-winner');

// Appends them to the score container
scoreContainer.appendChild(roundDisplayer);
scoreContainer.appendChild(roundWinnerDisplayer);

// Appends to main
const main = document.querySelector('main');
main.appendChild(scoreContainer);

// Add the event listeners to the buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round(button);
    });
})

function round(clickedButton){
    // Runs a single round
    let computerChoice = getComputerChoice();
    let playerChoice = clickedButton.id;
    let roundWinner = roundResult(playerChoice, computerChoice);
    roundDisplayer.textContent = "Round: " + roundNumber;
    roundWinnerDisplayer.textContent = roundWinner;
/*     scoreContainer.textContent = "Round " + roundNumber + "\n" + "Round winner is: " + roundWinner; */
    return roundWinner;
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
    roundNumber++;
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


