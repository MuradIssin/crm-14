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

  const game = (language, maxPoint) => {
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
        console.log(`проверка`, computerBit, playerBit);
        switch (true) {
          case computerBit === playerBit: return message.draw;
          case (computerBit === 0) && (playerBit === 1): return computerWin();
          // камень и ножницы 1
          case (computerBit === 0) && (playerBit === 2): return playerWin();
          // камень и ножницы 1
          case (computerBit === 1) && (playerBit === 0): return playerWin();
          // ножницы и камень -1
          case (computerBit === 1) && (playerBit === 2): return computerWin();
          // ножницы и бумага  1
          case (computerBit === 2) && (playerBit === 0): return computerWin();
          // бумага и камень 1
          case (computerBit === 2) && (playerBit === 1): return playerWin();
          // бумага и ножницы -1
          // console(`ошибка`, computerBit, playerBit)
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

      if (result.player === maxPoint) return `player`;
      if (maxPoint === result.computer) return `computer`;
      console.log(maxPoint, result.player, result.computer)
      // start();

      if (confirm(message.again)) {
        start();
      } else {
        finishGame();
      }

    };
  };

  window.RPS = game;
})();


(() => {
  console.log(`marble game: start`);

  const marbleCount = {
    player: 5,
    bot: 5,
  };

  const gameMarble = (first) => {


    const currentCount = (text = ``) => {
      console.log(`текущий счет, ${text} `, marbleCount.player, marbleCount.bot);
    }

    const gameResult = () => {
      currentCount(`Твой ход`);

      if (marbleCount.player <= 0) {
        console.warn(`Вы проиграли`);
        alert(`Вы проиграли`);
        if (confirm(`давай сыграем еще раз?`)) {
          marbleCount.player = 5;
          marbleCount.bot = 5;
        } else {
          return 0;
        }

      }
      if (marbleCount.bot <= 0) {
        console.warn(`Вы выйграли`);
        alert(`Вы Выйграли`);
        if (confirm(`давай сыграем еще раз?`)) {
          marbleCount.player = 5;
          marbleCount.bot = 5;
        } else {
          return 0;
        }
      }
    }

    const inputBitPlayer = (maxMarble, message = ``) => {
      console.warn(`Игра твоя`);
      const bit = +prompt(`${message}введите количество шариков для игры от 1 до ${maxMarble}\n   БОТ:     ${marbleCount.bot} \n   у тебя : ${marbleCount.player}`);
      if (bit === 0) {
        if (confirm("хотите прервать игру?")) return 0
        else return inputBitPlayer(maxMarble, `продолжаем игру: \n`);
      };
      if ((bit > 0) && (bit <= maxMarble)) return bit;
      return inputBitPlayer(maxMarble, `введите корректное число\n`);
    };

    const guessNumber = (num, min = 0) => {
      return Math.round(Math.random() * (num - min)) + min;
    };

    const roundResultPlayer = () => {
      console.warn(`ход бота`);
      const bit = inputBitPlayer(marbleCount.player);
      if (bit === 0) return 0;

      if (bit % 2 === guessNumber(1)) {
        console.log(`Компьютер угадал`);
        alert(`Компьютер забрал твои шарики`);
        marbleCount.player -= bit;
        marbleCount.bot += bit;
      } else {
        console.log(`Компьютер не угадал `);
        alert(`Ты забрал шарики`);
        marbleCount.player += bit;
        marbleCount.bot -= bit;
      }

      return gameResult();
    }

    const evenOddEnter = (message = ``) => {
      return confirm(`${message} \n   БОТ:     ${marbleCount.bot} \n   у тебя : ${marbleCount.player}`)
    };

    const roundResultBot = () => {
      const playerGuess = evenOddEnter(`Угадай четное число? `);
      console.log(`Игрок - четное число?`, playerGuess);
      const botNumber = guessNumber(marbleCount.bot, 1);
      console.log(`Бот - четное число?`, botNumber);

      if (botNumber % 2 === playerGuess) {
        console.log(`Игрок угадал`);
        alert(`Ты забрал - ${botNumber} шар(ов)`);
        marbleCount.player += botNumber;
        marbleCount.bot -= botNumber;
      } else {
        console.log(`Игрок не угадал `);
        alert(`Бот забрал - ${botNumber} шар(ов)`);
        marbleCount.player -= botNumber;
        marbleCount.bot += botNumber;
      }
      return gameResult();
    }


    // if (maxPoint >= result.player) return `player`;
    // if (firstStep === `player`) {
    //   if (roundResultPlayer() === 0) return 0;
    // } else {
    //   if (roundResultBot() === 0) return 0
    // };

    if (first === `player`) {
      console.warn(`игра за Player`, first)
      if (roundResultPlayer() === 0) return 0
      else if (roundResultBot() === 0) return 0;
    } else {
      if (roundResultBot() === 0) return 0
      else if (roundResultPlayer() === 0) return 0;
    };


    // return gameMarble();
    // };



    // const firstRSP = window.RPS(`EN`, 1);
    // const first = firstRSP();
    // console.log(`кто первый?`, first);

    // if (first === undefined) {
    // console.log(`основная игра так и не началась `)
    // }



    // else {
    //   if (first === `player`) {
    //     console.log(`первый играет игрок`)
    //     // if (roundResultPlayer() === 0) return 0;
    //   }
    // }





    // if (roundResultBot() === 0) return 0;
    return gameMarble();
  }


  window.marble = gameMarble;
})();
