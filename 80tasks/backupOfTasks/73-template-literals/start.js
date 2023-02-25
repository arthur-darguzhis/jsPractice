import assert from "assert";

/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  {
    brand: "Honda",
    price: 13000
  },
  {
    brand: "Rolls-Royce",
    price: 120000
  }
];

const carInfo = (car) => {
  //TODO write code here
};

assert.deepEqual(carInfo(cars[0]), "Цена автомобиля Honda - 13000$ и это дешёвая машина");
assert.deepEqual(carInfo(cars[1]), "Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина");
