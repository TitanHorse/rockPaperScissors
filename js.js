const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  
    const choice =  options[Math.floor(Math.random() * options.length)];
    return choice;
}
function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
const result = checkWinner(playerSelection, computerSelection);
if(result == "Tie") {
    return "It's a tie";
} else if(result == "Player") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
}
else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}
}
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock, Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}




function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome");
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        } else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        } }
        if(playerScore > computerScore) {
            console.log("You won the game!");
        } else if (computerScore > playerScore) {
            console.log("You lost the game!")
        } else {
            console.log("We have a tie!");
        
    }

}
game();