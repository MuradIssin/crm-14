'use strict';
console.warn('Модуль 4 Урок 11 -this Задача#1');

const randomTen = (ten = 10) => Math.round(Math.random() * ten);

function foo(numIncome = []) {
  // console.log(numIncome);
  numIncome.push(randomTen())
  if (numIncome.reduce((acc, item) => { return acc + item }, 0) >= 50) {
    // console.log(numIncome);
    // return [1, 2, 3]
    return numIncome;
  }
  return foo(numIncome);
}

// console.log(randonTen())
const arr = foo([])
// console.log(`задача #2 - ${foo([])}`);
console.log(arr);
