import assert from "assert";
/**
 * #Task 1: Добавьте в начало масива значения -10 -5
 */

const array1 = [1, 2, 3];
const arrLength = array1; //TODO write code here

assert.deepEqual(array1, [-10, -5, 1, 2, 3]);
assert.deepEqual(arrLength, 5);
// # На случаи затруднений: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#try_it
