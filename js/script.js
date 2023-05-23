let playerScore = 0;
let computerScore = 0;
game();

function game(){
    // Function to run the entire game - 5 rounds
    for (let i = 1; i <= 5; i++){
        console.log("Round " + i.toString() + ":" + round());
    }
    // Display the winner
    console.log("the final score is: Player: " + playerScore.toString() + " Computer: " + computerScore.toString())
    let winner = playerScore > computerScore? "Player!" : "Computer!";
    console.log("The winner is: " + winner);
}

function round(){
    // Runs a single round
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    return roundResult(playerChoice, computerChoice);
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

// Prompt for the player choice
function getPlayerChoice() {
    let playerChoice;
    while (true){
        playerChoice = prompt("Chose rock, paper o scissor!");
        let lowerCaseChoice = playerChoice.toLowerCase();
        if (lowerCaseChoice === "rock" || lowerCaseChoice === "paper" || lowerCaseChoice === "scissor"){
            return lowerCaseChoice;
        }
    }
}

// Run the results of round of the game using both choices as input
function roundResult(playerChoice, computerChoice) {
    if (playerChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            return "Computer wins!";
        }
        
        else if (computerChoice === "scissor"){
                playerScore++;
                return "Player wins!";
            }
        
        else{
            return "Round is a tie!";
        }
    }
    else if(playerChoice === "paper"){
        if (computerChoice === "scissor"){
            computerScore++;
            return "Computer wins!";
        }
        else if (computerChoice === "rock"){
            playerScore++;
            return "Player wins!";
        }
        else{
            return "Round is a tie!";
        }
    }
    else {
        if(computerChoice === "rock"){
            computerScore++;
            return "Computer wins!";
        }
        else if(computerChoice === "paper"){
            playerScore++;
            return "Player wins!";
        }
        else{
            return "Round is a tie!";
        }
    }
}