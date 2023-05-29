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
    return calculateItemPrice()
  }
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

const increaseCount = (add) => {
  cart.setCount = add;
  // cart.count = 999;
};

Object.defineProperty(cart, `setCount`, {
  set(val) {
    this.count += val;
  }
})

const add = (nameProduct, priceProduct, quantity = 1) => {
  const arrayGood = [nameProduct, priceProduct, quantity];
  cart.items[cart.items.length] = arrayGood;
  increaseCount(quantity);
};

const calculateItemPrice = () => {
  const newTotal = cart.items.reduce((acc, item) => {
    return item[1] + acc;
  }, 0)
  return (newTotal - newTotal * cart.discount / 100);
};

const clear = () => {
  cart.items = [];
  cart.totalPrice = 0;
  cart.count = 0;
};

const print = () => {
  console.log(`текущая корзина :`)
  cart.items.forEach((item) => {
    console.log(`${item[0]}  общая стоимость ${item[1]} количество ${item[2]}`)
  });
  console.log(`общая стоимость корзины ${cart.totalPrice} уе`)
};


// вызываем добавление товара
cart.setDiscount = "METHED";
add("good", 100, 20);
add("good2", 1, 200);
add("good3", 450);
add("good4", 45, 888);
add("good5", 450, 88);
// cart.setDiscount = "NEWYEAR";


print();

console.log("задание 11 урока модуль 4");
console.log(cart)
// cart.count = 55;
// console.log(cart.count);

// cart.totalPrice = 10;

// print();

// clear();
// print();

