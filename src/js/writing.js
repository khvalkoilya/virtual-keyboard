import vars from './variables.js';

export function enterOneSymbol(symbol) {
    vars.field.value = vars.field.value.slice(0, vars.cursor) + symbol + vars.field.value.slice(vars.cursor, vars.field.value.length);
    vars.field.selectionEnd = vars.cursor + 1;
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
    if (vars.field.selectionStart === vars.field.selectionEnd) {
      if (item.code === 'Enter') {
        vars.field.value = `${vars.field.value.slice(0, vars.cursor)}\n${vars.field.value.slice(vars.cursor, vars.field.value.length)}`;
        vars.field.selectionEnd = vars.cursor + 1;
      }
      if (item.code === 'Backspace') {
        if (vars.cursor !== 0) {
          vars.field.value = vars.field.value.slice(0, vars.cursor - 1) + vars.field.value.slice(vars.cursor, vars.field.value.length);
          vars.field.selectionEnd = vars.cursor - 1;
        }
      }
      if (item.code === 'Delete') {
        vars.field.value = vars.field.value.slice(0, vars.cursor) + vars.field.value.slice(vars.cursor + 1, vars.field.value.length);
        vars.field.selectionEnd = vars.cursor;
      }
      if (item.code === 'ArrowLeft') if (vars.cursor !== 0) vars.field.selectionEnd = vars.cursor - 1;
      if (item.code === 'ArrowRight') vars.field.selectionStart = vars.cursor + 1;
      if (item.code === 'ArrowUp') vars.field.selectionEnd = 0;
      if (item.code === 'ArrowDown') vars.field.selectionStart = vars.field.value.length;
      if (item.code === 'Tab') {
        vars.field.value = `${vars.field.value.slice(0, vars.cursor)}    ${vars.field.value.slice(vars.cursor, vars.field.value.length)}`;
        vars.field.selectionEnd = vars.cursor + 4;
      }
      if (item.type === 'write') {
        write(item);
      }
    } else if (item.code === 'Backspace' || item.code === 'Delete' || item.code === 'Tab' || item.code === 'Enter' || item.type === 'write') {
      vars.cursor = vars.field.selectionStart;
      vars.field.value = vars.field.value.slice(0, vars.field.selectionStart) + vars.field.value.slice(vars.field.selectionEnd, vars.field.value.length);
      vars.field.selectionStart = vars.cursor;
      vars.field.selectionEnd = vars.cursor;
      if (item.code !== 'Backspace' && item.code !== 'Delete') { enterSymbols(item); }
    }
  }