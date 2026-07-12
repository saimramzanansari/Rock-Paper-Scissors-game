function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
let humanScore = 0;
let computerScore =0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose ${humanChoice}.");
        return;
    }
    
    const beats={
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if(beats[humanChoice] === computerChoice) {
        console.log("You win! ${humanChoice} beats ${computerChoice}.");
        humanScore++;
    } else {
        console.log("You lose! ${computerChoice} beats ${humanChoice}.");
        computerScore++;
    }

}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);