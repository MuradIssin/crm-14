`use strict`;

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getFifure = lang => {

  };

  const game = (language) => {

    const result = {
      player: 0,
      computer: 0,
    };

    // language = `EN`; //выбор языка общения
    const lang = language === `EN` || language === `ENG` ? FIGURES_ENG : FIGURES_RUS;
    // console.log(lang[0]);

    return function start() {

      const finishGame = () => {
        alert(` Результат: \n   Компьютер ${result.computer}  \n   Игрок ${result.player} `);
      }

      const findBit = (playerBitText) => {
        // console.log(playerBitText);
        if (+playerBitText === 1) return 0;
        if (+playerBitText === 2) return 1;
        if (+playerBitText === 3) return 2;
        if (playerBitText !== '') {
          if (lang[0][0].toUpperCase() === playerBitText[0].toUpperCase()) return 0;
          if (lang[1][0].toUpperCase() === playerBitText[0].toUpperCase()) return 1;
          if (lang[2][0].toUpperCase() === playerBitText[0].toUpperCase()) return 2;
        }
        return -1;
      }

      const whoWin = (computerBit, playerBit) => {
        switch (true) {
          case computerBit === playerBit: return `ничья`;
          case (computerBit === 0) && (playerBit === 1): return computerWin();//камень и ножницы 1
          case (computerBit === 1) && (playerBit === 0): return playerWin();//ножницы и камень -1
          case (computerBit === 1) && (playerBit === 2): return computerWin();//ножницы и бумага  1 
          case (computerBit === 2) && (playerBit === 0): return computerWin();//бумага и камень 1 
          case (computerBit === 2) && (playerBit === 1): return playerWin();//бумага и ножницы -1
          default: return `нет данных`
        }
        // if (computerBit === playerBit) return `ничья`;
        // if ((computerBit === 0) && (playerBit === 1)) return computerWin();//камень и ножницы 1
        // if ((computerBit === 0) && (playerBit === 2)) return playerWin();//камень и бумага -1
        // if ((computerBit === 1) && (playerBit === 0)) return playerWin();//ножницы и камень -1
        // if ((computerBit === 1) && (playerBit === 2)) return computerWin();//ножницы и бумага  1 
        // if ((computerBit === 2) && (playerBit === 0)) return computerWin();//бумага и камень 1 
        // if ((computerBit === 2) && (playerBit === 1)) return playerWin();//бумага и ножницы -1
      }

      const computerWin = () => {
        result.computer += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return `Компьютер Выйграл`;
      }

      const playerWin = () => {
        result.player += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return `Вы Выйграли`;
      }

      console.warn(`lets PLAY`);
      const computerBit = getRandomIntclusive(0, 3);
      console.log(`ставка компьютера: `, lang[computerBit]);

      const playerBitText = prompt("1-Камень, 2-Ножницы, 3-Бумага?");

      if (playerBitText === null) {
        console.log("игра отменена");
        finishGame();
        // alert(`Результат: \n   Компьютер ${result.computer}  \n   Игрок ${result.player} `);
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

      if (playerBit >= 0) alert(` Компьютер: ${lang[computerBit]} \n Вы:  ${lang[playerBit]} \n  ${winner}`);

      if (confirm(`eщё?`)) {
        start();
      } else {
        // alert(` Результат: \n   Компьютер ${result.computer}  \n   Игрок ${result.player} `);
        finishGame();
        // return
      }

    }
  }

  window.RPS = game;
})()
