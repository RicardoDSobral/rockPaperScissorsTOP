let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

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
    scoreContainer.textContent = "Round " + roundNumber;
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
            return "Computer";
        }
        
        else if (computerChoice === "scissor"){
                playerScore++;
                return "Player";
            }
        
        else{
            return "Tie";
        }
    }
    else if(playerChoice === "paper"){
        if (computerChoice === "scissor"){
            computerScore++;
            return "Computer";
        }
        else if (computerChoice === "rock"){
            playerScore++;
            return "Player";
        }
        else{
            return "Tie";
        }
    }
    else {
        if(computerChoice === "rock"){
            computerScore++;
            return "Computer";
        }
        else if(computerChoice === "paper"){
            playerScore++;
            return "Player";
        }
        else{
            return "Tie";
        }
    }
}

const main = document.querySelector('main');
const scoreContainer = document.createElement('div');
scoreContainer.setAttribute('id', 'score-container');
scoreContainer.setAttribute('class','container' );
main.appendChild(scoreContainer);
