'use strict';

const rectangle = {
  // width: 2,
  // height: 2,

  set setWidth(val = 5) {
    if (Number.isFinite(+val)) {
      this.width = +val;
    } else {
      this.width = 5;
    }
  },

  set setHight(val = 5) {
    if (Number.isFinite(+val)) {
      this.height = +val;
    } else {
      this.height = 5;
    }
  },

  get square() {
    return `${this.width * this.height}см.кв.`;
  },

  get perimeter() {
    return `${(this.width + this.height) * 2}см`;
  },

};


rectangle.setWidth = "10";
rectangle.setHight = "15";
console.log(rectangle.square);
console.log(rectangle.perimeter);
console.log("текущее значение ширины и высоты ", rectangle)

