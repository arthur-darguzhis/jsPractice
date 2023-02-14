import assert from "assert";
/**
 * #Task 4:
 * Реализуйте фильтрацию по вхождению подстроки в строку
 */

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (arr, query) => {
  return arr.filter( /** //TODO write code here */)
}

assert.deepEqual(['apple', 'grapes'], filterItems(fruits, 'ap'))
assert.deepEqual(['banana', 'mango', 'orange'], filterItems(fruits, 'an'))

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5
