import assert from "assert";
/**
 * #Task 1: Примените метод slice что бы получить следующие значения
 */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const arr1 = animals.slice(); //TODO Write code here
assert.deepEqual(arr1, ["camel", "duck", "elephant"]);

const arr2 = animals.slice(); //TODO Write code here
assert.deepEqual(arr2, ["camel", "duck"]);

const arr3 = animals.slice(); //TODO Write code here
assert.deepEqual(arr3, ["bison", "camel", "duck", "elephant"]);

const arr4 = animals.slice(); //TODO Write code here
assert.deepEqual(arr4, ["duck", "elephant"]);

const arr5 = animals.slice(); //TODO Write code here
assert.deepEqual(arr5, ["camel", "duck"]);

const arr6 = animals.slice(); //TODO Write code here
assert.deepEqual(arr6, ["ant", "bison", "camel", "duck", "elephant"]);
// # На случаи затруднений: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80
