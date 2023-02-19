/**
 * #Task 2: Не запуская кода скажите корректно ли отработает
 * в 10 строке передача функции isBigEnough в качестве аргумента?
 */

function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
