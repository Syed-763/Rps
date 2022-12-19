function getComputerChoice(string1,string2,string3){
    let rando = Math.random()*arguments.length;
    console.log(arguments[Math.floor(rando)]);
}

getComputerChoice("rock","paper","scissors");

function playRound(playerSelection, computerSelection) {


}