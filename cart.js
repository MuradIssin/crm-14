'use strict'
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 11 ', rainbow);

console.warn('Задание 2 задача 2 ');

const cart = {
  items: [], //товары
  totalPrice: 0, // общая стоимость товаров
  count: 0, //количество товаров
  discount: 9,

  setDiscount: function (val) {
    this.discount = 0;
    if (val.toUpperCase() === "METHED") this.discount = 15;
    if (val.toUpperCase() === "NEWYEAR") this.discount = 21;
  },

  getTotalPrice: function () {
    return cart.calculateItemPrice();
  },

  setTotalPrice: function (val) {
    this.totalPrice = val;
  },

  printCart: function () {
    console.log(`текущая корзина :`)
    this.items.forEach((item) => {
      console.log(`${item[0]}  общая стоимость ${item[1]} количество ${item[2]}`)
    });
    console.log(`общая стоимость корзины ${this.getTotalPrice()} уе`)
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>`)
  },

  // increaseCount: function (addValue) {
  //   this.count += addValue;
  // },

  addToCart: function (nameProduct, priceProduct, quantity = 1) {
    // const arrayGood = [nameProduct, priceProduct, quantity];
    this.items[cart.items.length] = [nameProduct, priceProduct, quantity];
    // this.increaseCount = quantity;
    this.count += quantity;
  },

  calculateItemPrice: function () {
    const newTotal = this.items.reduce((acc, item) => {
      return item[1] + acc;
    }, 0);
    cart.setTotalPrice(newTotal - newTotal * cart.discount / 100);
    return (newTotal - newTotal * cart.discount / 100);
  },

  setCount: function (val) {
    this.count = val;
  },

  clear: function () {
    this.items = [];
    this.setTotalPrice(0);
    this.setCount(0);

    // this.count = 0;
    // this.totalPrice = 0;
  },

}

Object.defineProperty(cart, 'discount', {
  configurable: false, //запрет на удаление
  enumerable: false, // запрет на отображение
  // writable: false, // запрет на изменение
});

Object.defineProperty(cart, `item`, {
  configurable: false, //запрет на удаление
  enumerable: false, // запрет на отображение
  writable: false, // запрет на изменение
});

Object.defineProperty(cart, `totalPrice`, {
  configurable: false, //запрет на удаление
  enumerable: false, // запрет на отображение
  // writable: false, // запрет на изменение
});

Object.defineProperty(cart, `count`, {
  configurable: false, //запрет на удаление
  enumerable: false, // запрет на отображение
  // writable: false, // запрет на изменение
})


// cart.add = function (nameProduct, priceProduct, quantity = 1) {
//   const arrayGood = [nameProduct, priceProduct, quantity];
//   this.items[cart.items.length] = arrayGood;
//   this.increaseCount = quantity;
// };

// cart.calculateItemPrice = function () {
//   const newTotal = this.items.reduce((acc, item) => {
//     return item[1] + acc;
//   }, 0)
//   return (newTotal - newTotal * cart.discount / 100);
// };

// cart.clear = function () {
//   this.items = [];
//   this.setTotalPrice = 0;
//   this.count = 0;
// };


// вызываем добавление товара
// cart.setDiscount = "METHED";

cart.setDiscount("Methed");

cart.addToCart("good", 100, 20);
cart.addToCart("good2", 1, 200);
cart.addToCart("good3", 450);
cart.addToCart("good4", 45, 888);
cart.addToCart("good5", 450, 88);
// cart.setDiscount = "NEWYEAR";

cart.printCart();

console.log("тест ---- задание 11 урока модуль 4");
console.log(cart);
// cart.count = 55;
// console.log(cart.count);

// cart.totalPrice = 10;

// print();

console.log(">>>>>>>>>   чистка корзины");
cart.clear();
cart.setDiscount("NEAR");
cart.printCart();
console.log(cart);
