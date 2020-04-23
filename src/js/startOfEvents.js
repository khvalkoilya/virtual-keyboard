import * as events from './events.js';

export default function start() {
  document.querySelector('body').addEventListener('mousedown', (e) => events.mouseDownFunction(e));
  document.querySelector('body').addEventListener('mouseup', (e) => events.mouseUpFunction(e));
  document.querySelector('body').addEventListener('keydown', (event) => events.keyDownFunction(event));
  document.querySelector('body').addEventListener('keyup', (event) => events.keyUpFunction(event));
}
