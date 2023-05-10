
// Get Computer choice by a algorithm thar returns a random number
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
// Assign it to a variable
let computerChoice = getComputerChoice();

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

// Assign the player choice to a variable
let playerChoice = getPlayerChoice();

// Run a round of the game using both choices as input
function round(playerChoice, computerChoice) {
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

    }
}
// Return the Result
// Reset to start another round