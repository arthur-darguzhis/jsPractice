const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
