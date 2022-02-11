'use strict';

class Rectangle {
    constructor(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }

    calcArea() {
        return this.heigth * this.width;
    }
}

class coloredRectangleWithText extends Rectangle {
    constructor(heigth, width, text, bgColor) {
        super(heigth, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст:  ${this.text}, Цвет: ${this.bgColor}`);
    }
}

const r = new Rectangle(5, 10);
console.log(r);
console.log(r.calcArea());

const q = new coloredRectangleWithText(2, 2, `Квадрат`, `black`);
console.log(q);
console.log(q.calcArea());
q.showMyProps();



// КЛАССЫ (ООП):
// 1. Абстракция - отделяем концепцию (шаблон) от её экземпляров.
// 2. Наследования - способность объекта (класса) базироваться на другом объекте или классе.

// 1. Обычная функция: this = window, но если 'use strict' - undefined. 
// 2. Контекст у методов объекта - это сам объект.
// 3. This в конструкторах и классах - это новый экземпляр объекта.
// 4. Ручная привязка this: call, apply, bind.
// 5. У стрелочной функции нет своего контекста 
// (она связывается с лексическим окружением, то есть функцией, внутри которой определена стрелочная функция).

// Откуда берет контекст стрелочная функция?
// Вкратце: контекст обычных функций зависит от места вызова,
// а контекст стрелочных функций — от того места, где они были определены.