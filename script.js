function getComputerChoice(){
    let choice = Math.random()*3;
    choice = Math.floor(choice);
        switch (choice){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getUserChoice(){
    let choice = prompt("Please choose between rock, paper, or scissors! (no spaces!)");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
        switch (humanChoice) {
            case "scissors":
                switch(computerChoice){
                    case "scissors":
                        roundResult.textContent = "It's a draw!";
                        break;
                    case "paper":
                        roundResult.textContent = "You win! Scissors beats paper.";
                        humanScore++;
                        break;
                    case "rock":
                        roundResult.textContent = "You lose! Rock beats scissors.";
                        computerScore++;
                }
                break;
            case "rock":
                switch(computerChoice){
                    case "rock":
                        roundResult.textContent = "It's a draw!";
                        break;
                    case "scissors":
                        roundResult.textContent = "You win! Rock beats scissors.";
                        humanScore++;
                        break;
                    case "paper":
                        roundResult.textContent = "You lose! Paper beats rock.";
                        computerScore++;
                }
                break;
            case "paper":
                switch(computerChoice){
                    case "paper":
                        roundResult.textContent = "It's a draw!";
                        break;
                    case "rock":
                        roundResult.textContent = "You win! Paper beats rock.";
                        humanScore++;
                        break;
                    case "scissors":
                        roundResult.textContent = "You lose! Scissors beats paper.";
                        computerScore++;
                }
                break;
        }
        hScore.textContent = `Human Score: ${humanScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
    }

const container = document.getElementById("container")
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("Scores");

const hScore = document.createElement("div");
hScore.textContent = `Human Score: ${humanScore}`;

const cScore = document.createElement("div");
cScore.textContent = `Computer Score: ${computerScore}`;

const roundResult = document.createElement("div");
roundResult.textContent = `No games played!`;


scoreContainer.appendChild(hScore);
scoreContainer.appendChild(cScore);
container.appendChild(scoreContainer);
container.appendChild(roundResult);


container.addEventListener('click', (e) => {
    let target = e.target;

    switch (target.id){
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }  
});

