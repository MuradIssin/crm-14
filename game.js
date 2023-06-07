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
      console.warn(`lets PLAY`);
      // let

      // const computerBit = Math.round(Math.random() * 2);
      const computerBit = getRandomIntclusive(0, 2);

      console.log(`ставка компьютера: `, FIGURES_RUS[computerBit], computerBit + 1);

      const playerBitText = prompt("1-Камень, 2-Ножницы, 3-Бумага");
      if (playerBitText === null) {
        console.log("игра отменена");
        alert(`Вы отменили игру`);
        return;
      }

      const playerBit = +playerBitText - 1;
      console.log(`ставка игрока:`, FIGURES_RUS[playerBit], playerBit + 1);


      const whoWin = (computerBit, playerBit) => {
        if (computerBit === playerBit) return `ничья`;
        if ((computerBit === 0) && (playerBit === 1)) return computerWin();//камень и ножницы 1
        if ((computerBit === 0) && (playerBit === 2)) return playerWin();//камень и бумага -1
        if ((computerBit === 1) && (playerBit === 0)) return playerWin();//ножницы и камень -1
        if ((computerBit === 1) && (playerBit === 2)) return computerWin();//ножницы и бумага  1 
        if ((computerBit === 2) && (playerBit === 0)) return computerWin();//бумага и камень 1 
        if ((computerBit === 2) && (playerBit === 1)) return playerWin();//бумага и ножницы -1
      }

      const computerWin = () => {
        result.computer += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return `compWin`;
      }

      const playerWin = () => {
        result.player += 1;
        console.log(`текущий счет `, result.computer, result.player);
        return `playerWin`;
      }

      console.log(`содержит текст: `, lang.includes(playerBitText))



      lang.forEach((value, index) => {
        console.log(value.indexOf(playerBitText));
        if (value.indexOf(playerBitText) >= 0) return index;
      });



      console.log(lang[computerBit], lang[playerBit], whoWin(computerBit, playerBit));


      // запускаем еще раз игру
      start();
    }
  }

  window.RPS = game;
})()
