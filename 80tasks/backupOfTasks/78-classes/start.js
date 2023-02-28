import assert from "assert";
/** ЗАДАЧА 78 - Классы
 *
 * 1. Создайте класс "Fruit"
 *
 * 2. У каждого экземпляра этого класса должно быть
 * два собственных свойства:
 *  - title
 *  - price
 *
 * 3. Также нужно добавить метод "priceInfo", который
 * будет возвращать строку, содержащую название и цену фрукта
 *
 * 4. Выводы в консоли должны совпасть
 */

const apple = new Fruit('Apple', 2)
assert.equal(apple.priceInfo(), 'Price of the Apple is 2$')

const orange = new Fruit('Orange', 3)
assert.equal(orange.priceInfo(), 'Price of the Orange is 3$')
