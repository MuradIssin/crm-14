const modalTitle = document.querySelector('.modal__title').
  innerHTML;
const modalForm = document.querySelector('.modal__form');
const modalCheckDiscount = document.querySelector
  ('.set__checkbox');
const modalTextDiscount = document.querySelector
  ('.set__input-discount');
const modalTotalAmount = document.querySelector
  ('.set__total-amount');
const modalClose = document.querySelector
  ('.modal__close-button');
const modalId = document.querySelector
  ('.modal__id');


// console.log(modalTitle, modalCheckDiscount);
// console.log(modalCheckDiscount.checked);
// console.log(modalTextDiscount.innerHTML);
// console.log(modalTotalAmount.innerHTML);
// console.log(modalId.innerHTML);
// console.log(modalForm);

const arrayExample = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]




// "id": 253842678,
// "title": "Смартфон Xiaomi 11T 8/128GB",
// "category": "mobile-phone",
// "units": "шт",
// "count": 3,
// "price": 27000,

// "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
// "discont": false,
// "images": {
//   "small": "img/smrtxiaomi11t-m.jpg",
//   "big": "img/smrtxiaomi11t-b.jpg"


const createRow = (arrayObject) => {
  // Создайте функцию createRow, которая будет получать объект и на основе объекта формировать элемент <tr> с <td> внутри

  console.log("новая функция");
  // console.log(arrayObject.id);
  // console.log(arrayObject.title);

  const row = document.createElement("tr");

  const tdId = document.createElement("td");
  const tdTitle = document.createElement("td");

  const textId = document.createTextNode(arrayObject.id);
  const textTitle = document.createTextNode(arrayObject.title);

  tdId.appendChild(textId);
  tdTitle.appendChild(textTitle);

  row.appendChild(tdId);
  row.appendChild(tdTitle);


  return row
}

console.log(arrayExample);
console.log(createRow(arrayExample[0]));