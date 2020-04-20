import create from './utils/create.js'
import vars from './variables.js';

export default function createBase() {
    const body = document.querySelector('body');
    vars.field = create('textarea',null,null,null,['placeholder', 'Keyboard designed for WINDOWS\nTo change the language click right shift and right alt!\nEnjoy ^__^'])
    vars.keyboard = create('section', 'keyboard');
    const main = create('main',null,[vars.field,vars.keyboard],body);
    vars.field.focus();
    body.setAttribute('onselectstart', 'return false');
}
  