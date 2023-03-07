// Let's start

// Firs Assignment
// Write a JavaScript program to find the diagonal of a square where the length of each
// side is 9.
function result(side=9, division=2){
    let diagonal = side*4/division; 
    window.alert(diagonal);    
}

result();


function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * options.length);

    return options[index];
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    // Starts the game for the player
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if(result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        console.log(result);
    }

    // Determine winner
    let winner;
    if(playerScore === computerScore) {
        winner = "It's a tie!";
    } else if (playerScore > computerScore) {
        winner = "You are the winner!"
    } else {
        winner = "You lose!";
    }

    // Display results
    console.log(`Final scores:\nYou: ${playerScore}\nComputer: ${computerScore}\n${winner}`)

}

game();