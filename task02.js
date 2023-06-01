'use strict';

const rectangle = {
  width: 5,
  height: 5,

  // setDiscount: function (val) {

  setWidth: function (val) {
    if (Number.isFinite(+val)) {
      this.width = +val;
    } else {
      this.width = 5;
    }
  },

  setHeight: function (val) {
    if (Number.isFinite(+val)) {
      this.height = +val;
    } else {
      this.height = 5;
    }
  },

  square: function () {
    return `${this.width * this.height}см.кв.`;
  },

  perimeter: function () {
    return `${(this.width + this.height) * 2}см`;
  },

};


rectangle.setWidth("10");
rectangle.setHeight("15");
console.log(rectangle.square());
console.log(rectangle.perimeter());
console.log("текущее значение ширины и высоты ", rectangle)

