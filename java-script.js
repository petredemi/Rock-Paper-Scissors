
function getComputerChoice() { 
    const wordPick = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return wordPick[randomNumber];
}
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Equal!';
        
    }else if (playerSelection == 'rock' & computerSelection == 'paper'){
        return 'You lose!';

    } else if ( playerSelection == 'rock' & computerSelection == 'scissors'){
        return 'You Win!';

    }else if ( playerSelection == 'paper' & computerSelection == 'scissors'){
        return 'You lose!';

    } else if (playerSelection == 'paper' & computerSelection =='rock'){
        return 'You Win!';

    }else if ( playerSelection == 'scissors' & computerSelection == 'rock'){
        return 'You lose!';
    
    } else if ( playerSelection == 'scissors' & computerSelection == 'paper'){
        return 'You Win!';
     }/*else if( playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors'){
        return 'wrong input';
      }*/ 
}




let yourScore = 0;
let computerScore = 0;
let equalRounds = 0;
//let wrongTries = 0;

function scoreTable(roundWinner){

    if (roundWinner == 'Equal!'){
        equalRounds += 1;
    }else if(roundWinner == 'You Win!'){
        yourScore += 1;
    }else if (roundWinner == 'You lose!'){
       computerScore += 1;
    } /*else if( roundWinner == 'wrong input')
        wrongTries += 1;
}*/
}

function game(){
    
    outer: for (i = 1 ; i < 6; i++){
        let player = prompt(`Round: ${i} from 5, Please enter: rock, paper or scissors`, '');
        if(!player) break outer;

        playerSelection = player.toLowerCase();
        const computerSelection = getComputerChoice();
        roundWinner = playRound(playerSelection, computerSelection);

       if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
            playerSelection;
        }else { 
                let j = 1;
                do {
                    let tryAgain = prompt(`${j}.Tries, Your input is wrong. Chose: rock, paper or scissors`, '');  
                    if (!tryAgain) break outer;
                    playerSelection = tryAgain.toLowerCase();
                    roundWinner = playRound(playerSelection, computerSelection);
                    console.log(`${j}.Tries, your input is: ${playerSelection} `);
                    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') break;
                    playerSelection;
                    j++;

                } 
                while (playerSelection !=='rock' || playerSelection !== 'papper' || playerSelection !== 'scissors')               
            }
        playRound(playerSelection, computerSelection);   
        console.log(`You choose: ${playerSelection}`);
        console.log(`Computer Choose: ${computerSelection}`);
        console.log('Round: '+ i + ' ' + playRound(playerSelection, computerSelection));
        console.log(scoreTable(roundWinner));
        
    }
    alert ('You canceled, the game!');
}

game();
console.log(`You won: ${yourScore} time`);
console.log(`Computer won: ${computerScore} time`);
console.log(`Equal times: ${equalRounds}`);
//console.log(`Wrong Inputs by you: ${wrongTries} time`);

scoreTable(roundWinner)
function declareWinner (yourScore, computerScore){    
        if( yourScore > computerScore){
            console.log('Congratulation! You are the  Winner');    
        }else if ( yourScore < computerScore){
            console.log('Computer is the winner');
        }else if ( yourScore == computerScore){
            console.log ( 'You and Computer are equal, Enjoy another Game');
        }
        
        
    }
console.log(declareWinner(yourScore, computerScore));
//document.getElementById("demo").innerHTML = console.log(declareWinner(yourScore, computerScore));
