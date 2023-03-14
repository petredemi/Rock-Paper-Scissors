
function getComputerChoice() { 
    const wordPick = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return wordPick[randomNumber];
}


function playRound(playerSelection, computerSelection){
   
    if (playerSelection === 'rock' & computerSelection === 'paper'){
        return 'You lose!';

    } else if ( playerSelection === 'rock' & computerSelection === 'scissors'){
        return 'You Win!';
    }
    else if ( playerSelection === 'paper' & computerSelection === 'scissors'){
        return 'You lose!';

    } else if (playerSelection === 'paper' & computerSelection ==='rock'){
        return 'You Win!';
    } 
    else if ( playerSelection === 'scissors' & computerSelection === 'rock'){
        return 'You lose!';
    
    } else if ( playerSelection === 'scissors' & computerSelection === 'paper'){
        return 'You Win!';
    } else (playerSelection === computerSelection) 
        return 'Equal!';
}

function whoWin(roundWinner){

    if (roundWinner == 'Equal!'){
        equalRounds += 1;
    }
    else if(roundWinner == 'You Win!'){
        yourScore += 1;
    }else if (roundWinner == 'You lose!'){
        computerScore += 1;
    }
}

let yourScore = 0;
let computerScore = 0;
let equalRounds = 0;

function game(){
for (let i = 1 ; i < 6; i++){
    let player = prompt(`Round: ${i} from 5, Please enter: rock, paper or scissors`);
    const playerSelection = player.toLowerCase();
    const computerSelection = getComputerChoice();
    roundWinner = playRound(playerSelection, computerSelection);

    console.log(`You choose: ${playerSelection}`);
    console.log(`Computer Choose: ${computerSelection}`);
    console.log(i + ' ' + playRound(playerSelection, computerSelection));
    console.log(whoWin(roundWinner));
    }
}
game();
console.log(`You won: ${yourScore} time`);
console.log(`Computer won: ${computerScore} time`);
console.log(`Equal times: ${equalRounds}`);
