import objOfKeys from './buttons.js';

const changeLanguage = [false, false];
let pressShift = false;
let pressCaps = false;
const languageOfKeyboard = localStorage.languageOfKeyboard || 'ru';
let cursor;

// SCREEN WRITING

function enterOneSymbol(symbol) {
  document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, cursor) + symbol + document.querySelector('textarea').value.slice(cursor, document.querySelector('textarea').value.length);
  document.querySelector('textarea').selectionEnd = cursor + 1;
}

function write(item) {
  if (item.view !== 'double') {
    if (pressShift || pressCaps) {
      if (localStorage.languageOfKeyboard === 'ru') enterOneSymbol(item.shiftRuValue);
      if (localStorage.languageOfKeyboard === 'eng') enterOneSymbol(item.shiftEngValue);
    } else {
      if (localStorage.languageOfKeyboard === 'ru') enterOneSymbol(item.shiftRuValue.toLowerCase());
      if (localStorage.languageOfKeyboard === 'eng') enterOneSymbol(item.shiftEngValue.toLowerCase());
    }
  } else if (item.shiftRuValue === '' && localStorage.languageOfKeyboard === 'ru') {
    if (pressShift || pressCaps) {
      enterOneSymbol(item.ruValue);
    } else enterOneSymbol(item.ruValue.toLowerCase());
  } else if (pressShift) {
    if (localStorage.languageOfKeyboard === 'ru') enterOneSymbol(item.shiftRuValue);
    if (localStorage.languageOfKeyboard === 'eng') enterOneSymbol(item.shiftEngValue);
  } else {
    if (localStorage.languageOfKeyboard === 'ru') enterOneSymbol(item.ruValue);
    if (localStorage.languageOfKeyboard === 'eng') enterOneSymbol(item.engValue);
  }
}

function enterSymbols(item) {
  window.event.preventDefault();
  if (document.querySelector('textarea').selectionStart === document.querySelector('textarea').selectionEnd) {
    if (item.code === 'Enter') {
      document.querySelector('textarea').value = `${document.querySelector('textarea').value.slice(0, cursor)}\n${document.querySelector('textarea').value.slice(cursor, document.querySelector('textarea').value.length)}`;
      document.querySelector('textarea').selectionEnd = cursor + 1;
    }
    if (item.code === 'Backspace') {
      if (cursor !== 0) {
        document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, cursor - 1) + document.querySelector('textarea').value.slice(cursor, document.querySelector('textarea').value.length);
        document.querySelector('textarea').selectionEnd = cursor - 1;
      }
    }
    if (item.code === 'Delete') {
      document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, cursor) + document.querySelector('textarea').value.slice(cursor + 1, document.querySelector('textarea').value.length);
      document.querySelector('textarea').selectionEnd = cursor;
    }
    if (item.code === 'ArrowLeft') if (cursor !== 0) document.querySelector('textarea').selectionEnd = cursor - 1;
    if (item.code === 'ArrowRight') document.querySelector('textarea').selectionStart = cursor + 1;
    if (item.code === 'ArrowUp') document.querySelector('textarea').selectionEnd = 0;
    if (item.code === 'ArrowDown') document.querySelector('textarea').selectionStart = document.querySelector('textarea').value.length;
    if (item.code === 'Tab') {
      document.querySelector('textarea').value = `${document.querySelector('textarea').value.slice(0, cursor)}    ${document.querySelector('textarea').value.slice(cursor, document.querySelector('textarea').value.length)}`;
      document.querySelector('textarea').selectionEnd = cursor + 4;
    }
    if (item.type === 'write') {
      write(item);
    }
  } else if (item.code === 'Backspace' || item.code === 'Delete' || item.code === 'Tab' || item.code === 'Enter' || item.type === 'write') {
    cursor = document.querySelector('textarea').selectionStart;
    document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, document.querySelector('textarea').selectionStart) + document.querySelector('textarea').value.slice(document.querySelector('textarea').selectionEnd, document.querySelector('textarea').value.length);
    document.querySelector('textarea').selectionStart = cursor;
    document.querySelector('textarea').selectionEnd = cursor;
    if (item.code !== 'Backspace' && item.code !== 'Delete') { enterSymbols(item); }
  }
}


// PREPARATION

function keyFill(language) {
  localStorage.languageOfKeyboard = language;
  document.querySelector('.keyboard').innerHTML = '';
  objOfKeys.forEach((item) => {
    const key = document.createElement('div');
    key.className = `${item.size} ${item.code}`;
    if (language === 'eng') {
      if (item.view === 'double') {
        key.innerHTML = `<p class="upLetter">${item.shiftEngValue}</p>`;
        key.innerHTML += `<p class="centerLetter">${item.engValue}</p>`;
      } else key.innerHTML = `<p class="centerLetter">${item.shiftEngValue}</p>`;
    } else if (item.view === 'double') {
      key.innerHTML = `<p class="upLetter">${item.shiftRuValue}</p>`;
      key.innerHTML += `<p class="centerLetter">${item.ruValue}</p>`;
    } else key.innerHTML = `<p class="centerLetter">${item.shiftRuValue}</p>`;
    document.querySelector('.keyboard').append(key);
  });
}


function createBase() {
  const main = document.createElement('main');
  document.querySelector('body').prepend(main);
  const input = document.createElement('textarea');
  document.querySelector('main').prepend(input);
  const keyboard = document.createElement('section');
  keyboard.className = 'keyboard';
  document.querySelector('main').append(keyboard);
}

createBase();
document.querySelector('textarea').focus();
document.querySelector('textarea').setAttribute('placeholder', 'Keyboard designed for WINDOWS\nTo change the language click right shift and right alt!\nEnjoy ^__^');
document.querySelector('body').setAttribute('onselectstart', 'return false');


if (languageOfKeyboard === 'eng') {
  keyFill('eng');
} else {
  keyFill('ru');
}


// START OF EVENTS

document.querySelector('body').addEventListener('mousedown', (e) => {
  cursor = document.querySelector('textarea').selectionStart;
  const parent = e.target.parentElement;
  const elem = e.target;
  if (elem.tagName === 'DIV') elem.classList.add('buttonClick');
  else if (parent.tagName === 'DIV') parent.classList.add('buttonClick');
  objOfKeys.forEach((item) => {
    if (elem.classList.contains(item.code) || parent.classList.contains(item.code)) {
      if (elem.classList.contains('ShiftLeft') || parent.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight') || parent.classList.contains('ShiftRight')) pressShift = true;
      enterSymbols(item);
      window.event.preventDefault();
    }
  });
});


document.querySelector('body').addEventListener('mouseup', (e) => {
  const parent = e.target.parentElement;
  const elem = e.target;
  if (parent.classList.contains('buttonClick') || elem.classList.contains('buttonClick')) {
    if (elem.classList.contains('CapsLock') || parent.classList.contains('CapsLock')) {
      if (pressCaps) {
        if (elem.tagName === 'DIV') elem.classList.remove('buttonClick');
        else if (parent.tagName === 'DIV') parent.classList.remove('buttonClick');
      }
      pressCaps = (!pressCaps);
    } else {
      if (elem.tagName === 'DIV') elem.classList.remove('buttonClick');
      else if (parent.tagName === 'DIV') parent.classList.remove('buttonClick');
      if (elem.classList.contains('ShiftLeft') || parent.classList.contains('ShiftLeft') || elem.classList.contains('ShiftRight') || parent.classList.contains('ShiftRight')) pressShift = false;
      if (elem.classList.contains('language') || parent.classList.contains('language')) {
        document.querySelector('textarea').focus();
        if (localStorage.languageOfKeyboard === 'ru') {
          keyFill('eng');
        } else {
          keyFill('ru');
        }
      }
    }
  } else {
    document.querySelectorAll('div').forEach((key) => key.classList.remove('buttonClick'));
    document.querySelector('.CapsLock').classList.add('buttonClick');
    document.querySelector('textarea').focus();
  }
});


document.querySelector('body').addEventListener('keydown', (event) => {
  cursor = document.querySelector('textarea').selectionStart;
  objOfKeys.forEach((item) => {
    if (item.code === event.code) {
      document.querySelector(`.${item.code}`).classList.add('buttonClick');
      if (item.code === 'ShiftLeft') {
        changeLanguage[0] = true;
      } else if (item.code === 'AltLeft') {
        changeLanguage[1] = true;
      } else {
        changeLanguage[0] = false;
        changeLanguage[1] = false;
      }
      if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') pressShift = true;
      enterSymbols(item);
    }
  });
});


document.querySelector('body').addEventListener('keyup', (event) => {
  objOfKeys.forEach((item) => {
    if (item.code === event.code) {
      if (item.code === 'CapsLock') {
        if (pressCaps) {
          document.querySelector(`.${item.code}`).classList.remove('buttonClick');
        }
        pressCaps = !pressCaps;
      } else {
        document.querySelector(`.${item.code}`).classList.remove('buttonClick');
        if (item.code === 'CapsLock') pressCaps = (!pressCaps);
        if (item.code === 'ShiftLeft' || item.code === 'ShiftRight') pressShift = false;
        if ((item.code === 'ShiftLeft' || item.code === 'AltLeft') && (changeLanguage[0] === true && changeLanguage[1] === true)) {
          changeLanguage[0] = false;
          changeLanguage[1] = false;
          if (localStorage.languageOfKeyboard === 'ru') {
            keyFill('eng');
          } else {
            keyFill('ru');
          }
        }
      }
    }
  });
});
