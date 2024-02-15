'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✅ Correct Number!'
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

const toValidScore = function () {
    if (score === 0) {
        document.querySelector('.message').textContent = '💥😕 You lost the game!';
    }
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Invalid Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct Number, Congratulations!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }

    toValidScore();
});