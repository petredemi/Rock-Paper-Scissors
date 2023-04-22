
function getComputerChoice() { 
    const wordPick = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return wordPick[randomNumber];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Equal!';
        
    }else if (playerSelection == 'rock' & computerSelection == 'paper'){
        return 'You lose! Paper beat rocks';

    } else if ( playerSelection == 'rock' & computerSelection == 'scissors'){
        return 'You Win! Rocks beat scissors';

    }else if ( playerSelection == 'paper' & computerSelection == 'scissors'){
        return 'You lose! Scissors beat paper';

    } else if (playerSelection == 'paper' & computerSelection =='rock'){
        return 'You Win! Paper beat rocks';

    }else if ( playerSelection == 'scissors' & computerSelection == 'rock'){
        return 'You lose! Rocks beat scissors';
    
    } else if ( playerSelection == 'scissors' & computerSelection == 'paper'){
        return 'You Win! Scissors beat paper';
     }/*else if( playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors'){
        return 'wrong input';
      }*/ 
}

function gamesRules(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log ('You and computer chosed the same, Equal');
    
    }else if (playerSelection == 'rock' & computerSelection == 'paper'){
        console.log('Computer win, Paper beat Rocks');

    } else if ( playerSelection == 'rock' & computerSelection == 'scissors'){
        console.log ('You win, Rocks beat Scissors!');

    }else if ( playerSelection == 'paper' & computerSelection == 'scissors'){
        console.log('Computer win, Scissors beat Papers');

    } else if (playerSelection == 'paper' & computerSelection =='rock'){
        console.log('You win, Paper beat Rocks');

    }else if ( playerSelection == 'scissors' & computerSelection == 'rock'){
        console.log ('Computer win, Rocks beat Scissors');

    } else if ( playerSelection == 'scissors' & computerSelection == 'paper'){
        console.log('You win, Scissors beat Paper');
    }


}


//let yourScore = 0;
//let computerScore = 0;
//let equalRounds = 0;
//let moves = 0;
//let wrongTries = 0;

/*function scoreTable(roundWinner){

    if (roundWinner == 'Equal!'){
        equalRounds += 1;
    }else if(roundWinner == 'You Win!'){
        yourScore += 1;
    }else if (roundWinner == 'You lose!'){
       computerScore += 1;
    } /*else if( roundWinner == 'wrong input')
        wrongTries += 1;
}*/
function sounds(playerSelection){
    const s1 = document.querySelector('#s1');
    const s2 = document.querySelector('#s2');
    const s3 = document.querySelector('#s3');
            if(playerSelection == 'rock'){
                s1.play();
            } else if (playerSelection == 'paper'){
                s2.play();
            }else if (playerSelection == 'scissors'){
                s3.play();
            }
        }


function game(){
    
    //for (i = 1 ; i < 3; i++){
      //  let player = prompt(`Round: ${i} from 5, Please enter: rock, paper or scissors`, '');
   //     if(!player) break outer;
    //    playerSelection = player.toLowerCase();
  
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
 //  const playerChoice = [rock, paper, scissors];
    const buttons = document.querySelectorAll('button');
    
        buttons.forEach((button) => {

            button.addEventListener('click', (e) => {         
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            sounds(playerSelection);
                
            e.target.style.background = 'pink';             
            display = playRound (playerSelection, computerSelection);
            document.getElementById('results').innerHTML = display;
            document.getElementById('computer').textContent = computerSelection;
            
            });

        });
       
    }
game();

//        playRound(playerSelection, computerSelection);

    
      //  roundWinner = playRound(playerSelection, computerSelection);

    /*   if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
            playerSelection;
        }
        else {
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
    */
 /*       console.log(`You choose: ${playerSelection}`);
        console.log(`Computer Choose: ${computerSelection}`);
        gamesRules(playerSelection, computerSelection);
        console.log('Round: '+ i + ' ' + playRound(playerSelection, computerSelection));      
        scoreTable(roundWinner);
    }
  // alert ('Done');
*/

/*console.log(`You won: ${yourScore} time`);
console.log(`Computer won: ${computerScore} time`);
console.log(`Equal times: ${equalRounds}`);
console.log(`Wrong Inputs by you: ${wrongTries} time`);

scoreTable(roundWinner);
function declareWinner (yourScore, computerScore){    
        if( yourScore > computerScore){
            console.log('Congratulation! You are the  Winner');    
        }else if ( yourScore < computerScore){
            console.log('Computer is the winner');
        }else if ( yourScore == computerScore){
            console.log ( 'You and Computer are equal, Enjoy another Game');
        }      
        
    }
declareWinner(yourScore, computerScore);

console.log(declareWinner(yourScore, computerScore));
*/