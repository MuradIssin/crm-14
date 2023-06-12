'use strict';

const startGame = window.RPS(`EN`, 1);

let first = startGame();
console.log(first);

if (first === undefined) {
  alert(`основной игры не будет`);
} else if (first === `player`) {
  alert(`Первый ход за Вами`);
  window.marble(first);
} else if (first === `computer`) {
  alert(`Первый ход за ботом`);
  window.marble(first);
}
