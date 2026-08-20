function getComputerChoice(){
    let choice = Math.random()*3;
    return choice;
}

function getUserChoice(){
    let choice = prompt("Please choose between rock, paper, or scissors! (lowercase no spaces!)");
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