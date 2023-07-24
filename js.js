function getComputerChoice () {
    return Math.floor(Math.random() *3);
} 
console.log(getComputerChoice());
switch(getComputerChoice()) {
    case 0: 
    getComputerChoice = "rock";
    break;
    case 1: 
    getComputerChoice = "paper";
    break;
    case 2:
        getComputerChoice = "scissors";
        break;
}
console.log(getComputerChoice);

let userInput = prompt("Choose 'rock', 'paper', or 'scissors'");
let playerSelection = userInput.toLowerCase();
