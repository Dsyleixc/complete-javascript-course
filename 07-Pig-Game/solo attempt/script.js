'use strict';

/*
1) ROLL DICE DOES RANDOM INT BETWEEN 1-6 AND SHOWS THE DICE FOR IT
2) SCORE ON DICE GETS ADDED TO CURRENT SCORE EVERY TIME
3) IF 1 IS ROLLED THEN CURRENT SCORE GETS RESET AND ACTIVE PLAYER GETS SWITCHED
4) IF HOLD IS CLICKED CURRENT SCORE ADDED TO TOTAL SCORE AND ACTIVE PLAYER SWITCHED
5) NEW GAME BUTTON RESETS EVERYTHING
*/

// SELECTORS
const newGameButton = document.querySelector('.new-game');
const rollDiceButton = document.querySelector('.roll-dice');
const holdButton = document.querySelector('.hold-score');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const p1CurrentScore = document.querySelector('#p1-current-score');
const p2CurrentScore = document.querySelector('#p2-current-score');
const p1TotalScore = document.querySelector('#p1-total-score');
const p2TotalScore = document.querySelector('#p2-total-score');
let dicePicture = document.querySelector('.dice').src;
let dice;

// FUNCTIONS

// SELECT ACTIVE PLAYERS CURRENT SCORE
const activePlayerScore = function () {
    return player1.classList.contains('active-player')
        ? p1CurrentScore
        : p2CurrentScore;
};

// SELECTS THE ACTIVE PLAYER'S <SECTION>
const activePlayer = function () {
    return player1.classList.contains('active-player') ? player1 : player2;
};

const activePlayerTotalScore = function () {
    return player1.classList.contains('active-player')
        ? p1CurrentScore
        : p2CurrentScore;
};

const switchPlayer1 = function () {
    player1.classList.remove('active-player');
    player2.classList.add('active-player');
};

const switchPlayer2 = function () {
    player2.classList.remove('active-player');
    player1.classList.add('active-player');
};

// 1) ROLL DICE DOES RANDOM INT BETWEEN 1-6 AND SHOWS THE DICE FOR IT

const rollDice = function () {
    // SHOWS DICE ONCE FIRST ROLL DONE
    document.querySelector('.dice').classList.remove('hidden');

    // MATH FOR THE DICE AND SHOWING THE CORRECT DICE
    dice = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${dice}.png`;
    console.log(dice);
};
rollDiceButton.addEventListener('click', rollDice);

// 2) SCORE ON DICE OF ACTIVE PLAYER GETS ADDED TO CURRENT SCORE EVERY TIME
const currentScore = function () {
    // UPDATES THE SCORE FOR EVERY ROLL
    console.log(activePlayer());
    activePlayerScore().textContent =
        Number(activePlayerScore().textContent) + dice;
};
rollDiceButton.addEventListener('click', currentScore);

// 3) IF 1 IS ROLLED THEN CURRENT SCORE GETS RESET AND ACTIVE PLAYER GETS SWITCHED
const oneDice = function () {
    if (dice === 1) {
        activePlayerScore().textContent = 0;
        if (player1.classList.contains('active-player')) {
            switchPlayer1();
        } else {
            switchPlayer2();
        }
    }
};
rollDiceButton.addEventListener('click', oneDice);

// 4) IF HOLD IS CLICKED CURRENT SCORE ADDED TO TOTAL SCORE AND ACTIVE PLAYER SWITCHED

const hold = function () {
    if (player1.classList.contains('active-player')) {
        p1TotalScore.textContent =
            Number(p1CurrentScore.textContent) +
            Number(p1TotalScore.textContent);
        activePlayerScore().textContent = 0;
        switchPlayer1();
    } else {
        p2TotalScore.textContent =
            Number(p2CurrentScore.textContent) +
            Number(p2TotalScore.textContent);
        activePlayerScore().textContent = 0;
        switchPlayer2();
    }
};
holdButton.addEventListener('click', function () {
    hold();
    winner();
});

// 5) WINNER AT 100

const winner = function () {
    if (Number(activePlayerScore().textContent) >= 100) {
        activePlayer().classList.add('winner');
        holdButton.removeEventListener('click', rollDice);
        rollDiceButton.removeEventListener('click', hold);
    }
};
