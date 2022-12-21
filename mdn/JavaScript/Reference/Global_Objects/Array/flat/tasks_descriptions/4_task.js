/**
 * #Task 4: Установите нужное значение переменной depth (не число) что бы
 * преобразовать массив [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] в [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const depth =; /** TODO write code here */
if (typeof depth < 100) {
  throw new Error("value for \"deep\" variable must not be number");
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat(depth));

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
