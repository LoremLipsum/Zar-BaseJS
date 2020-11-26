const generateLog = function (firstPerson, secondPerson) {
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

export default generateLog;