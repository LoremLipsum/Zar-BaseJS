class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, type, hp, selectors }) {
    super(selectors);

    this.name = name;
    this.type = type;
    this.hp = {
      total: hp,
      current: hp,
    };

    this.renderHP();
  }

  changeHP = (count, cb) => {
    this.damageHP -= count;

    if (this.hp.current <= 0) {
      this.hp.current = 0;
    }
    this.renderHP();
    cb && cb(count);
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    const { elHP, hp: {current, total } } = this;
    elHP.innerText = current + ' / ' + total;
  }

  renderProgressbarHP = () => {
    const { elProgressbar, hp: {current, total } } = this;
    const procent = current / (total / 100)
    elProgressbar.style.width = procent + '%';
  }

};

export default Pokemon;