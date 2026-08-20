let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.random()*3;
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

}