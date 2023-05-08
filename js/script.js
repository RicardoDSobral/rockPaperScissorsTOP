
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
