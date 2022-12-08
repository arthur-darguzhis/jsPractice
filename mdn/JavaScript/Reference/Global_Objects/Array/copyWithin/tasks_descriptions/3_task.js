/**
 * #Task 3: Измените массив используя функцию Array.copyWithin так
 * что бы в результате содержимое стало [4, 2, 3, 4, 5]
 *
 * arr.copyWithin(target, start, end) – копирует свои элементы,
 *   начиная со start и заканчивая end,
 *   в собственную позицию target (перезаписывает существующие).
 */
const arr = [1, 2, 3, 4, 5];

const start = ; /* //TODO use only negative number */
const end = ; /* //TODO use only negative number */

if(start >= 0 || end >= 0){
  throw new Error('arguments must be negative numbers');
}

arr.copyWithin(0, start, end);

console.log(JSON.stringify(arr) === JSON.stringify([4, 2, 3, 4, 5]));

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
