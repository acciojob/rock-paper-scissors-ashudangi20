//your code here
let gameNumber = document.getElementById('gameNumber');
let play = document.getElementById('play');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let userChoice = "";

rock.onclick = function rock(){
    userChoice = 'ROCK';
    return userChoice;
}

paper.onclick = function paper(){
    userChoice = 'PAPER';
    return userChoice;
}

scissors.onclick = function paper(){
    userChoice = 'SCISSORS';
    return userChoice;
}

play.addEventListener('click', game);

function game(){
    console.clear();
    let won = 0;
    let gameResult = "";
    for(let i = 1; i <=gameNumber.value; i++){
        console.log("Round : " + i);
        console.log("Round Left : " + (gameNumber.value-i));
        
        let user = userChoice();
        let computer = computerChoice();

        let result = roundResult(user, computer);
        console.log(result);
        if(result === "WON"){
            won++;
        }

        if(won == (gameNumber.value/2)){
            gameResult="TIE";
        }
        else if(won > (gameNumber.value/2)){
            gameResult="WON";
        }
        else{
            gameResult="LOSE";
        }
        
    }
    console.log(gameResult);
}

function computerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    let choice = "";
        if(compChoice == 0){
            choice= "ROCK";
        }
        else if(compChoice == 1){
            choice = "PAPER";
        }
        else{
            choice = "SCISSORS";
        }
        return choice;
}

function roundResult(userChoice, compChoice){
    let roundResult = "";
    if(compChoice == "ROCK"){
        if(userChoice == "PAPER"){
            roundResult = "WON";
        }
        else{
            roundResult = "LOSE";
        }
    }
    else if( compChoice == "PAPER"){
        if(userChoice == "SCISSORS"){
            roundResult = "WON";
        }
        else{
            roundResult = "LOSE";
        }
    }
    else if(compChoice == "SCISSORS"){
        if(userChoice == "ROCK"){
            roundResult = "WON";
        }
        else{
            roundResult = "LOSE";
        }
    }
    return roundResult;
}
