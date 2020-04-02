 const objOfKeys =  [ {
        code: 'Backquote',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: 'Ё',
        engValue: '`',
        shiftRuValue: '',
        shiftEngValue: '~'
    },
    {
        code: 'Digit1',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '1',
        engValue: '1',
        shiftRuValue: '!',
        shiftEngValue: '!'
    },
    {
        code: 'Digit2',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '2',
        engValue: '2',
        shiftRuValue: '"',
        shiftEngValue: '@'
    },
    { 
        code: 'Digit3',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '3',
        engValue: '3',
        shiftRuValue: '№',
        shiftEngValue: '#'
    },
    {
        code: 'Digit4',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '4',
        engValue: '4',
        shiftRuValue: ';',
        shiftEngValue: '$'
    },
    {
        code: 'Digit5',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '5',
        engValue: '5',
        shiftRuValue: '%',
        shiftEngValue: '%'
    },
    {
        code: 'Digit6',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '6',
        engValue: '6',
        shiftRuValue: ':',
        shiftEngValue: '^'
    },
    {
        code: 'Digit7',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '7',
        engValue: '7',
        shiftRuValue: '?',
        shiftEngValue: '&'
    },
    {
        code: 'Digit8',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '8',
        engValue: '8',
        shiftRuValue: '*',
        shiftEngValue: '*'
    },
    {
        code: 'Digit9',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '9',
        engValue: '9',
        shiftRuValue: '(',
        shiftEngValue: '('
    },
    {
        code: 'Digit0',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '0',
        engValue: '0',
        shiftRuValue: ')',
        shiftEngValue: ')'
    },
    {   
        code: 'Minus',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '-',
        engValue: '-',
        shiftRuValue: '_',
        shiftEngValue: '_'
    },
    {
        code: 'Equal',
        view: 'double',
        type: 'write',
        size: 'normal',
        ruValue: '=',
        engValue: '=',
        shiftRuValue: '+',
        shiftEngValue: '+'
    },
    {
        code: 'Backspace',
        type: "сontrol",
        size: 'backspace',
        shiftRuValue: 'Backspace',
        shiftEngValue: 'Backspace'
    },
    {
        code: 'Tab',
        type: 'control',
        size: 'tabDel',
        shiftRuValue: 'Tab',
        shiftEngValue: 'Tab'
    },
    {
        code: 'KeyQ',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Й',
        shiftEngValue: 'Q'
    },
    {
        code: 'KeyW',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ц',
        shiftEngValue: 'W'
    },
    {
        code: 'KeyE',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'У',
        shiftEngValue: 'E'
    },
    {
        code: 'KeyR',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'К',
        shiftEngValue: 'R'
    },
    {
        code: 'KeyT',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Е',
        shiftEngValue: 'T'
    },
    {
        code: 'KeyY',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Н',
        shiftEngValue: 'Y'
    },
    {
        code: 'KeyU',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Г',
        shiftEngValue: 'U'
    },
    {
        code: 'KeyI',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ш',
        shiftEngValue: 'I'
    },
    {
        code: 'KeyO',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Щ',
        shiftEngValue: 'O'
    },
    {
        code: 'KeyP',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'З',
        shiftEngValue: 'P'
    },
    {
        code: 'BracketLeft',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Х',
        engValue: '[',
        shiftRuValue: '',
        shiftEngValue: '{'
    },
    {
        code: 'BracketRight',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Ъ',
        engValue: ']',
        shiftRuValue: '',
        shiftEngValue: '}'
    },
    {
        code: 'Backslash',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: '\\',
        engValue: '\\',
        shiftRuValue: '|',
        shiftEngValue: '|'
    },
    {
        code: 'Delete',
        type: 'control',
        size: 'tabDel',
        shiftRuValue: 'DEL',
        shiftEngValue: 'DEL'
    },
    {
        code: 'CapsLock',
        type: 'control',
        size: 'capsLShift',
        shiftRuValue: 'CapsLock',
        shiftEngValue: 'CapsLock'
    },
    {
        code: 'KeyA',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ф',
        shiftEngValue: 'A'
    },
    {
        code: 'KeyS',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ы',
        shiftEngValue: 'S'
    },
    {
        code: 'KeyD',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'В',
        shiftEngValue: 'D'
    },
    {
        code: 'KeyF',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'А',
        shiftEngValue: 'F'
    },
    {
        code: 'KeyG',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'П',
        shiftEngValue: 'G'
    },
    {
        code: 'KeyH',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Р',
        shiftEngValue: 'H'
    },
    {
        code: 'KeyJ',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'О',
        shiftEngValue: 'J'
    },
    {
        code: 'KeyK',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Л',
        shiftEngValue: 'K'
    },
    {
        code: 'KeyL',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Д',
        shiftEngValue: 'L'
    },
    {
        code: 'Semicolon',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Ж',
        engValue: ';',
        shiftRuValue: '',
        shiftEngValue: ':'
    },
    {
        code: 'Quote',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Э',
        engValue: `'`,
        shiftRuValue: '',
        shiftEngValue: '"'
    },
    {
        code: 'Enter',
        type: 'control',
        size: 'enterRShift',
        shiftRuValue: 'Enter',
        shiftEngValue: 'Enter'
    },
    {
        code: 'ShiftLeft',
        type: 'control',
        size: 'capsLShift',
        shiftRuValue: 'Shift',
        shiftEngValue: 'Shift'
    },
    {
        code: 'KeyZ',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Я',
        shiftEngValue: 'Z'
    },
    {
        code: 'KeyX',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ч',
        shiftEngValue: 'X'
    },
    {
        code: 'KeyC',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'С',
        shiftEngValue: 'C'
    },
    {
        code: 'KeyV',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'М',
        shiftEngValue: 'V'
    },
    {
        code: 'KeyB',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'И',
        shiftEngValue: 'B'
    },
    {
        code: 'KeyN',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Т',
        shiftEngValue: 'N'
    },
    {
        code: 'KeyM',
        type: 'write',
        size: 'normal',
        shiftRuValue: 'Ь',
        shiftEngValue: 'M'
    },
    {
        code: 'Comma',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Б',
        engValue: ',',
        shiftRuValue: '',
        shiftEngValue: '<'
    },
    {
        code: 'Period',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: 'Ю',
        engValue: '.',
        shiftRuValue: '',
        shiftEngValue: '>'
    },
    {
        code: 'Slash',
        type: 'write',
        size: 'normal',
        view: 'double',
        ruValue: '.',
        engValue: '/',
        shiftRuValue: ',',
        shiftEngValue: '?'
    },
    {
        code: 'ArrowUp',
        type: 'control',
        size: 'normal',
        shiftRuValue: '△',
        shiftEngValue: '△'
    },
    {
        code: 'ShiftRight',
        type: 'control',
        size: 'enterRShift',
        shiftRuValue: 'Shift',
        shiftEngValue: 'Shift'
    },
    {
        code: 'ControlLeft',
        type: 'control',
        size: 'ctrl',
        shiftRuValue: 'Ctrl',
        shiftEngValue: 'Ctrl'
    },
    {
        code: 'MetaLeft',
        type: 'control',
        size: 'normal',
        shiftRuValue: 'Win',
        shiftEngValue: 'Win'
    },
    {
        code: 'AltLeft',
        type: 'control',
        size: 'normal',
        shiftRuValue: 'Alt',
        shiftEngValue: 'Alt'
    },
    {
        code: 'Space',
        type: 'write',
        size: 'space',
        shiftRuValue: ' ',
        shiftEngValue: ' '
    },
    {
        code: 'AltRight',
        type: 'control',
        size: 'normal',
        shiftRuValue: 'Alt',
        shiftEngValue: 'Alt'
    },
    {
        code: 'ControlRight',
        type: 'control',
        size: 'ctrl',
        shiftRuValue: 'Ctrl',
        shiftEngValue: 'Ctrl'
    },
    {
        code: 'ArrowLeft',
        type: 'control',
        size: 'normal',
        shiftRuValue: '◁',
        shiftEngValue: '◁'
    },
    {
        code: 'ArrowDown',
        type: 'control',
        size: 'normal',
        shiftRuValue: '▽',
        shiftEngValue: '▽'
    },
    {
        code: 'ArrowRight',
        type: 'control',
        size: 'normal',
        shiftRuValue: '▷',
        shiftEngValue: '▷'
    },
    {
        code: '',
        type: 'control',
        size: 'language',
        shiftRuValue: 'EN',
        shiftEngValue: 'RU'
    }





];

export default objOfKeys;