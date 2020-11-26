import Pokemon from './scripts/pokemon.js';
import random from './scripts/utils.js';
import countBtn from './scripts/countBtn.js';
import generateLog from './scripts/generateLog.js';

const $logs = document.querySelector('.j-logs');
const $thunderJoltBtn = document.querySelector('.j-thunder-jolt');
const $electroBallBtn = document.querySelector('.j-electro-ball');
const $fightResult = document.querySelector('.j-fight-result');

const player1 = new Pokemon({
  name: 'Pikachu',
  type: 'electro',
  hp: 100,
  selectors: 'character'
})

const player2 = new Pokemon({
  name: 'Charmander',
  type: 'electro',
  hp: 100,
  selectors: 'enemy'
})

$fightResult.innerText = 'Start Game!'

const btnCountThunderJolt = countBtn(6, $thunderJoltBtn);

$thunderJoltBtn.addEventListener('click', function () {
  $fightResult.innerText = 'Kick!'
  btnCountThunderJolt();
  player1.changeHP(random(60, 20), function(count) {
    generateLog(player1, player2, count, $logs);
  })
  player2.changeHP(random(20), function(count) {
    generateLog(player2, player1, count, $logs);
  })
})

const $btnCountElectroBall = countBtn(10, $electroBallBtn);

$electroBallBtn.addEventListener('click', function () {
  $fightResult.innerText = 'Kick!'
  $btnCountElectroBall();
  player1.changeHP(random(60, 20), function(count) {
    generateLog(player1, player2, count, $logs);
    $fightResult.innerText = `Kick ${player1.name}!`
  })
  player2.changeHP(random(20), function(count) {
    generateLog(player2, player1, count, $logs);
    $fightResult.innerText = `Kick ${player2.name}!`
  })
});



