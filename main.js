import { pokemon } from './scripts/pokemon.js';
import random from './scripts/utils.js';

console.log(pokemon)

function $getElById(id) {
  return document.getElementById(id)
}

const $logs = document.querySelector('.j-logs');
const $fightResult = document.querySelector('.j-fight-result');
const $btns = document.querySelectorAll('.j-control-button');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-character'),
  elProgressbar: $getElById('progressbar-character'),
  changeHP,
  renderHP,
  renderHPLife,
  renderProgressbarHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-enemy'),
  elProgressbar: $getElById('progressbar-enemy'),
  changeHP,
  renderHP,
  renderHPLife,
  renderProgressbarHP
}

const btnCountThunderJolt = countBtn(6, $btns[0]);
$btns[0].addEventListener('click', function () {
  $fightResult.innerText = 'Kick!'
  btnCountThunderJolt();
  character.changeHP(random(20), $btns[0]);
  enemy.changeHP(random(20),$btns[0]);
})

const $btnCountElectroBall = countBtn(10, $btns[1]);
$btns[1].addEventListener('click', function () {
  $fightResult.innerText = 'Kick!'
  $btnCountElectroBall()
  character.changeHP(random(60, 20), $btns[1]);
  enemy.changeHP(random(60, 20), $btns[1]);
})

function countBtn(count = 6, el) {
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function () {
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  }
}

function init() {
  $fightResult.innerText = 'Start Game!'
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, btn) {
  this.damageHP -= count;
  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy)

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    $fightResult.innerText = `!!! Великий ${this.name} выиграл бой! !!!`;
    btn.disabled = true;
  }
  this.renderHP();

}



function generateLog(firstPerson, secondPerson) {
  const logs = [
    `<b>${firstPerson.name}</b> вспомнил что-то важное, но неожиданно <b>${secondPerson.name}</b>, не помня себя от испуга, ударил в предплечье врага. У ${firstPerson.name} осталось ${firstPerson.damageHP} жизни`,
    `<b>${firstPerson.name}</b> поперхнулся, и за это <b>${secondPerson.name}</b> с испугу приложил прямой удар коленом в лоб врага. `,
    `<b>${firstPerson.name}</b> забылся, но в это время наглый <b>${secondPerson.name}</b>, приняв волевое решение, неслышно подойдя сзади, ударил. `,
    `<b>${firstPerson.name}</b> пришел в себя, но неожиданно <b>${secondPerson.name}</b> случайно нанес мощнейший удар.${firstPerson.damageHP}`,
    `<b>${firstPerson.name}</b> поперхнулся, но в это время <b>${secondPerson.name}</b> нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
    `<b>${firstPerson.name}</b> удивился, а <b>${secondPerson.name}</b> пошатнувшись влепил подлый удар.`,
    `<b>${firstPerson.name}</b> высморкался, но неожиданно <b>${secondPerson.name}</b> провел дробящий удар.`,
    `<b>${firstPerson.name}</b> пошатнулся, и внезапно наглый <b>${secondPerson.name}</b> беспричинно ударил в ногу противника`,
    `<b>${firstPerson.name}</b> расстроился, как вдруг, неожиданно <b>${secondPerson.name}</b> случайно влепил стопой в живот соперника.`,
    `<b>${firstPerson.name}</b> пытался что-то сказать, но вдруг, неожиданно <b>${secondPerson.name}</b> со скуки, разбил бровь сопернику.`
  ];

  const $li = document.createElement('li');
  $li.innerHTML = logs[random(logs.length) - 1];
  $logs.insertBefore($li, $logs.children[0])

}

init();
