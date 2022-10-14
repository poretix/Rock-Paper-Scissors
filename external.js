function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    const randomOptions = options[Math.floor(Math.random() * options.length)];
    console.log(`The computer's choice was: ${randomOptions}`);
    return randomOptions;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        //console.log("You Win! Paper beats Rock!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Win! Paper beats Rock!';
        results.appendChild(roundResult);
        return "player";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        //console.log("You Lose! Scissors beats Paper!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Lose! Scissors beats Paper!';
        results.appendChild(roundResult);
        return "computer";
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        //console.log("It's a tie ");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = "It's a tie!";
        results.appendChild(roundResult);
        return "tie";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        //console.log("You Lose! Paper beats Rock!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Lose! Paper beats Rock!';
        results.appendChild(roundResult);
        return "computer";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        //console.log("You Win! Rock beats Scissors!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Win! Rock beats Scissors!';
        results.appendChild(roundResult);
        return "player";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        //console.log("You Lose! Rock beats Scissors!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Lose! Rock beats Scissors!';
        results.appendChild(roundResult);
        return "computer";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        //console.log("You Win! Scissors beats Paper!");
        const results = document.querySelector('#results');
        results.replaceChildren();
        results.textContent = 'Match Results!';
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = 'You Win! Scissors beats Paper!';
        results.appendChild(roundResult);
        return "player";
    }
    else {
        console.log("Invalid selection by Player.")
    }
}

function game() {
    let player_total = 0;
    let computer_total = 0;
    const scoreboard = document.querySelector('#scoreboard');
    for (let i = 0; i <= 5; i++) {
        //let playerSelection = prompt("Pick an option: Rock, Paper, or Scissors");
        let result = playRound(playerSelection, getComputerChoice());
        if (result === "player") {
            player_total++
            //console.log(`The player has ${player_total} points!`);
            scoreboard.replaceChildren();
            const currentScore = document.createElement('div');
            currentScore.classList.add('score');
            currentScore.textContent = `${player_total} | ${computer_total}`;
            scoreboard.appendChild(currentScore);
        }
        else if (result === "computer") {
            computer_total++
            //console.log(`The computer has ${computer_total} points!`);
            scoreboard.replaceChildren();
            const currentScore = document.createElement('div');
            currentScore.classList.add('score');
            currentScore.textContent = `${player_total} | ${computer_total}`;
            scoreboard.appendChild(currentScore);
        }
        console.log(`${player_total} | ${computer_total}`);
    }
}

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.classList.add('button');
rock.textContent = 'Rock';
container.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('button');
paper.textContent = 'Paper';
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('button');
scissors.textContent = 'Scissors';
container.appendChild(scissors);

const images = document.querySelector('#images');

const rockImg = document.createElement('IMG');
rockImg.classList.add('image');
rockImg.setAttribute("src", "./images/rock.png");
images.appendChild(rockImg);

const paperImg = document.createElement('IMG');
paperImg.classList.add('image');
paperImg.setAttribute("src", "./images/paper.png");
images.appendChild(paperImg);

const scissorsImg = document.createElement('IMG');
scissorsImg.classList.add('image');
scissorsImg.setAttribute("src", "./images/scissors.png");
images.appendChild(scissorsImg);

let player_total = 0;
let computer_total = 0;
const scoreboard = document.querySelector('#scoreboard');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = e.target.textContent;
        if (player_total === 5 || computer_total === 5) {
            
        }
        else {
            let result = playRound(playerSelection, getComputerChoice());
            if (result === "player") {
                player_total++
                scoreboard.replaceChildren();
                const currentScore = document.createElement('div');
                currentScore.classList.add('score');
                currentScore.textContent = `${player_total} | ${computer_total}`;
                scoreboard.appendChild(currentScore);
                if (player_total === 5) {
                    const results = document.querySelector('#results');
                    const roundResult = document.createElement('div');
                    roundResult.classList.add('roundResult');
                    roundResult.textContent = 'Game Over! Congratulations Player!';
                    results.appendChild(roundResult);
                    const rematch = document.querySelector('#rematch');
                    const rematchPrompt = document.createElement('button');
                    rematchPrompt.classList.add('rematch');
                    rematchPrompt.textContent = 'Rematch';
                    rematchPrompt.addEventListener('click', reset);
                    rematch.appendChild(rematchPrompt);
                }
            }
            else if (result === "computer") {
                computer_total++
                scoreboard.replaceChildren();
                const currentScore = document.createElement('div');
                currentScore.classList.add('score');
                currentScore.textContent = `${player_total} | ${computer_total}`;
                scoreboard.appendChild(currentScore);
                if (computer_total === 5) {
                    const results = document.querySelector('#results');
                    const roundResult = document.createElement('div');
                    roundResult.classList.add('roundResult');
                    roundResult.textContent = 'Game Over! The Computer won this time.';
                    results.appendChild(roundResult);
                    const rematch = document.querySelector('#rematch');
                    const rematchPrompt = document.createElement('button');
                    rematchPrompt.classList.add('rematch');
                    rematchPrompt.textContent = 'Rematch';
                    rematchPrompt.addEventListener('click', reset);
                    rematch.appendChild(rematchPrompt)
                }
            }
        }
    
    });
});

function reset() {
    const score = document.querySelector('.score');
    score.textContent = '0 | 0';
    player_total = 0;
    computer_total = 0;
    const rematch = document.querySelector('#rematch');
    rematch.replaceChildren();
    const results = document.querySelector('#results');
    results.replaceChildren();
}


