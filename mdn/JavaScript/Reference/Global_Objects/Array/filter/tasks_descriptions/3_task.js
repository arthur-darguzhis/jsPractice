import assert from "assert";
/**
 * #Task 3: имплементируйте функцию isPrime что бы отфильтровать все простые числа в массиве
 * простое число - это положительное число которое делится без остатка только на 1 и на само себя.
 */

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  //TODO write code here
}

assert.deepEqual(array.filter(isPrime), [2, 3, 5, 7, 11, 13])

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BD%D0%B0%D0%B9%D1%82%D0%B8_%D0%B2%D1%81%D0%B5_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5
