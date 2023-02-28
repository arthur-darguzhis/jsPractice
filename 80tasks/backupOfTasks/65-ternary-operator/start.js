import assert from "assert";
/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

function isNumber(a) {
  //TODO write code here
  if (typeof a === 'number') {
    return `${a} - это число`
  } else {
    return `${a} - это не число`
  }
}

assert.equal(isNumber(10), '10 - это число')
assert.equal(isNumber('Привет'), 'Привет - это не число')
assert.equal(isNumber(true), 'true - это не число')
