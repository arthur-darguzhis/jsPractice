import assert from "assert";
/**
 * #Task 2: преобразуйте массив [1, 2, [3, 4, [5, 6]]] в [1, 2, 3, 4, [5, 6]]
 */

const arr = [1, 2, [3, 4, [5, 6]]];
const result = arr; //TODO write code here
assert.deepEqual(result, [1, 2, 3, 4, [5, 6]])

// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B
