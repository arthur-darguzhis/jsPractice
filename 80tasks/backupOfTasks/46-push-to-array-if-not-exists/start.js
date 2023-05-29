/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * верните строку "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */
import assert from "assert";

const myNumbers = [123, 50, 27]

assert.equal("50 уже находится в массиве", pushIfUnique(myNumbers, 50))

pushIfUnique(myNumbers, 80)
assert.deepEqual([123, 50, 27, 80], myNumbers)

assert.equal("80 уже находится в массиве", pushIfUnique(myNumbers, 80))
pushIfUnique(myNumbers, 77)

assert.deepEqual([123, 50, 27, 80, 77], myNumbers)
