function $getElById(id) {
  return document.getElementById(id)
}

const $btn = $getElById('btn-kick');
const $logs = document.querySelector('#logs');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-character'),
  elProgressbar: $getElById('progressbar-character'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-enemy'),
  elProgressbar: $getElById('progressbar-enemy'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP
}

$btn.addEventListener('click', function () {
  console.log('Kick')
  character.changeHP(random(20));
  enemy.changeHP(random(20));
})

function init() {
  console.log('Start Game!')
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

function changeHP(count) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy)
  console.log(log);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
  }
  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. У ${firstPerson.name} осталось ${firstPerson.damageHP} жизни`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. `,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. `,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.${firstPerson.damageHP}`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
  ];

  const $p = document.createElement('p');

  $p.innerText = logs[random(logs.length) - 1];

  $logs.insertBefore($p, $logs.children[0])

}

init();
