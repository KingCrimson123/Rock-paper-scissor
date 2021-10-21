let computerChoice;
function computerPlay() {
    computerChoice = Math.random()*10;
    if (computerChoice <= 3.333333) {
        return ('Paper');
    } else if (computerChoice <= 6.666666) {
        return ("Scissor");
    }
    else {
        return ('Rock');
    }
}
let roundsWon = 0;
let roundsLost = 0;
let totalDraws = 0;
function playGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" 
    || playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissor"
    || playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper") {
        if (playerSelection.toLowerCase() == "paper") {
            console.log("You win! Paper beats rock!");
        } else if (playerSelection.toLowerCase() == "rock") {
            console.log("You win! Rock beats scissor");
        } else {
            console.log("You win! Scissor beats paper!");
        }
        roundsWon++;
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissor" 
    || playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"
    || playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "rock") {
        if (playerSelection.toLowerCase() == "paper") {
            console.log("You lose! Scissor beats paper!");
        } else if (playerSelection.toLowerCase() == "rock") {
            console.log("You lose! Paper beats rock!");
        } else {
            console.log("You lose! Rock beats scissor!");
        }
        roundsLost++;
    }
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(`Draw! ${playerSelection} equals ${computerSelection}`);
        totalDraws++;
    }
}
const computerSelection = computerPlay;
function game(roundNumber) {
    let playerSelection;
    for(let i=1; i<=roundNumber; i++) {
        playerSelection = prompt("What is your choice?");
        playGame(playerSelection, computerSelection()); 
    }
    if (roundsWon > roundsLost) {
        console.log(`Total win: ${roundsWon}.
Total lose: ${roundsLost}.
Total draws: ${totalDraws}.
You won!`);
    } else if (roundsWon == roundsLost) {
        console.log(`Total win: ${roundsWon}.
Total lose: ${roundsLost}.
Total draws: ${totalDraws}.
It's a draw!`);
    } else {
        console.log(`Total win: ${roundsWon}.
Total lose: ${roundsLost}.
Total draws: ${totalDraws}.
You lost!`);
    }
}
game(5);

