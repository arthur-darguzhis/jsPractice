import assert from "assert";

/**
 * Ищем справа на лево, элемент со значением 2 и возвращаем его индекс
 * Поиск производить только в промежутке от 5 до 0 индекса,
 *              👇
 * [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
 *  <- <- <- <- <- <-
 */

const result = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]; //TODO write code here

assert.equal(result, 4);

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80
