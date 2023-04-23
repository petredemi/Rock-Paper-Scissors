
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
     }
}

function gamesRules(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return '0';
    
    }else if (playerSelection == 'rock' & computerSelection == 'paper'){
        return '2';

    } else if ( playerSelection == 'rock' & computerSelection == 'scissors'){
        return '1';

    }else if ( playerSelection == 'paper' & computerSelection == 'scissors'){
        return '2';

    } else if (playerSelection == 'paper' & computerSelection =='rock'){
        return '1';

    }else if ( playerSelection == 'scissors' & computerSelection == 'rock'){
        return '2';

    } else if ( playerSelection == 'scissors' & computerSelection == 'paper'){
        return '1';
    }
}

let yourScore = 0;
let computerScore = 0;
let equalRounds = 0;


function scoreTable(roundWinner){

    if (roundWinner == '0'){
        equalRounds += 1;
    }else if(roundWinner == '1'){
        yourScore += 1;
    }else if (roundWinner == '2'){
       computerScore += 1;
    }
}

    function declareWinner (yourScore, computerScore){    
    if( yourScore > computerScore){
        console.log('Congratulation! You are the  Winner');    
    }else if ( yourScore < computerScore){
        console.log('Computer is the winner');
    }else if ( yourScore == computerScore){
        console.log ( 'You and Computer are equal, Enjoy another Game');
    }
}      


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
            }else if (!audio){
                return;
            }
        }

 function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
        e.target.classList.remove('background')
        }    
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const a = document.querySelector('a');

 

function game(){

    const buttons = document.querySelectorAll('.options > button');

   
        buttons.forEach((button) => { 

            button.addEventListener('click', (e) => {  
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            const roundWinner = gamesRules(playerSelection, computerSelection);
            if ( yourScore == 3 || computerScore == 3)return;

        //    e.target.style.background = 'pink';
            display = playRound (playerSelection, computerSelection);

            document.getElementById('results').textContent = display;
            document.getElementById('computer').textContent = computerSelection;
            scoreTable(roundWinner);
           
            button.classList.add('playing');
            button.classList.add('background');
            const btns = Array.from(document.querySelectorAll('button'));
            btns.forEach(button => button.addEventListener('transitionend', removeTransition));


     //       sounds(playerSelection);    
            
            document.getElementById('yourscore').textContent = yourScore;
                document.getElementById('computerscore').textContent = computerScore;
                console.log(`You ${yourScore}`);
                console.log(`Computer won: ${computerScore} time`);
                console.log(`Equal times: ${equalRounds}`);
        

                if ( yourScore == 3 || computerScore == 3){
                    a.textContent = 'play again';
                    a.style.background = 'green';  
                }
 

            });

        });
    
    }  
game();
function again(){
    document.getElementById('play').addEventListener('click', (e) => {
        e.target.style.background = 'pink';
        play.textContent = 'Score:';
        computer.textContent = '';
        results.textContent = '';
        yourscore.innerHTML = '';
        computerscore.innerHTML = '';
    });
    }
  //  again();
