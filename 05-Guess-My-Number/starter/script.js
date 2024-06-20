'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // WHEN THERE IS NO INPUT
    if (!guess | (guess > 20)) {
        document.querySelector('.message').textContent =
            '⚠️ Invalid Guess Made!';

        // WHEN PLAYER WINS
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Answer!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '300px';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // WHEN GUESS TOO HIGH
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '❌ Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💀 Womp Womp You Lose';
            document.querySelector('.score').textContent = 0;
        }
        // WHEN GUESS TOO LOW
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '❌ Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '💀 Womp Womp You Lose';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// AGAIN BUTTON RESETS EVERYTHING BACK TO DEFAULT
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '150px';
    document.querySelector('.guess').value = '';
});
