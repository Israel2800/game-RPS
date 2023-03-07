// Let's start creating the random choices for the computer

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * options.length);

    return options[index];
};


// Function for the players, need to add parameters
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
        window.alert(result);
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
    window.alert(`Final scores:\nYou: ${playerScore}\nComputer: ${computerScore}\n${winner}`)
    return menu(`Would you like to play again?\nType y is Yes\nType n if No`);
}

let menu = (text) => {
    let input = prompt(text);
    switch (input) {
        case "y":
            game();
            break;
        case "n":
            alert("Thanks for playing!");
            break;
        default:
            menu(text);
            break;
    }
}

game();