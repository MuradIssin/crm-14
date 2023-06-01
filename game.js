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

    const lang = language === `EN` || language === `ENG` ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      console.log(`lets GO`)
    }
  }

  window.RPS = game;
})()
