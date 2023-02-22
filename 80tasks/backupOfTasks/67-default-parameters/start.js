import assert from "assert";

/** ЗАДАЧА 67 - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */

function multiplyBy(a, mult) {
  mult = mult !== undefined ? mult : 2;
  return a * mult;
}

assert.equal(multiplyBy(2), 4);
assert.equal(multiplyBy(2, undefined), 4);
assert.equal(multiplyBy(2, 0), 0);
assert.equal(multiplyBy(5, 10), 50);
