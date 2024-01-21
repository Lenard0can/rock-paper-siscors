function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoices = ["Rock", "Paper", "Scissors"]; 
    return computerChoices[randomNumber];
}

let computerChoice = getComputerChoice();
console.log(computerChoice);