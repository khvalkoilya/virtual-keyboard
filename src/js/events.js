import objOfKeys from './layouts/buttons.js';
import * as writing from './writing.js';
import keyFill from './createKeyboard.js';
import vars from './variables.js';
import * as languages from './language.js';


function toggleButtonClickClass(elem, parent, toggleType) {
  if (elem.tagName === 'DIV') {
    elem.classList[toggleType]('buttonClick');
  } else if (parent.tagName === 'DIV') {
    parent.classList[toggleType]('buttonClick');
  }
}

export function mouseDownFunction(e) {
  vars.cursor = vars.field.selectionStart;
  const parent = e.target.parentElement;
  const elem = e.target;
  toggleButtonClickClass(elem, parent, 'add');
  objOfKeys.forEach((item) => {
    if (elem.classList.contains(item.code) || parent.classList.contains(item.code)) {
      if (elem.className.match(/ShiftLeft|ShiftRight/) || parent.className.match(/ShiftLeft|ShiftRight/)) {
        vars.pressShift = true;
      }
      writing.enterSymbols(item);
      window.event.preventDefault();
    }
  });
}

export function mouseUpFunction(e) {
  const parent = e.target.parentElement;
  const elem = e.target;
  if (parent.classList.contains('buttonClick') || elem.classList.contains('buttonClick')) {
    if (elem.classList.contains('CapsLock') || elem.innerHTML === 'CapsLock') {
      if (vars.pressCaps) {
        toggleButtonClickClass(elem, parent, 'remove');
      }
      vars.pressCaps = (!vars.pressCaps);
    } else {
      toggleButtonClickClass(elem, parent, 'remove');
      if (elem.className.match(/ShiftLeft|ShiftRight/) || parent.className.match(/ShiftLeft|ShiftRight/)) {
        vars.pressShift = false;
      }
      if (elem.classList.contains('language') || parent.classList.contains('language')) {
        vars.field.focus();
        vars.lang === 'ru' ? vars.lang = 'eng' : vars.lang = 'ru';
        languages.set('lang', vars.lang);
        keyFill(vars.lang);
      }
    }
  } else {
    document.querySelectorAll('div').forEach((key) => key.classList.remove('buttonClick'));
    vars.field.focus();
  }
}

export function keyDownFunction(event) {
  vars.cursor = vars.field.selectionStart;
  objOfKeys.forEach((item) => {
    if (item.code === event.code) {
      document.querySelector(`.${item.code}`).classList.add('buttonClick');
      if (item.code === 'ShiftLeft') {
        vars.changeLanguage[0] = true;
      } else if (item.code === 'AltLeft') {
        vars.changeLanguage[1] = true;
      } else {
        vars.changeLanguage[0] = false;
        vars.changeLanguage[1] = false;
      }
      if (item.code.match(/ShiftLeft|ShiftRight/)) {
        vars.pressShift = true;
      }
      writing.enterSymbols(item);
    }
  });
}

export function keyUpFunction(event) {
  objOfKeys.forEach((item) => {
    if (item.code === event.code) {
      if (item.code === 'CapsLock') {
        if (vars.pressCaps) {
          document.querySelector(`.${item.code}`).classList.remove('buttonClick');
        }
        vars.pressCaps = !vars.pressCaps;
      } else {
        document.querySelector(`.${item.code}`).classList.remove('buttonClick');
        if (item.code === 'CapsLock') {
          vars.pressCaps = (!vars.pressCaps);
        }
        if (item.code.match(/ShiftLeft|ShiftRight/)) {
          vars.pressShift = false;
        }
        if (item.code.match(/ShiftLeft|AltLeft/) && (vars.changeLanguage[0] && vars.changeLanguage[1])) {
          vars.changeLanguage[0] = false;
          vars.changeLanguage[1] = false;
          vars.lang === 'ru' ? vars.lang = 'eng' : vars.lang = 'ru';
          languages.set('lang', vars.lang);
          keyFill(vars.lang);
        }
      }
    }
  });
}
