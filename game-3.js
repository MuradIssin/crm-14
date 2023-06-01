'use strict'
console.warn('Модуль 4 Урок 11 Задача#1');

// const input1 = 50;
// const input2 = 100;

const input1 = +prompt("Игра 2: введите первое число ОТ");
const input2 = +prompt("Игра 2: введите второе число ДО");


const inputMin = Math.min(input1, input2);
const inputMax = Math.max(input1, input2);

console.log("диапозон чисел", inputMin, inputMax);

const guessNumber3 = (Math.round(Math.random() * (inputMax - inputMin)) + 1 + inputMin);
let maxTry = Math.round((inputMax - inputMin) * 30 / 100);
console.log(`загаданное число в диапозоне от ${inputMin} до ${inputMax} - это  ${guessNumber3}, количество попыток у Вас ${maxTry}`);

const tryArray = [];
let tryAnswer;


// console.log(tryAnswer);

let direction = '';
// guessNumberRecursion
function guessNumberRecursion() {
  tryAnswer = prompt(`${direction} угадай число от ${inputMin} до ${inputMax}, количество попыток ${maxTry}`);

  if (tryAnswer === null) {
    console.log("игра отменена");
    alert(`Вы отменили игру`)
    return;
  }

  tryAnswer = +tryAnswer; // перевел струку в число

  if (Number.isFinite(tryAnswer)) {

    // console.log("цикл", i, "введено число", +tryAnswer, "попыток осталось", maxTry, "попытки", tryArray);

    if (guessNumber3 === tryAnswer) {
      console.log(`Вы угадали, все Правильно! ${guessNumber3}`);
      alert(`Вы угадали! Правильный ответ : ${tryAnswer}`)
      return;
    }

    if (maxTry <= 0) {
      console.log(`количество попыток  ${maxTry}, вы проиграли`);
      return;
    }

    if (+tryAnswer > guessNumber3) {
      console.log("Меньше!");
      direction = 'Меньше!';
    }

    if (+tryAnswer < guessNumber3) {
      console.log("Больше!");
      direction = 'Больше!';
    }

    //     // console.log("найдено", tryArray.find((element) => element === +tryAnswer));
    if (tryArray.find((element) => element === tryAnswer) === undefined) {
      tryArray.push(tryAnswer);
      maxTry -= 1;
    } else {
      console.log("это число вы уже вводили");
      direction += ` и это, ты это число ${tryAnswer} уже вводил, `;
    }
  }
  guessNumberRecursion();
}



guessNumberRecursion();


