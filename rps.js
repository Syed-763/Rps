    function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let rando = Math.floor(Math.random() * choices.length);
    return choices[rando];
  }
  
    let playerscore = 0;
    let computerscore = 0;
  
    function game(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection.toUpperCase();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
      console.log(`you lose ${playerscore} ${computerscore++}`)
    } else if (computerSelection == 'rock'  && playerSelection == 'paper') {
      console.log(`you win ${playerscore++} ${computerscore}`)
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
      console.log(`you lose ${playerscore} ${computerscore++}`)
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      console.log(`you win ${playerscore++} ${computerscore}`)
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
      console.log(`you lose ${playerscore} ${computerscore++}`)
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
      console.log(`you win ${playerscore++} ${computerscore}`)
    } else if(playerSelection == 'paper' && computerSelection == 'paper') {
      console.log(`It's a tie`);
    }else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
      console.log(`It's a tie`);
    }else if(playerSelection == 'rock' && computerSelection == 'rock'){
      console.log(`It's a tie`);
    }else{
      console.log('invalid selection');
    }
  }

function loop(){
  for(let i=0; i<5;i++){
    game(prompt('what is your choice').toLowerCase());
  } 
}
loop();