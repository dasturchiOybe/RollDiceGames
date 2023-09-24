'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const dice = document.querySelector('.dice');

const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');


let currentScore, activePlayer = 0, score, playing;

function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
//   dice.style.display = 'none';

  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Start
init();

btnRollDice.addEventListener('click', function () {
  if (playing) {
    let random = Math.trunc(Math.random() * 6) + 1; // 1 ... 6

    dice.src = `./img/dice-${random}.png`;
    dice.style.display = 'inline-block';

    if (random !== 1) {
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);



dice.addEventListener('click', () =>{
    if (playing) {
    let random = Math.trunc(Math.random() * 6) + 1; // 1 ... 6

    dice.src = `./img/dice-${random}.png`;
    dice.style.display = 'inline-block';

    if (random !== 1) {
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
})
