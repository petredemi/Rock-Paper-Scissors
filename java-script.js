
const computer = document.querySelector('#computer');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const youwinn = document.querySelector('.youwinn');
const computerwinn = document.querySelector('.computerwinn');
const h3 = document.querySelector('.round > h3');
const round_number = document.querySelector('#round_number');

let yourScore = 0;
let computerScore = 0;
let equalRounds = 0;

console.log(round_number.value);
// function declaration

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


function scoreTable(roundWinner){

    if (roundWinner == '0'){
        equalRounds += 1;
    }else if(roundWinner == '1'){
        yourScore += 1;
    }else if (roundWinner == '2'){
       computerScore += 1;
    }
}

function sounds(playerSelection){
    const s1 = document.querySelector('#s1');
    const s2 = document.querySelector('#s2');
    const s3 = document.querySelector('#s3');
            if(playerSelection == 'rock'){
                s1.currentTime = 0;
                s1.play();
            } else if (playerSelection == 'paper'){
                s1.currentTime= 0;
                s1.play();
            }else if (playerSelection == 'scissors'){
                s1.currentTime = 0;
                s1.play();
            }else if (!audio){
                return;
            }
       }

 function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
          e.target.classList.remove('playing');
        } 
               
function startAgain(e){
    score.textContent = 'Score:';   
    e.target.classList.remove('restart');
    computer.textContent = '';
    results.textContent = '';
    youwinn.textContent = ''; 
    computerwinn.textContent = '';
    h3.textContent = 'Round Result:'

    yourScore = 0;
    computerScore = 0;
}
let x = round_number.value;
round_number.addEventListener('change', (e) => {
  
    x = round_number.value;
    
   // console.log(x);
});

function game(){

    const buttons = document.querySelectorAll('.options > button');

        buttons.forEach((button) => { 

            button.addEventListener('click', (e) => {  
    
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            const roundWinner = gamesRules(playerSelection, computerSelection);

            if ( yourScore == x || computerScore == x) return;       
           
            display = playRound (playerSelection, computerSelection);
        

            document.getElementById('results').textContent = display;
            document.getElementById('computer').textContent = computerSelection;
            scoreTable(roundWinner);
            button.classList.add('playing');

            const btns = Array.from(document.querySelectorAll('.options > button'));
            btns.forEach(button => button.addEventListener('transitionend', removeTransition));
         
            sounds.currentTime = 0;
            sounds(playerSelection);

               youwinn.textContent = yourScore;
               computerwinn.textContent = computerScore;

            if ( yourScore == x || computerScore == x){
                    score.classList.add('restart');
                    score.textContent ='play again';
                    h3.textContent = 'Game Result:'
                }  
            });

        }); 
       
    }  
        score.addEventListener('click', (e) => {
            startAgain(e);
        });

  game();