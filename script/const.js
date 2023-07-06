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




const createRow = (arrayObject) => {
  console.log(arrayObject);
  // console.log("старая функция -createRow");

  const row = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdTitle = document.createElement("td");
  const tdCategory = document.createElement("td");
  const tdUnits = document.createElement('td');
  const tdCount = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdTotal = document.createElement("td");

  // добавление класса
  tdUnits.classList.add('cell__center');
  tdCount.classList.add('cell__center');
  tdPrice.classList.add('cell__right');
  tdTotal.classList.add('cell__right');

  const textId = document.createTextNode(arrayObject.id);
  const textTitle = document.createTextNode(arrayObject.title);
  const textCategory = document.createTextNode(arrayObject.category);
  const textUnits = document.createTextNode(arrayObject.units);
  const textCount = document.createTextNode(arrayObject.count);
  const textPrice = document.createTextNode(`$${arrayObject.price}`);
  const textTotal = document.createTextNode(`$${arrayObject.price * arrayObject.count}`);

  tdId.append(textId);
  tdTitle.append(textTitle);
  tdCategory.append(textCategory);
  tdUnits.append(textUnits);
  tdCount.append(textCount);
  tdPrice.append(textPrice);
  tdTotal.append(textTotal);

  row.appendChild(tdId);
  row.appendChild(tdTitle);
  row.appendChild(tdCategory);
  row.appendChild(tdUnits);
  row.appendChild(tdCount);
  row.appendChild(tdPrice);
  row.appendChild(tdTotal);

  const tdWrapper = document.createElement("td");
  const div = document.createElement("div");
  const buttonImage = document.createElement("button");
  const buttonEditable = document.createElement("button");
  const buttonDelete = document.createElement("button");
  const divCellButton = document.createElement("div");
  divCellButton.classList.add('cell_button');

  divCellButton.appendChild(buttonImage);
  divCellButton.appendChild(buttonEditable);
  divCellButton.appendChild(buttonDelete);
  buttonImage.classList.add('cell__no-image');
  buttonEditable.classList.add('cell__editable');
  buttonDelete.classList.add('cell__delete');

  tdWrapper.appendChild(divCellButton)
  const textButton = document.createTextNode(tdWrapper);

  row.appendChild(tdWrapper);

  return row
}

// 2. Создайте функцию renderGoods, принимает один параметр массив с объектами
// Функция renderGoods перебирает массив и вставляет строки, созданные на основе createRow, в таблицу (советую использовать метод map)


const delLastRows = () => {
  if (rows.lastElementChild !== null) rows.removeChild(rows.lastElementChild)
}

const clearAllRows = () => {
  while (rows.lastElementChild !== null) delLastRows()
}


const renderGoods = (goods) => {

  console.log("renderGoods - start");
  clearAllRows();

  console.log("Длина массива ввода - ", goods.length)

  // for (let i = 0; i < goods.length; i++) {
  //   rows.appendChild(createRow(arrayExample[i]));
  // }

  const newRows = goods.map((item)({
    // rows.appendChild(createRow(arrayExample.item));
    createRow(arrayExample.item)
    return item

}))

  newRows()

}


const rows = document.querySelector('.table__data');
console.log(arrayExample);
renderGoods(arrayExample);
