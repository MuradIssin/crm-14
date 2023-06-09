'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const MESSAGE_ENG = {
    result: `Result`,
    computer: `Computer`,
    player: `Player`,
    computerWin: `Computer Win`,
    youWin: `You WIN`,
    finishGameQuestion: `are you really want to out game?`,
    again: `again?`,
    you: `You`,
    draw: `draw`,
  };

  const MESSAGE_RUS = {
    result: `Результат`,
    computer: `Компьютер`,
    player: `Игрок`,
    computerWin: `Компьютер Выйграл`,
    youWin: `Вы Выйграли`,
    finishGameQuestion: `точно ты хочешь выйти?`,
    again: `eщё?`,
    you: `Вы`,
    draw: `ничья`,
  };

  // const MESSAGE_RUS = ['rock', 'scissors', 'paper'];

  const getRandomIntclusive = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  // const getFifure = lang => {
  // };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    // language = `EN`; //выбор языка общения
    const lang = language === `EN` || language === `ENG` ?
      FIGURES_ENG : FIGURES_RUS;

    const message = language === `EN` || language === `ENG` ?
      MESSAGE_ENG : MESSAGE_RUS;

    console.log(language, lang, message);

    return function start() {
      const finishGame = () => {
        alert(` ${message.result}: 
          ${message.computer} ${result.computer} 
          ${message.player} ${result.player} `);
      };

      const findBit = (playerBitText) => {
        // console.log(playerBitText);
        if (+playerBitText === 1) return 0;
        if (+playerBitText === 2) return 1;
        if (+playerBitText === 3) return 2;
        if (playerBitText !== '') {
          if (lang[0][0].toUpperCase() === playerBitText[0].toUpperCase()) {
            return 0;
          }
          if (lang[1][0].toUpperCase() === playerBitText[0].toUpperCase()) {
            return 1;
          }
          if (lang[2][0].toUpperCase() === playerBitText[0].toUpperCase()) {
            return 2;
          }
        }
        return -1;
      };

      const computerWin = () => {
        result.computer += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return message.computerWin;
      };

      const playerWin = () => {
        result.player += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return message.youWin;
      };

      const whoWin = (computerBit, playerBit) => {
        switch (true) {
          case computerBit === playerBit: return message.draw;
          case (computerBit === 0) && (playerBit === 1): return computerWin();
          // камень и ножницы 1
          case (computerBit === 1) && (playerBit === 0): return playerWin();
          // ножницы и камень -1
          case (computerBit === 1) && (playerBit === 2): return computerWin();
          // ножницы и бумага  1
          case (computerBit === 2) && (playerBit === 0): return computerWin();
          // бумага и камень 1
          case (computerBit === 2) && (playerBit === 1): return playerWin();
          // бумага и ножницы -1
          default: return `нет данных`;
        }
      };

      console.warn(`lets PLAY`);
      const computerBit = getRandomIntclusive(0, 3);
      console.log(`ставка компьютера: `, lang[computerBit]);

      const playerBitText = prompt(`1-${lang[0]}, 2-${lang[1]}, 3-${lang[2]}?`);

      if (playerBitText === null) {
        console.log('игра отменена?');
        if (confirm(message.finishGameQuestion)) {
          finishGame();
        } else {
          game();
        }
        return;
      }

      if (playerBitText === '') {
        start();
      }

      const playerBit = findBit(playerBitText);
      // console.log(playerBit);
      console.log(`ставка игрока:`, lang[playerBit]);

      const winner = whoWin(computerBit, playerBit);
      console.log(lang[computerBit], lang[playerBit], winner);

      if (playerBit >= 0) {
        alert(` ${message.computer}: ${lang[computerBit]} 
         ${message.you}:  ${lang[playerBit]} \n  ${winner}`);
      }

      if (confirm(message.again)) {
        start();
      } else {
        finishGame();
      }
    };
  };

  window.RPS = game;
})();
