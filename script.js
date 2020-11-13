const button = Array.from(document.querySelectorAll("button"));

button.forEach(buttons => buttons.addEventListener('click', push));
button.forEach(buttons => buttons.addEventListener('transitionend', removeTransition));

function push(e) { //Shrinks button on click
    e.target.classList.add('click');
    setTimeout(() => {
        if (e.target.className === 'click') e.target.classList.remove('click');
    }, 400);
}
function removeTransition(e) { //Grows button once transform is over
    if (e.propertyName !== "transform") return "ERROR";
    e.target.classList.remove('click');
}
///PLAY!!!


let cScore = 0;
let pScore = 0;
let cHandArray = ["Rock", "Paper", "Scissors"];
const log = document.querySelector("#winLog");
const cLog = document.querySelector("#cScore");
const pLog = document.querySelector("#pScore");

function random123() { //return random 3 numbers 0 - 2.
    let x = Math.floor(Math.random() * 3);
    return cHandArray[x];
}
function tie(x, cPlay) {
    log.textContent = `Tie! ${x} ties ${cPlay}!`;
}
function cWin(x, cPlay) {
    log.textContent = `Computer Wins! ${cPlay} beats ${x}`;
    cScore++
    cLog.textContent = cScore;
    if (cScore === 5) {
        log.textContent = `COMPUTER WINS! you suk`;
        reset();
    }
}
function pWin(x, cPlay) {
    pScore++
    log.textContent = `Player Wins! ${x} beats ${cPlay}`;
    pLog.textContent = pScore;
    if (pScore === 5) {
        log.textContent = `YOU'RE A WIENER!`;
        reset();
    }
}
function reset() {
    pScore = 0;
    cScore = 0;
    cLog.textContent = 0;
    pLog.textContent = 0;
}

const pRock = document.querySelector("#rock");
const pPaper = document.querySelector("#paper");
const pScissors = document.querySelector("#scissors");

pRock.onclick = function () { play("Rock"); }
pPaper.onclick = function () { play("Paper"); }
pScissors.onclick = function () { play("Scissors"); }

function play(x) {
    let cHand = random123();
    if (x === cHand) { 
        tie(x, cHand); 
    } else if (x === "Rock") {
        (cHand === "Paper") ? cWin(x, cHand) : pWin(x, cHand);
    } else if (x === "Scissors") {
        (cHand === "Rock") ? cWin(x, cHand) : pWin(x, cHand);
    } else if (x === "Paper") {
        (cHand === "Scissors") ? cWin(x, cHand) : pWin(x, cHand);
    }
}

