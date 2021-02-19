//Global Variables

let comp_score = 0 
let user_score = 0
let count = 0
let result = ""

const tools = Array.from(document.querySelectorAll('.pl'));
tools.forEach(pl => pl.addEventListener('click', playGame));

const cScore = document.getElementById('c-score');
const hScore = document.getElementById('h-score');
const tScore = document.getElementById('finalText');


// Functions

function test() {
    console.log(event.target.id);
    alert("Hello World");
}

function isGameOver() {
    return user_score == 5 || comp_score == 5
}

function updateScores() {
    cScore.innerHTML = comp_score;
    hScore.innerHTML = user_score;
}

function updateTextScore() {
    tScore.innerHTML = result;
    
}

function computerPlay() {
    let items = ['rock', 'paper', 'scissors'];
    item = items[Math.floor(Math.random() * items.length)];
    return item;
}


function getWinner(playerSelection, computerSelection) {

if (playerSelection == computerSelection) {
    result = "It's a tie. No points!"

} else if (playerSelection == 'rock' && computerSelection=="scissors" ||
playerSelection == 'paper' && computerSelection=="rock"||
playerSelection == 'scissors' && computerSelection=="paper") {

    result = ("It's a win: " + playerSelection + " beats " + computerSelection);

    return user_score++;

} else {
    result = ("You lost: " + computerSelection + " beats " + playerSelection);

    return comp_score++;
    }   
}

function playGame(e) {
    if (isGameOver()) {
        alert("Game is over. Click F5 to play");
        return;
        }
    
    const playerSelection = e.target.id;
    const computerSelection = computerPlay()

    console.log("Test Play " + playerSelection);
    console.log("Test Play " + computerSelection);
        
    getWinner(playerSelection, computerSelection);

    if (isGameOver()) {
        
        if (comp_score == 5){
            result = "Game Over! You lost!"
        } else {
            result = "Game Over! You won!"
        }

    };

    updateScores();

    updateTextScore();

}