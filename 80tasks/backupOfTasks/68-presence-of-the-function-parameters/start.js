import assert from "assert";
/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */


function square(a) {
  //TODO write code here
  return a * a;
}

assert.equal(square(10), 100);
assert.throws(() => {square()});
