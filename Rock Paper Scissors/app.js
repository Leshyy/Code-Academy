// set a timer and the display
function showSeconds(e) {
    e.target.disabled = true; // disable the button
    enablePlayBtns();
    let display = document.querySelector('.time-display');
    display.innerText = roundTime;
    timerId = setTimeout(updateTimer, roundTime);
}

// this iterates every second and updates the display
function updateTimer() {
    let time = document.querySelector('.time-display');
    let timeRemaining = Number(time.innerText);
    secondsInterval = setInterval(function () {
        //end of time
        if (timeRemaining === 0) {
            if (playerMove === '') {
                playerMove = getRandomMove();
                console.log(playerMove);
            }
            let enemyMove = getRandomMove();
            computerPlayDisplay.innerText = enemyMove;
            resetBtnColor();
            calcWin(playerMove, enemyMove);
            clearInterval(secondsInterval);
            playerMove = '';
            startBtn.disabled = false; // enable back timer button
        } else {
            timeRemaining--;
            time.innerText = timeRemaining;
        }
    }, 1000);
}
function resetTimer() {
    clearInterval(secondsInterval);
    clearTimeout(timerId);
    startBtn.disabled = false;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}
function resetBtnColor() {
    for (btn of playBtns) {
        btn.style.color = 'white';
    }
}

function getRandomMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function disablePlayBtns() {
    for (btn of playBtns) {
        btn.disabled = true;
    }
}
function enablePlayBtns() {
    for (btn of playBtns) {
        btn.disabled = false;
    }
}

function play(e) {
    let elBtn = e.target;
    elBtn.style.color = 'black';
    playerMove = elBtn.innerText;
    disablePlayBtns();
}

function increasePoint(winner) {
    if (winner == 'player') {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
    } else if (winner == 'computer') {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
    }
}

function calcWin(myMove, computerMove) {
    if (myMove === computerMove) {
        console.log('draw'); // no point given
    } else if (myMove == 'Rock' && computerMove == 'Scissors') {
        increasePoint('player');
    } else if (myMove == 'Paper' && computerMove == 'Rock') {
        increasePoint('player');
    } else if (myMove == 'Scissors' && computerMove == 'Paper') {
        increasePoint('player');
    } else {
        increasePoint('computer');
    }
}

//globals
var roundTime = 5; //seconds
const moves = ['Rock', 'Paper', 'Scissors'];
var playerScore = 0;
var computerScore = 0;
var timerId;
var secondsInterval;
var playerMove = '';

//references
var startBtn = document.querySelector('#start-btn');
var stopBtn = document.querySelector('#stop-btn');
var playerScoreDisplay = document.querySelector('#player-score');
var computerScoreDisplay = document.querySelector('#computer-score');
var computerPlayDisplay = document.getElementById('ai-move');

//btns
startBtn.addEventListener('click', showSeconds);
stopBtn.addEventListener('click', resetTimer);

var playBtns = document.getElementsByClassName('play-btn');
for (btn of playBtns) {
    btn.addEventListener('click', play);
}
// main
disablePlayBtns();
