'use strict'
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 11 ', rainbow);

console.warn('Задание 2 задача 2 ');

const cart = {
  items: [], //товары
  totalPrice: 0, // общая стоимость товаров
  count: 0, //количество товаров
  discount: 0,
}

Object.defineProperty(cart, `discount`, {
  // configurable: true, //запрет на удаление
  enumerable: false, // запрет на отображение
  // writable: false, // запрет на изменение
})

Object.defineProperty(cart, 'setDiscount', {
  set(val) {
    if (val === "METHED") this.discount = 15;
    if (val === "NEWYEAR") this.discount = 21;
  }
});

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return cart.calculateItemPrice()
  },
  // set(val) {
  //   return cart.totalPrice = val;
  // }
});

Object.defineProperty(cart, `item`, {
  // configurable: true, //запрет на удаление
  enumerable: false, // запрет на отображение
  writable: false, // запрет на изменение
});

Object.defineProperty(cart, `toralPrice`, {
  // configurable: true, //запрет на удаление
  enumerable: false, // запрет на отображение
  writable: false, // запрет на изменение
});

Object.defineProperty(cart, `count`, {
  // configurable: true, //запрет на удаление
  enumerable: false, // запрет на отображение
  // writable: false, // запрет на изменение
})

cart.increaseCount = function (add) {
  this.setCount = add;
  // cart.count = 999;
};

Object.defineProperty(cart, `setCount`, {
  set(val) {
    this.count += val;
  }
})

cart.add = function (nameProduct, priceProduct, quantity = 1) {
  const arrayGood = [nameProduct, priceProduct, quantity];
  this.items[cart.items.length] = arrayGood;
  this.increaseCount(quantity);
};

cart.calculateItemPrice = function () {
  const newTotal = this.items.reduce((acc, item) => {
    return item[1] + acc;
  }, 0)
  return (newTotal - newTotal * cart.discount / 100);
};

cart.clear = function () {
  cart.items = [];
  cart.totalPrice = 0;
  cart.count = 0;
};

cart.print = function () {
  console.log(`текущая корзина :`)
  this.items.forEach((item) => {
    console.log(`${item[0]}  общая стоимость ${item[1]} количество ${item[2]}`)
  });
  console.log(`общая стоимость корзины ${this.totalPrice} уе`)
  console.log(`>>>>>>>>>>>>>>>>>>>>>>>`)
};


// вызываем добавление товара
cart.setDiscount = "METHED";
cart.add("good", 100, 20);
cart.add("good2", 1, 200);
cart.add("good3", 450);
cart.add("good4", 45, 888);
cart.add("good5", 450, 88);
// cart.setDiscount = "NEWYEAR";


cart.print();

console.log("тест ---- задание 11 урока модуль 4");
console.log(cart)
// cart.count = 55;
// console.log(cart.count);

// cart.totalPrice = 10;

// print();

// cart.clear();
cart.print();

