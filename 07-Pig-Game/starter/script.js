'use strict';

/*
1) NEW GAME BUTTON RESETS EVERYTHING
2) ROLL DICE DOES RANDOM INT BETWEEN 1-6 AND SHOWS THE DICE FOR IT
3) SCORE ON DICE GETS ADDED TO CURRENT SCORE EVERY TIME
4) IF 1 IS ROLLED THEN CURRENT SCORE GETS RESET AND ACTIVE PLAYER GETS SWITCHED
5) IF HOLD IS CLICKED CURRENT SCORE ADDED TO TOTAL SCORE AND ACTIVE PLAYER SWITCHED
*/

const newGameButton = document.querySelector('.new-game');
const rollDiceButton = document.querySelector('.roll-dice');
const holdButton = document.querySelector('.hold-score');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const p1CurrentScore = document.querySelector('#p1-current-score');
const p2CurrentScore = document.querySelector('#p2-current-score');
let dicePicture = document.querySelector('.dice').src;
let dice;

// 2) ROLL DICE DOES RANDOM INT BETWEEN 1-6 AND SHOWS THE DICE FOR IT

const rollDice = function () {
    dice = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${dice}.png`;
    console.log(dice);
};
rollDiceButton.addEventListener('click', rollDice);

// 3) SCORE ON DICE OF ACTIVE PLAYER GETS ADDED TO CURRENT SCORE EVERY TIME
const currentScore = function () {
    const currentPlayerScore = player1.classList.contains('active-player')
        ? p1CurrentScore
        : p2CurrentScore;
    currentPlayerScore.textContent =
        Number(currentPlayerScore.textContent) + dice;
};
rollDiceButton.addEventListener('click', currentScore);

// 4) IF 1 IS ROLLED THEN CURRENT SCORE GETS RESET AND ACTIVE PLAYER GETS SWITCHED
if (dice === 1) {
    // IF P1 IS ACTIVE
    if (player1.contains('active-player')) {
    }
}
