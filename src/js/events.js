import objOfKeys from './layouts/buttons.js';
import * as writing from './writing.js'
import keyFill from './createKeyboard.js';
import vars from './variables.js'
import * as languages from './language.js'

export function mouseDownFunction(e) {
    vars.cursor = vars.field.selectionStart;
    const parent = e.target.parentElement;
    const elem = e.target;
    if (elem.tagName === 'DIV') elem.classList.add('buttonClick');
    else if (parent.tagName === 'DIV') parent.classList.add('buttonClick');
    objOfKeys.forEach((item) => {
      if (elem.classList.contains(item.code) || parent.classList.contains(item.code)) {
        if (elem.classList.contains('ShiftLeft') || parent.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight') || parent.classList.contains('ShiftRight')) vars.pressShift = true;
        writing.enterSymbols(item);
        window.event.preventDefault();
      }
    });
  };
  
export function mouseUpFunction(e) {
    const parent = e.target.parentElement;
    const elem = e.target;
    if (parent.classList.contains('buttonClick') || elem.classList.contains('buttonClick')) {
      if (elem.classList.contains('CapsLock') || elem.innerHTML === 'CapsLock') {
        if (vars.pressCaps) {
          if (elem.tagName === 'DIV') elem.classList.remove('buttonClick');
          else if (parent.tagName === 'DIV') parent.classList.remove('buttonClick');
        }
        vars.pressCaps = (!vars.pressCaps);
      } else {
        if (elem.tagName === 'DIV') elem.classList.remove('buttonClick');
        else if (parent.tagName === 'DIV') parent.classList.remove('buttonClick');
        if (elem.classList.contains('ShiftLeft') || parent.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight') || parent.classList.contains('ShiftRight')) vars.pressShift = false;
        if (elem.classList.contains('language') || parent.classList.contains('language')) {
          vars.field.focus();
          vars.lang === 'ru' ? vars.lang = 'eng' : vars.lang = 'ru';
          languages.set('lang', vars.lang)
          keyFill(vars.lang);   
        }
      }
    } else {
      document.querySelectorAll('div').forEach((key) => key.classList.remove('buttonClick'));
      vars.field.focus();
    }
  };
  
export function keyDownFunction (event) {
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
        if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') vars.pressShift = true;
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
          if (item.code === 'CapsLock') vars.pressCaps = (!vars.pressCaps);
          if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') vars.pressShift = false;
          if ((item.code === 'ShiftLeft' || item.code === 'AltLeft') && (vars.changeLanguage[0] === true && vars.changeLanguage[1] === true)) {
            vars.changeLanguage[0] = false;
            vars.changeLanguage[1] = false;
            vars.lang === 'ru' ? vars.lang = 'eng' : vars.lang = 'ru';
            languages.set('lang', vars.lang)
            keyFill(vars.lang);          
          }
        }
      }
    });
  };
  