let humanScore = 0;
let computerScore = 0;

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
                    console.log("It's a draw!")
                    break;
                case "paper":
                    console.log("You win! Scissors beats paper.");
                    humanScore++;
                    break;
                case "rock":
                    console.log("You lose! Rock beats scissors.");
                    computerScore++;
            }
            break;
        case "rock":
            switch(computerChoice){
                case "rock":
                    console.log("It's a draw!")
                    break;
                case "scissors":
                    console.log("You win! Rock beats scissors.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.");
                    computerScore++;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "paper":
                    console.log("It's a draw!")
                    break;
                case "rock":
                    console.log("You win! Paper beats rock.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.");
                    computerScore++;
            }
            break;
    }
}