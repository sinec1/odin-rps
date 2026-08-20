let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.random()*3;
    return choice;
}

function getUserChoice(){
    let choice = prompt("Please choose between rock, paper, or scissors! (no spaces!)");
    choice = choice.toLowerCase();
    switch (choice){
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
    }
    return choice;
}