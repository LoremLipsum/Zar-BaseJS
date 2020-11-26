import random from './utils.js';

const generateLog = function (player1, player2, count, el) {
  const logs = [
    `<b>${player1.name}</b> вспомнил что-то важное, но неожиданно <b>${player2.name}</b>, не помня себя от испуга, ударил в предплечье врага. -${count}`,
    `<b>${player1.name}</b> поперхнулся, и за это <b>${player2.name}</b> с испугу приложил прямой удар коленом в лоб врага. -${count}`,
    `<b>${player1.name}</b> забылся, но в это время наглый <b>${player2.name}</b>, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}`,
    `<b>${player1.name}</b> пришел в себя, но неожиданно <b>${player2.name}</b> случайно нанес мощнейший удар.${player1.damageHP}`,
    `<b>${player1.name}</b> поперхнулся, но в это время <b>${player2.name}</b> нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}`,
    `<b>${player1.name}</b> удивился, а <b>${player2.name}</b> пошатнувшись влепил подлый удар. -${count}`,
    `<b>${player1.name}</b> высморкался, но неожиданно <b>${player2.name}</b> провел дробящий удар. -${count}`,
    `<b>${player1.name}</b> пошатнулся, и внезапно наглый <b>${player2.name}</b> беспричинно ударил в ногу противника. -${count}`,
    `<b>${player1.name}</b> расстроился, как вдруг, неожиданно <b>${player2.name}</b> случайно влепил стопой в живот соперника. -${count}`,
    `<b>${player1.name}</b> пытался что-то сказать, но вдруг, неожиданно <b>${player2.name}</b> со скуки, разбил бровь сопернику. -${count}`
  ];

  const $li = document.createElement('li');
  $li.innerHTML = logs[random(logs.length) - 1];
  el.insertBefore($li, el.children[0])
}

export default generateLog;