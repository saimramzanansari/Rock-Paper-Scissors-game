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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return;
        }

        const beats = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (beats[humanChoice] === computerChoice) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Game over! You win ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Game over! You lose ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`Game over! It's a tie, ${humanScore} to ${computerScore}.`);
    }
}
playGame();