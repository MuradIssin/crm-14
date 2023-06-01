'use strict';
console.warn('Модуль 4 Урок 11 -this Задача#1');

const randomTen = (ten = 10) => Math.round(Math.random() * ten);

function foo(numIncome = []) {
  numIncome.push(randomTen())
  if (numIncome.reduce((acc, item) => { return acc + item }, 0) >= 50) return numIncome;
  return foo(numIncome);
}
const arr = foo([])
console.log(arr);

