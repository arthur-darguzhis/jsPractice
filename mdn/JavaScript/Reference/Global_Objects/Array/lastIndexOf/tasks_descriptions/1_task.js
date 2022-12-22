import assert from "assert";

/**
 * Ищем справа на лево, элемент со значением 4 и возвращаем его индекс
 *                          👇
 * [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
 *  <- <- <- <- <- <- <- <- <- <-
 */

const lastIndex = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; //TODO write code here

assert.equal(lastIndex, 8);
// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80
