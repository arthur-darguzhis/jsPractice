/**
 * #Task 4:
 * Реализуйте функцию filterItems с двумя параметрами arr (массив) и query (строка)
 * Элементы массива должны фильтроваться на основе критериев поиска query (14-15) строки
 */

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const filterItems = (arr, query) => {
  return arr.filter( /** //TODO write code here */)
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5
