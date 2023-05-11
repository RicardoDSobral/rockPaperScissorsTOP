
game();
// Game
    // Get computer choice
    // Prompt the user for user choice
    // Runs a round
    // Prompt user if wants to go another round
        // if yes, rerun game
    // End program
// Funtion protoypes: 

// Get Computer choice by a algorithm thar returns a random number
function game(){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        round(playerChoice, computerChoice);
    }

function getComputerChoice(){
    // Using a 
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

// Run a round of the game using both choices as input
function round(playerChoice, computerChoice) {
    console.log(computerChoice)
    if (playerChoice === "rock")
    if(computerChoice === "paper"){
        return console.log("Computer wins!");
    }
    
    else if (computerChoice === "scissor"){
            return console.log("You win!");
        }
        
        else{
            return console.log("It is a tie!");
        }
        else if(playerChoice === "paper"){
            if (computerChoice === "scissor"){
                return console.log("Computer wins!");
            }
            else if (computerChoice === "rock"){
                return console.log("You win!");
        }
        else{
            return console.log("It is a tie!");
        }
    }
    else {
        if(computerChoice === "rock"){
            return console.log("Computer wins!");
        }
        else if(computerChoice === "paper"){
            return console.log("You win!");
        }
        else{
            return console.log("It is a tie!");
        }
    }
}