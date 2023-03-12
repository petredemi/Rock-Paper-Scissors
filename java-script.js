
function getComputerChoice() { 
    const wordPick = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return wordPick[randomNumber];
}
getComputerChoice();

function playRound(playerSelection, computerSelection){
   
    if (playerSelection === 'rock' & computerSelection === 'paper'){
        return 'You lose, Paper beats Rock';

    } else if ( playerSelection === 'rock' & computerSelection === 'scissors'){
        return 'You Win! Rock beat Scissor';
    }
    else if ( playerSelection === 'paper' & computerSelection === 'scissors'){
        return 'You lose, Scissors beat paper';

    } else if (playerSelection === 'paper' & computerSelection ==='rock'){
        return 'You Win! Paper beat Rock';
    } 
    else if ( playerSelection === 'scissors' & computerSelection === 'rock'){
        return 'You lose, Rock beat scissors';
    
    } else if ( playerSelection === 'scissors' & computerSelection === 'paper'){
        return 'You Win! Scissor beat Paper';
    } else (playerSelection === computerSelection) 
        return "You are equal, play again";
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log('Computer: ' + computerSelection);
console.log('You: ' + playerSelection);

console.log(playRound(playerSelection, computerSelection ));

function game() {
    playRound(){
        
    }
}

