const modalTitle = document.querySelector('.modal__title').
  innerHTML;
const modalForm = document.querySelector('.modal__set').innerHTML;
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


console.log(modalTitle, modalCheckDiscount);
console.log(modalCheckDiscount.checked);
console.log(modalTextDiscount.innerHTML);
console.log(modalTotalAmount.innerHTML);
console.log(modalId.innerHTML)