import create from './utils/create.js'
export default function createBase() {
    const body = document.querySelector('body');
    const textarea = create('textarea',null,null,null,['placeholder', 'Keyboard designed for WINDOWS\nTo change the language click right shift and right alt!\nEnjoy ^__^'])
    const section = create('section', 'keyboard');
    const main = create('main',null,[textarea,section],body);
    textarea.focus();
    body.setAttribute('onselectstart', 'return false');
}
  