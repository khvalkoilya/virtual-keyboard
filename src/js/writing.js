import vars from './variables.js';

export function enterOneSymbol(symbol) {
    document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, vars.cursor) + symbol + document.querySelector('textarea').value.slice(vars.cursor, document.querySelector('textarea').value.length);
    document.querySelector('textarea').selectionEnd = vars.cursor + 1;
  }
  
export function write(item) {
    if (item.view !== 'double') {
      if (vars.pressShift || vars.pressCaps) {
        if (vars.lang === 'ru') enterOneSymbol(item.shiftRuValue);
        if (vars.lang === 'eng') enterOneSymbol(item.shiftEngValue);
      } else {
        if (vars.lang === 'ru') enterOneSymbol(item.shiftRuValue.toLowerCase());
        if (vars.lang === 'eng') enterOneSymbol(item.shiftEngValue.toLowerCase());
      }
    } else if (item.shiftRuValue === '' && vars.lang === 'ru') {
      if (vars.pressShift || vars.pressCaps) {
        enterOneSymbol(item.ruValue);
      } else enterOneSymbol(item.ruValue.toLowerCase());
    } else if (vars.pressShift) {
      if (vars.lang === 'ru') enterOneSymbol(item.shiftRuValue);
      if (vars.lang === 'eng') enterOneSymbol(item.shiftEngValue);
    } else {
      if (vars.lang === 'ru') enterOneSymbol(item.ruValue);
      if (vars.lang === 'eng') enterOneSymbol(item.engValue);
    }
  }
  
export function enterSymbols(item) {
    console.log(vars.cursor)
    window.event.preventDefault();
    if (document.querySelector('textarea').selectionStart === document.querySelector('textarea').selectionEnd) {
      if (item.code === 'Enter') {
        document.querySelector('textarea').value = `${document.querySelector('textarea').value.slice(0, vars.cursor)}\n${document.querySelector('textarea').value.slice(vars.cursor, document.querySelector('textarea').value.length)}`;
        document.querySelector('textarea').selectionEnd = vars.cursor + 1;
      }
      if (item.code === 'Backspace') {
        if (vars.cursor !== 0) {
          document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, vars.cursor - 1) + document.querySelector('textarea').value.slice(vars.cursor, document.querySelector('textarea').value.length);
          document.querySelector('textarea').selectionEnd = vars.cursor - 1;
        }
      }
      if (item.code === 'Delete') {
        document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, vars.cursor) + document.querySelector('textarea').value.slice(vars.cursor + 1, document.querySelector('textarea').value.length);
        document.querySelector('textarea').selectionEnd = vars.cursor;
      }
      if (item.code === 'ArrowLeft') if (vars.cursor !== 0) document.querySelector('textarea').selectionEnd = vars.cursor - 1;
      if (item.code === 'ArrowRight') document.querySelector('textarea').selectionStart = vars.cursor + 1;
      if (item.code === 'ArrowUp') document.querySelector('textarea').selectionEnd = 0;
      if (item.code === 'ArrowDown') document.querySelector('textarea').selectionStart = document.querySelector('textarea').value.length;
      if (item.code === 'Tab') {
        document.querySelector('textarea').value = `${document.querySelector('textarea').value.slice(0, vars.cursor)}    ${document.querySelector('textarea').value.slice(vars.cursor, document.querySelector('textarea').value.length)}`;
        document.querySelector('textarea').selectionEnd = vars.cursor + 4;
      }
      if (item.type === 'write') {
        write(item);
      }
    } else if (item.code === 'Backspace' || item.code === 'Delete' || item.code === 'Tab' || item.code === 'Enter' || item.type === 'write') {
      vars.cursor = document.querySelector('textarea').selectionStart;
      document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, document.querySelector('textarea').selectionStart) + document.querySelector('textarea').value.slice(document.querySelector('textarea').selectionEnd, document.querySelector('textarea').value.length);
      document.querySelector('textarea').selectionStart = vars.cursor;
      document.querySelector('textarea').selectionEnd = vars.cursor;
      if (item.code !== 'Backspace' && item.code !== 'Delete') { enterSymbols(item); }
    }
  }