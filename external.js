function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    const randomOptions = options[Math.floor(Math.random() * options.length)];
    console.log(randomOptions);
    return randomOptions;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        console.log("You Win! Paper beats Rock!");
        return "player";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        console.log("You Lose! Scissors beats Paper!");
        return "computer";
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a tie ");
        return "tie";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        console.log("You Lose! Paper beats Rock!");
        return "computer";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        console.log("You Win! Rock beats Scissors!");
        return "player";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        console.log("You Lose! Rock beats Scissors!");
        return "computer";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        console.log("You Win! Scissors beats Paper!");
        return "player";
    }
    else {
        console.log("Invalid selection by Player.")
    }
}

function game() {
    let player_total = 0;
    let computer_total = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick an option: Rock, Paper, or Scissors");
        let result = playRound(playerSelection, getComputerChoice());
        if (result === "player") {
            player_total++
            console.log(`The player has ${player_total} points!`);
        }
        else if (result === "computer") {
            computer_total++
            console.log(`The computer has ${computer_total} points!`);
        }
    }
}

console.log(game());