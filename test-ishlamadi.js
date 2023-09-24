// 'use strict';

// const score0El = document.querySelector('#score--0')
// const score1El = document.getElementById('score--1')

// const dice = document.querySelector('.dice')
// const btnRollDice = document.querySelector('.btn--roll')
// const btnHolt = document.querySelector('.btn--hold')

// const player0El = document.querySelector('.player--0')
// const player1El = document.querySelector('.player--1')

// // const btnNew =  

// // const currentScore0El = document.getElementById('current--0')
// // const currentScore1El = document.getElementById('current--1')

// score0El.textContent = 0;
// score1El.textContent = 0;
// dice.style.display = 'none';

// let currentScore = 0;
// let activePlayer = 0;
// let score = [0,0];
// let playing = true;

// function switchPlayer() {
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = currentScore;


//     activePlayer = (activePlayer === 0) ? 1 : 0;
//     player0El.classList.toggle('player--active')
//     player1El.classList.toggle('player--active')
// }

// btnRollDice.addEventListener('click', function () {
//     if(playing = true){
//         let random = Math.trunc(Math.random() * 6) + 1;

//         dice.src = `./img/dice-${random}.png`;
//         dice.style.display = 'inline-block';

//         if(random !== 1){
//             currentScore += random;
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         }else{
//             currentScore = 0;
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore;


//             activePlayer = (activePlayer === 0) ? 1 : 0;
//             player0El.classList.toggle('player--active')
//             player1El.classList.toggle('player--active')
//         }
//     }
// })

// // btnHolt.addEventListener('click', () => {
// //     score[activePlayer] += currentScore;
// //     document.getElementById(`score--${activePlayer}`).textContent= score[activePlayer];

// //     currentScore = 0;
// //     // if (activePlayer == 0) {
// //     //     score0El.textContent = score[0];
// //     // }else {
// //     //     score1El.textContent = score[1];
// //     // }
// // })


// btnHolt.addEventListener('click' , function(){
//     if(playing){
//         score[activePlayer] += currentScore;
//         document.getElementById(`score--${activePlayer}`).textContent= score[activePlayer];

//         if(score[activePlayer] >= 20){
//             playing = false;

//             document.querySelector(`.player--${activePlayer}`) .classList.add('player--winner');
//         }else{
//             switchPlayer();
//         }

//     // currentScore = 0;
//     // document.getElementById(`current--${activePlayer}`).textContent = currentScore;

//     // activePlayer = (activePlayer === 0) ? 1 : 0;
//     // player0El.classList.toggle('player--active')
//     // player1El.classList.toggle('player--active')

//     }
    
// })




