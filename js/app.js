/*-------------------------------- Constants --------------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');


/*---------------------------- Variables (state) ----------------------------*/
const state = {
    bordeom: 0,
    hunger: 0,
    sleepiness: 0,
}
let timer;
let gameOver;



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }

const checkGameOver = () => {
    if (state.bordeom > 9 ||
        state.sleepiness > 9 ||
        state.hunger > 9) {
            gameOver = true
        };
    }


const render = () => {
    boredomStatEl.textContent = state.bordeom;
    sleepinessStatEl.textContent = state.sleepiness;
    hungerStatEl.textContent = state.hunger;

    if (gameOver) {
        resetBtnEl.classList.remove('.hidden');
        gameMessageEl.classList.remove('.hidden');
        clearInterval(timer);
    }
}

let updateStates = () => {
    state.bordeom += getRandomInt();
    state.hunger += getRandomInt();
    state.sleepiness += getRandomInt()

}

const runGame = () => {
updateStates();
checkGameOver();
render();
}


function init() {
    timer = setInterval(runGame, 2000);
    gameOver = false;
    // state.boredom = 0;
    // state.hunger = 0;
    // state.sleepiness = 0;
}
init();
runGame();
/*----------------------------- Event Listeners -----------------------------*/


