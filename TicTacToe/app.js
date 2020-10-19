const btns = document.getElementsByTagName('button');
for (btn of btns) {
    btn.addEventListener('click', play);
}

var playCount = 0;

var plug = false;
function play(event) {
    let btnHit = event.target;
    btnHit.disabled = true;
    if (plug) {
        btnHit.innerText = 'X';
    } else {
        btnHit.innerText = 'O';
    }
    playCount++;
    checkWin();
    plug = !plug;
}

function checkWin() {
    // row win
    if (
        btns[0].innerText === btns[1].innerText &&
        btns[1].innerText === btns[2].innerText
    ) {
        declareWinner();
    } else if (
        btns[3].innerText === btns[4].innerText &&
        btns[4].innerText === btns[5].innerText
    ) {
        declareWinner();
    } else if (
        btns[6].innerText === btns[7].innerText &&
        btns[7].innerText === btns[8].innerText
    ) {
        declareWinner();
    } else if (
        // column win
        btns[0].innerText === btns[3].innerText &&
        btns[3].innerText === btns[6].innerText
    ) {
        declareWinner();
    } else if (
        btns[1].innerText === btns[4].innerText &&
        btns[4].innerText === btns[7].innerText
    ) {
        declareWinner();
    } else if (
        btns[2].innerText === btns[5].innerText &&
        btns[5].innerText === btns[8].innerText
    ) {
        declareWinner();
    } else if (
        // diagnol win
        btns[0].innerText === btns[4].innerText &&
        btns[4].innerText === btns[8].innerText
    ) {
        declareWinner();
    } else if (
        btns[2].innerText === btns[4].innerText &&
        btns[4].innerText === btns[6].innerText
    ) {
        declareWinner();
    } else if (playCount === 9) {
        declareDraw();
    }
}

function declareWinner() {
    if (plug) {
        alert('X won');
    } else {
        alert('O won');
    }
    resetGame();
}

function declareDraw() {
    alert('Is a draw!');
    resetGame();
}

function resetGame() {
    location.reload();
}
