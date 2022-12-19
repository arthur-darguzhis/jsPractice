/**
 * #Task 1: Не запуская кода, скажите что выдаст 9 строка?
 */

let arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
