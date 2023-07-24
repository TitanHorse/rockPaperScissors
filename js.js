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
let computerSelection = getComputerChoice;
let userInput = prompt("Choose 'rock', 'paper', or 'scissors'");

let playerSelection = userInput.toLowerCase();

if (playerSelection === computerSelection) {
    alert("Tie!");
} else if (playerSelection === "rock") {
    (computerSelection === "scissors") ? console.log("You win!"): console.log("You lose!");
} else if (playerSelection === "scissors") {
    (computerSelection === "paper") ? console.log("You win!") : console.log("You lose!");
} else if (playerSelection === "paper") {
    (computerSelection === "rock") ? console.log("You win!") : console.log("You lose!");
} else {
    console.log("Choose between rock, paper or scissors");
}
