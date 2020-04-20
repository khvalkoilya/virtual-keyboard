import create from './utils/create.js'
import objOfKeys from './layouts/buttons.js';

export default function keyFill(lang) {
    document.querySelector('.keyboard').innerHTML = '';
    objOfKeys.forEach((item) => {
      const childs = [];
      const upLetter = create('p','upLetter')
      const centerLetter = create('p','centerLetter')
      if (lang === 'eng') {
        if (item.view === 'double') {
          upLetter.innerHTML = item.shiftEngValue;
          centerLetter.innerHTML = item.engValue;
        } else centerLetter.innerHTML = item.shiftEngValue;
      } else if (item.view === 'double') {
        upLetter.innerHTML = item.shiftRuValue;
        centerLetter.innerHTML = item.ruValue;
      } else centerLetter.innerHTML = item.shiftRuValue;
      if(upLetter.innerHTML !== '') childs.push(upLetter);
      childs.push(centerLetter);
      const classes = `${item.size} ${item.code}`;
      const key = create('div', null, childs);
      key.className = classes;
      document.querySelector('.keyboard').append(key);
    });
  }