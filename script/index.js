'use strict';

const items = ['stone', 'scissors', 'paper'];
let gameRounds = 0;
let computerBrain = document.querySelector('.icons_comp');
let scraen = document.querySelector('.hello_players');
let scoreboard = document.querySelector('.scoreboard');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let startBtn = document.querySelector('.button-start');
let btn = document.querySelectorAll('.choice-btn');
const resultTable = document.querySelector('.win-lose');
const btnDisplay = document.querySelector('.img_wrapper');

startBtn.addEventListener('click', startGame);


// conputer choice
function getComputerChoice() {
    let random = Math.floor(Math.random()*items.length);
    
    return items[random];
}

// get icons on the screen (depending on the choice getComputer())
function getIcons() {
    let resComputerValue = getComputerChoice();
    if (resComputerValue == 'stone') {
        computerBrain.src="./icons/rock.png";
    }
    if (resComputerValue == 'scissors') {
        computerBrain.src="./icons/scissors.png";
    }
    if (resComputerValue == 'paper') {
        computerBrain.src="./icons/paper.png";
    }

    computerBrain.style.border = '10px solid red';
    return resComputerValue;
}


// user choice vs computer choice

function getUserChoice() {
    btn.forEach(elem => {
        elem.addEventListener('click', () => {
            let userChoice = elem.value;
            const computerChoice = getIcons();
            comparisonChoice(userChoice, computerChoice);
            
        });
    });


}
getUserChoice();


// comperison user and computer choice
function comparisonChoice(userChoice , computerChoice) {
    let userChoiceOfOneRound = +userScore.textContent;
    let compChoiceOfOneRound = +compScore.textContent;

    if(userChoice === 'stone' && computerChoice === 'scissors' 
    || userChoice === 'scissors' && computerChoice === 'paper'
    || userChoice === 'paper' && computerChoice === 'stone') {
        userChoiceOfOneRound++;
        userScore.textContent = `${userChoiceOfOneRound}`;
        resultTable.textContent = 'Win';

    } else if (userChoice === 'stone' && computerChoice === 'paper' 
    || userChoice === 'scissors' && computerChoice === 'stone'
    || userChoice === 'paper' && computerChoice === 'scissors') {
        compChoiceOfOneRound++;
        compScore.textContent = `${compChoiceOfOneRound}`;
        resultTable.textContent = 'Lose';

    } else {
        resultTable.textContent = 'Draw';
        console.log('DRAW');
    }
    gameRounds++;
    if (gameRounds === 5) {
        result(+userScore.textContent, +compScore.textContent);
        
    }

}

function result(user , comp) {
    if (user > comp) {
        resultTable.textContent = 'You Win';
    } else if (user < comp) {
        resultTable.textContent = 'You Lose';
    } else {
        resultTable.textContent = 'Draw Match';
    }

    btnDisplay.style.visibility = 'hidden';
    gameRounds = 0;
    
}

function startGame() {
    startBtn.textContent = 'reset';
    gameRounds = 0;
    computerBrain.src="./icons/what_icon.png";
    btnDisplay.style.visibility = 'visible';
    userScore.textContent = '0';
    compScore.textContent = '0';
    resultTable.textContent = '';
}
